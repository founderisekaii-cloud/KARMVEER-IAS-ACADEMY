'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { StudyPlanForm } from "@/components/ai/study-plan-form";
import { ExamSummaryForm } from "@/components/ai/exam-summary-form";
import { BotMessageSquare, Newspaper } from "lucide-react";

export default function AiToolsPage() {
  return (
    <Tabs defaultValue="study-plan" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="study-plan">
          <BotMessageSquare className="mr-2 h-4 w-4" />
          AI Study Plan Generator
        </TabsTrigger>
        <TabsTrigger value="exam-summary">
          <Newspaper className="mr-2 h-4 w-4" />
          Exam Update Summarizer
        </TabsTrigger>
      </TabsList>
      <TabsContent value="study-plan">
        <Card>
          <CardHeader>
            <CardTitle>AI Study Plan Generator</CardTitle>
            <CardDescription>
              Create personalized study plans for students by providing their details below.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <StudyPlanForm />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="exam-summary">
        <Card>
          <CardHeader>
            <CardTitle>Automated Exam Update Summarizer</CardTitle>
            <CardDescription>
              Paste the text from an exam notification to automatically generate a summary and key points.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ExamSummaryForm />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
