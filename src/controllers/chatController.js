import { z } from "zod";
import { answerChat } from "../services/chatService.js";
import { sendSuccess } from "../utils/response.js";

const chatSchema = z.object({
  messages: z.array(z.object({ role: z.enum(["user", "assistant"]), content: z.string().trim().min(1).max(4000) })).min(1).max(20),
});

export async function chat(req, res, next) {
  try {
    const { messages } = chatSchema.parse(req.body);
    const answer = await answerChat(messages);
    sendSuccess(res, { role: "assistant", content: answer }, "Chat response generated.");
  } catch (error) {
    if (error instanceof z.ZodError) { error.statusCode = 400; error.message = "Please send a valid chat message."; }
    if (!error.statusCode && [401, 403, 429, 500, 503].includes(Number(error.status))) {
      error.statusCode = Number(error.status) === 401 || Number(error.status) === 403 ? 502 : 503;
      error.message = error.statusCode === 502 ? "The chatbot API key was rejected. Check GEMINI_API_KEY in backend/.env." : "The assistant is temporarily busy. Please try again in a moment.";
    }
    next(error);
  }
}
