
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Loader2 } from "lucide-react";
import { generateWithGemini } from "@/utils/geminiApi";

interface AiExplainerProps {
  questionText: string;
  answerText: string;
}

const AiExplainer = ({ questionText, answerText }: AiExplainerProps) => {
  const [aiExplanation, setAiExplanation] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleGenerateExplanation = async () => {
    setIsLoading(true);
    const prompt = `
      I'm studying for a fire safety quiz. Please provide a clear, detailed explanation for the following:
      
      Question: ${questionText}
      
      Explanation: ${answerText}
      
      Please elaborate on this explanation with additional context, examples, and why this is important for fire safety in hotels.
      Keep your response focused, educational, and under 200 words.
    `;

    const response = await generateWithGemini(prompt);
    setIsLoading(false);

    if (response.success) {
      setAiExplanation(response.text);
      setIsExpanded(true);
    }
  };

  return (
    <div className="mt-4">
      {!isExpanded ? (
        <Button 
          variant="outline" 
          className="flex items-center gap-2 text-sm"
          onClick={handleGenerateExplanation}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Generating AI explanation...
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4 text-amber-500" />
              Get AI-powered explanation
            </>
          )}
        </Button>
      ) : (
        <Card className="bg-amber-50 border-amber-200">
          <CardHeader className="py-3 px-4">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-amber-500" />
              AI-powered explanation
            </CardTitle>
          </CardHeader>
          <CardContent className="py-3 px-4">
            <div className="text-sm whitespace-pre-line">
              {aiExplanation}
            </div>
            <Button 
              variant="link" 
              className="text-xs p-0 h-auto mt-2 text-amber-700"
              onClick={() => setIsExpanded(false)}
            >
              Hide explanation
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AiExplainer;
