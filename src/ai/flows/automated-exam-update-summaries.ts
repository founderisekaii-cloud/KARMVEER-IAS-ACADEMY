'use server';
/**
 * @fileOverview This file contains a Genkit flow for automatically generating summaries and key points from exam notifications.
 *
 * - generateExamUpdateSummary - A function that takes exam notification text and returns a summary and key points.
 * - ExamUpdateSummaryInput - The input type for the generateExamUpdateSummary function.
 * - ExamUpdateSummaryOutput - The return type for the generateExamUpdateSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExamUpdateSummaryInputSchema = z.object({
  notificationText: z
    .string()
    .describe('The text content of the exam notification.'),
});
export type ExamUpdateSummaryInput = z.infer<typeof ExamUpdateSummaryInputSchema>;

const ExamUpdateSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the exam notification.'),
  keyPoints: z.string().describe('Key points extracted from the exam notification.'),
});
export type ExamUpdateSummaryOutput = z.infer<typeof ExamUpdateSummaryOutputSchema>;

export async function generateExamUpdateSummary(
  input: ExamUpdateSummaryInput
): Promise<ExamUpdateSummaryOutput> {
  return examUpdateSummaryFlow(input);
}

const examUpdateSummaryPrompt = ai.definePrompt({
  name: 'examUpdateSummaryPrompt',
  input: {schema: ExamUpdateSummaryInputSchema},
  output: {schema: ExamUpdateSummaryOutputSchema},
  prompt: `You are an AI assistant tasked with summarizing exam notifications and extracting key points for students.

  Given the following exam notification text, provide a concise summary and list the key points:

  Exam Notification Text:
  {{notificationText}}

  Summary:
  Key Points:`, // Ensure LLM returns both the summary and key points.
});

const examUpdateSummaryFlow = ai.defineFlow(
  {
    name: 'examUpdateSummaryFlow',
    inputSchema: ExamUpdateSummaryInputSchema,
    outputSchema: ExamUpdateSummaryOutputSchema,
  },
  async input => {
    const {output} = await examUpdateSummaryPrompt(input);
    return output!;
  }
);
