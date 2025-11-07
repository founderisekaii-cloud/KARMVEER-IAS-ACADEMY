'use server';

/**
 * @fileOverview AI-powered study plan generator flow.
 *
 * - generateStudyPlan - A function that generates a personalized study plan.
 * - StudyPlanInput - The input type for the generateStudyPlan function.
 * - StudyPlanOutput - The return type for the generateStudyPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StudyPlanInputSchema = z.object({
  examGoals: z
    .string()
    .describe('The exam goals of the student (e.g., UPSC, MPSC, SSC).'),
  timeAvailability: z
    .string()
    .describe('The time availability of the student (e.g., 2 hours per day).'),
  previousPerformance: z
    .string()
    .describe(
      'The previous performance of the student in relevant subjects (e.g., good in math, weak in history).'
    ),
  courseDetails: z
    .string()
    .describe('Details of the course for which the study plan is being generated.'),
  examSchedules: z
    .string()
    .describe('Exam schedules or deadlines to consider when creating the plan.'),
});
export type StudyPlanInput = z.infer<typeof StudyPlanInputSchema>;

const StudyPlanOutputSchema = z.object({
  studyPlan: z.string().describe('The generated personalized study plan.'),
});
export type StudyPlanOutput = z.infer<typeof StudyPlanOutputSchema>;

export async function generateStudyPlan(
  input: StudyPlanInput
): Promise<StudyPlanOutput> {
  return studyPlanFlow(input);
}

const studyPlanPrompt = ai.definePrompt({
  name: 'studyPlanPrompt',
  input: {schema: StudyPlanInputSchema},
  output: {schema: StudyPlanOutputSchema},
  prompt: `You are an expert study plan generator for government exams in India. Based on the student's exam goals, time availability, previous performance, course details, and exam schedules, generate a personalized study plan.

Exam Goals: {{{examGoals}}}
Time Availability: {{{timeAvailability}}}
Previous Performance: {{{previousPerformance}}}
Course Details: {{{courseDetails}}}
Exam Schedules: {{{examSchedules}}}

Study Plan:`,
});

const studyPlanFlow = ai.defineFlow(
  {
    name: 'studyPlanFlow',
    inputSchema: StudyPlanInputSchema,
    outputSchema: StudyPlanOutputSchema,
  },
  async input => {
    const {output} = await studyPlanPrompt(input);
    return output!;
  }
);
