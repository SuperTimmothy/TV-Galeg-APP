import { GoogleGenAI, Type } from "@google/genai";
import { NewsItem, ScheduleItem } from "../types";

export const getGalicianInsights = async (): Promise<{ news: NewsItem[], schedule: ScheduleItem[] }> => {
  try {
    // Fixed: Initializing GoogleGenAI inside the function using process.env.API_KEY directly as required
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Gere uma lista de 5 notícias atuais e realistas (fictícias mas baseadas no contexto da Galiza) e uma grade de programação para a TV Galega hoje. As notícias devem ser em Português. Formato JSON.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            news: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  title: { type: Type.STRING },
                  summary: { type: Type.STRING },
                  category: { type: Type.STRING },
                  time: { type: Type.STRING }
                },
                required: ["id", "title", "summary", "category", "time"]
              }
            },
            schedule: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  time: { type: Type.STRING },
                  program: { type: Type.STRING },
                  description: { type: Type.STRING },
                  isLive: { type: Type.BOOLEAN }
                },
                required: ["time", "program", "description"]
              }
            }
          },
          required: ["news", "schedule"]
        }
      }
    });

    const data = JSON.parse(response.text || '{"news":[], "schedule":[]}');
    return data;
  } catch (error) {
    console.error("Error fetching Gemini insights:", error);
    return {
      news: [
        { id: "1", title: "Festival de Cangas atrai milhares", summary: "O evento cultural celebra as tradições galegas com música e gastronomia local.", category: "Cultura", time: "10 min atrás" },
        { id: "2", title: "Novas rotas de pesca em Vigo", summary: "Setor pesqueiro discute sustentabilidade nas águas do Atlântico.", category: "Economia", time: "1h atrás" }
      ],
      schedule: [
        { time: "19:00", program: "Telexornal Noite", description: "As principais notícias do dia na Galiza e no mundo.", isLive: true },
        { time: "20:30", program: "Luar", description: "O clássico programa de variedades e música galega.", isLive: false }
      ]
    };
  }
};