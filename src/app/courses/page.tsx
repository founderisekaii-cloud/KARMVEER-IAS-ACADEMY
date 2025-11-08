import MainLayout from '@/components/layout/main-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { courses } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getPlaceholderImage = (id: string) => {
  return PlaceHolderImages.find((img) => img.id === id);
};

export default function CoursesPage() {
  return (
    <MainLayout>
      <div className="container py-12 md:py-20">
        <h1 className="text-center font-headline text-4xl md:text-5xl font-bold">Our Courses</h1>
        <p className="text-center mt-2 max-w-2xl mx-auto text-muted-foreground">
          Explore our wide range of courses designed for success in government exams.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <Image
                src={getPlaceholderImage(course.image)?.imageUrl || ''}
                alt={course.title}
                data-ai-hint={getPlaceholderImage(course.image)?.imageHint || ''}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="font-headline">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{course.description}</p>
                <Button asChild className="mt-4 w-full" variant="outline">
                  <Link href={`/courses`}>
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
