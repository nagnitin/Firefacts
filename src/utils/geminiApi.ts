
import { toast } from "sonner";

const API_KEY = "AIzaSyC2BTIQj4EB32J7E9w6luQdqsMMPxM-9Os";
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

export interface GeminiResponse {
  text: string;
  success: boolean;
}

export const generateWithGemini = async (prompt: string): Promise<GeminiResponse> => {
  try {
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Gemini API error:", errorData);
      throw new Error(`API error: ${errorData.error?.message || "Unknown error"}`);
    }

    const data = await response.json();
    
    if (data.candidates && data.candidates.length > 0) {
      const textContent = data.candidates[0].content.parts[0].text;
      return { text: textContent, success: true };
    } else {
      throw new Error("No response generated");
    }
  } catch (error) {
    console.error("Error generating content with Gemini:", error);
    toast.error("Failed to generate AI content. Please try again.");
    return { text: "", success: false };
  }
};
