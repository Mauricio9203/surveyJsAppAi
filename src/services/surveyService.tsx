// src/services/surveyService.ts
const API_URL = "https://fastapisurveyjsai.onrender.com/generate-survey";

// Función para generar la encuesta con el texto de entrada
export const generateSurvey = async (inputText: string) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input_text: inputText }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate survey");
    }

    const data = await response.json();
    return data; // Devuelve los datos de la encuesta
  } catch (error) {
    console.error("Error:", error);
    throw error; // Lanza el error para que lo manejes en el componente
  }
};
