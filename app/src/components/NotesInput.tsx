import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Loader2, Sparkles } from "lucide-react";
import { NotesInputProps } from "../types/noteinput";
import { Teachers } from "next/font/google";

export function NotesInput({ onSubmit, isLoading }: NotesInputProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const notes = formData.get("notes") as string;
    if (notes.trim()) {
      onSubmit(notes);
    }
  };
  return (
    <Card className="border-pink-100 shadow-lg bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-500">
            Provide update
          </span>
          <Sparkles className="h-5 w-5 text-pink-400" />
        </CardTitle>

        <CardDescription>
          Enter statement about patient&apos;s current condition
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            name="notes"
            placeholder="e.g., Patient shows improved vitals. Blood pressure stable at 120/80. Continue current medication regimen. Monitor glucose levels daily..."
            className="min-h-[200px] border-pink-100 focus:border-pink-300 focus:ring-pink-200"
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-linear-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Suggestions...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Suggestions
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
