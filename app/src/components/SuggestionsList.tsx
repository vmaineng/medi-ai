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
