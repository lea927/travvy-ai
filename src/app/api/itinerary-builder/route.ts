import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { z } from "zod";

const ItinerarySchema = z.object({
  days: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      morning: z.object({
        title: z.string(),
        type: z.string(),
        description: z.string(),
        photo_query: z.string(),
        reminders: z.array(z.string()),
      }),
      afternoon: z.object({
        title: z.string(),
        type: z.string(),
        description: z.string(),
        photo_query: z.string(),
        reminders: z.array(z.string()),
      }),
      evening: z.object({
        title: z.string(),
        type: z.string(),
        description: z.string(),
        photo_query: z.string(),
        reminders: z.array(z.string()),
      }),
    })
  ),
  tldr: z.array(z.string()),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userMessage } = body;

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.responses.create({
      prompt: {
        id: "pmpt_6880b54d41f481948f43c6da61ef66650c05bd0a40604ee9",
        version: "1",
      },
      input: [
        {
          role: "user",
          content: userMessage,
        },
      ],
      text: {
        format: {
          type: "json_schema",
          name: "ItinerarySchema",
          strict: false,
          schema: {
            type: "object",
            properties: {},
            required: [],
          },
        },
      },
      reasoning: {},
      store: true,
    });

    const formattedResponse = zodTextFormat(
      ItinerarySchema,
      JSON.parse(response.output_text)
    );

    return Response.json({ data: formattedResponse });
  } catch {
    return new Response(null, { status: 500 });
  }
}
