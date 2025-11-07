"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { generateExamUpdateSummary } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  notificationText: z.string().min(50, "Notification text must be at least 50 characters."),
});

type ExamSummaryFormValues = z.infer<typeof formSchema>;

export function ExamSummaryForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ summary: string; keyPoints: string } | null>(null);

  const form = useForm<ExamSummaryFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      notificationText: "",
    },
  });

  async function onSubmit(values: ExamSummaryFormValues) {
    setIsLoading(true);
    setResult(null);
    try {
      const summaryResult = await generateExamUpdateSummary(values);
      setResult(summaryResult);
    } catch (error) {
      console.error("Error generating summary:", error);
      setResult({ summary: "Failed to generate summary. Please try again.", keyPoints: "" });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="notificationText"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Exam Notification Text</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Paste the full text of the exam notification here..."
                    className="min-h-[200px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Generate Summary
          </Button>
        </form>
      </Form>

      {(isLoading || result) && (
        <Card className="mt-8">
          <CardContent className="p-6">
            {isLoading && (
              <div className="flex flex-col items-center justify-center space-y-4">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-muted-foreground">Summarizing the notification...</p>
              </div>
            )}
            {result && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-headline text-2xl mb-2">Summary</h3>
                  <p className="text-muted-foreground bg-secondary p-4 rounded-md">{result.summary}</p>
                </div>
                <div>
                  <h3 className="font-headline text-2xl mb-2">Key Points</h3>
                   <div className="prose prose-sm max-w-none whitespace-pre-wrap rounded-md bg-secondary p-4">
                    {result.keyPoints}
                </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
