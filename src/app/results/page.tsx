import MainLayout from '@/components/layout/main-layout';
import { successStories } from '@/lib/data';

export default function ResultsPage() {
  return (
    <MainLayout>
      <div className="container py-12 md:py-20">
        <h1 className="text-center font-headline text-4xl md:text-5xl font-bold">Our Achievers</h1>
         <p className="text-center mt-2 max-w-2xl mx-auto text-muted-foreground">
          Celebrating the success of our students who have secured top ranks in various government exams.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {successStories.map(story => (
                <div key={story.name} className="text-center">
                    <p className="font-bold">{story.name}</p>
                    <p className="text-muted-foreground">{story.rank}</p>
                </div>
            ))}
        </div>
      </div>
    </MainLayout>
  );
}
