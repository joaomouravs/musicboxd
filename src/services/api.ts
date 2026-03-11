import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

// 1. Configurações vindas do seu arquivo .env
const SPOTIFY_CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

let spotifyAccessToken = '';
let tokenExpirationTime = 0;

/**
 * SPOTIFY: Obter Token de Acesso
 */
export async function getSpotifyToken() {
  if (spotifyAccessToken && Date.now() < tokenExpirationTime) {
    return spotifyAccessToken;
  }
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: SPOTIFY_CLIENT_ID || '',
        client_secret: SPOTIFY_CLIENT_SECRET || '',
      }),
    });
    const data = await response.json();
    if (data.access_token) {
      spotifyAccessToken = data.access_token;
      tokenExpirationTime = Date.now() + (data.expires_in * 1000); 
      return spotifyAccessToken;
    }
    return null;
  } catch (error) {
    return null;
  }
}

/**
 * SPOTIFY: Pesquisar Álbuns
 */
export async function searchSpotify(query: string) {
  if (!query) return null;
  const token = await getSpotifyToken();
  if (!token) return null;
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=album,artist&limit=5`, 
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return await response.json();
  } catch (error) {
    return null;
  }
}

/**
 * SPOTIFY: Novos Lançamentos
 */
export async function getNewReleases() {
  const token = await getSpotifyToken();
  if (!token) return [];
  try {
    const response = await fetch(
      'https://api.spotify.com/v1/browse/new-releases?limit=10', 
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const data = await response.json();
    return data.albums ? data.albums.items : [];
  } catch (error) {
    return [];
  }
}

/**
 * GEMINI AI: Gerar Artigo (Versão com Bypass de Região)
 */
export async function generateAlbumArticle(albumName: string, artistName: string) {
  if (!GEMINI_API_KEY) {
    return "Erro: Chave API do Gemini não configurada no .env.";
  }

  try {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    
    // Usamos o gemini-1.5-flash que é o mais compatível globalmente
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      safetySettings: [
        { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
      ],
    });

    const prompt = `Escreva um artigo de revista apaixonado de 4 parágrafos sobre o álbum "${albumName}" do artista "${artistName}" em Português. Fale sobre os bastidores e o impacto cultural.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
    
  } catch (error: any) {
    console.error("Erro detalhado da IA:", error);
    
    // Tratamento amigável para o erro de localização (IP do celular)
    if (error.message?.includes("location")) {
      return "⚠️ BLOQUEIO DE REDE: A Google não permite o uso da IA nesta rede móvel. \n\nSOLUÇÃO: Conecte-se ao Wi-Fi da sua casa ou use uma VPN para o artigo aparecer!";
    }
    
    return `O jornalista teve um bloqueio criativo: ${error.message}`;
  }
}