import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { docText } = await req.json();

    if (!docText) {
      return NextResponse.json(
        { error: "Missing doctors note" },
        { status: 400 }
      );
    }

    const prompt = `
    You are a medical information assistant. Your job is to read the doctor's note and produce a clear, simple explanation for the patient.

Rules:
- Do NOT give medical advice.
- Do NOT create a diagnosis.
- Summarize what the doctor already stated in plain language.
- Highlight key concerns mentioned by the doctor.
- Provide general wellness steps that are safe for anyone (like hydration, rest, monitoring symptoms).
- If the note implies urgent issues, say: “Please contact your healthcare provider for clarification.”

Output in this format:
1. Summary of what the doctor said
2. What the doctor is monitoring or concerned about
3. Safe general steps
4. Questions the patient can ask their doctor for clarity

Doctor’s note:
${docText}
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const feedback = completion.choices[0].message.content;
    return NextResponse.json({ feedback });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
