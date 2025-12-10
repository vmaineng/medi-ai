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

    const prompt = `As a doctor professional, please simplify the doctors note into a diagnosis, steps they can take to prevent :\n\n${docText}`;

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
