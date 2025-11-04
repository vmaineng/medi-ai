import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Alert, AlertDescription } from "../ui/alert";
import {
  CheckCircle2,
  AlertCircle,
  Bell,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { Suggestion } from "../types/suggestion";

interface SuggestionsListProps {
  suggestions: Suggestion[];
  hasSubmitted: boolean;
}

const categoryConfig = {
  action: {
    icon: CheckCircle2,
    label: "Action Item",
    className: "bg-blue-50 text-blue-600 border-blue-200",
  },
  monitoring: {
    icon: Bell,
    label: "Monitor",
    className: "bg-purple-50 text-purple-600 border-purple-200",
  },
  consideration: {
    icon: Lightbulb,
    label: "Consider",
    className: "bg-green-50 text-green-600 border-green-200",
  },
  alert: {
    icon: AlertCircle,
    label: "Alert",
    className: "bg-pink-50 text-pink-600 border-pink-200",
  },
};

export function SuggestionsList({
  suggestions,
  hasSubmitted,
}: SuggestionsListProps) {
  if (!hasSubmitted) {
    return (
      <Card className="border-purple-100 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-blue-500">
              AI Suggestions
            </span>
            <Sparkles className="h-5 w-5 text-purple-400" />
          </CardTitle>
          <CardDescription>
            Helpful recommendations will appear here after you submitted notes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-12 text-purple-300">
            <Lightbulb className="h-12 w-12 mb-3" />
            <p className="text-sm">Waiting for input...</p>
          </div>
        </CardContent>
      </Card>
    );
  }
}
