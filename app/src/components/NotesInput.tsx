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

export function NotesInput({ onSubmit, isLoading }: NotesInputProps) {
  const handleSubmit = (e: React.FormatEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const notes = formData.get("notes") as string;
    if (notes.trim()) {
      onSubmit(notes);
    }
  };
}
