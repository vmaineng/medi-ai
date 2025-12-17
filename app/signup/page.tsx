import { useEffect, useState } from "react";
import { Input } from "../src/ui/input";
import { Label } from "../src/ui/label";
import { Button } from "../src/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../src/ui/card";
import { Loader2, Sparkles, Mail, Lock, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "../../utils/supabase/client";
import { useRouter } from "next/navigation";

const formSignupSchema = z
  .object({
    email: z.email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormSignUpValues = z.infer<typeof formSignupSchema>;

export function Signup() {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [redirectCountdown, setRedirectCountdown] = useState(5);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSignUpValues>({
    resolver: zodResolver(formSignupSchema),
  });

  useEffect(() => {
    if (!showSuccessModal) return;

    const timer = setInterval(() => {
      setRedirectCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/note");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [showSuccessModal, router]);

  const handleRegister = async (data: FormSignUpValues) => {
    setIsLoading(true);
    setError("");
    try {
      const { error } = await signUpNewUser(data.email, data.password);
      if (error) {
        throw error;
      } else {
        setShowSuccessModal(true);
        setRedirectCountdown(2);
        router.push("/note");
      }
    } catch (error) {
      let errorMessage = "Signup failed. Please try again.";

      if (error instanceof Error) {
        if (error.message.toLowerCase().includes("user already registered")) {
          errorMessage = "Account already exists. Please login instead.";
        } else {
          errorMessage = error.message;
        }
      } else if (typeof error === "string") {
        errorMessage = error;
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
}
