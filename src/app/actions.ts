"use server";

import {
  generateStudyPlan as generateStudyPlanFlow,
  StudyPlanInput,
  StudyPlanOutput,
} from "@/ai/flows/ai-study-plan-generator";
import {
  generateExamUpdateSummary as generateExamUpdateSummaryFlow,
  ExamUpdateSummaryInput,
  ExamUpdateSummaryOutput,
} from "@/ai/flows/automated-exam-update-summaries";

export async function generateStudyPlan(
  input: StudyPlanInput
): Promise<StudyPlanOutput> {
  return await generateStudyPlanFlow(input);
}

export async function generateExamUpdateSummary(
  input: ExamUpdateSummaryInput
): Promise<ExamUpdateSummaryOutput> {
  return await generateExamUpdateSummaryFlow(input);
}
