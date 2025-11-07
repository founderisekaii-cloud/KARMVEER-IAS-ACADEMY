import MainLayout from "@/components/layout/main-layout";
import { StudyPlanForm } from "@/components/ai/study-plan-form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

export default function StudyPlanPage() {
  return (
    <MainLayout>
      <div className="container py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-3xl md:text-4xl">AI-Powered Study Plan Generator</CardTitle>
              <CardDescription className="text-lg">
                Get a personalized study plan tailored to your goals and schedule. Just fill in the details below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <StudyPlanForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
