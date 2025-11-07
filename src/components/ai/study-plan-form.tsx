"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { generateStudyPlan } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  examGoals: z.string().min(3, "Exam goals are required."),
  timeAvailability: z.string().min(3, "Time availability is required."),
  previousPerformance: z.string().min(3, "Previous performance is required."),
  courseDetails: z.string().min(10, "Course details are required."),
  examSchedules: z.string().min(5, "Exam schedules are required."),
});

type StudyPlanFormValues = z.infer<typeof formSchema>;

export function StudyPlanForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [studyPlan, setStudyPlan] = useState("");

  const form = useForm<StudyPlanFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      examGoals: "",
      timeAvailability: "",
      previousPerformance: "",
      courseDetails: "",
      examSchedules: "",
    },
  });

  async function onSubmit(values: StudyPlanFormValues) {
    setIsLoading(true);
    setStudyPlan("");
    try {
      const result = await generateStudyPlan(values);
      setStudyPlan(result.studyPlan);
    } catch (error) {
      console.error("Error generating study plan:", error);
      setStudyPlan("Failed to generate study plan. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="examGoals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Exam Goals (e.g., UPSC, MPSC)</FormLabel>
                  <FormControl>
                    <Input placeholder="UPSC Civil Services 2025" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="timeAvailability"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time Availability</FormLabel>
                  <FormControl>
                    <Input placeholder="4 hours on weekdays, 8 on weekends" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="previousPerformance"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Previous Performance / Strengths & Weaknesses</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Good in Polity and History, weak in Economy and CSAT."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="courseDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course Details</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enrolled in General Studies Prelims + Mains batch. Topics covered so far: Modern History, a part of Polity."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="examSchedules"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Exam Schedules / Deadlines</FormLabel>
                <FormControl>
                  <Input placeholder="Prelims expected in June 2025" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Generate Study Plan
          </Button>
        </form>
      </Form>

      {(isLoading || studyPlan) && (
        <Card className="mt-8">
          <CardContent className="p-6">
            {isLoading && (
              <div className="flex flex-col items-center justify-center space-y-4">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-muted-foreground">Generating your personalized plan...</p>
              </div>
            )}
            {studyPlan && (
              <div>
                <h3 className="font-headline text-2xl mb-4">Your Personalized Study Plan</h3>
                <div className="prose prose-sm max-w-none whitespace-pre-wrap rounded-md bg-secondary p-4">
                    {studyPlan}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
