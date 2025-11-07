import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Award,
  BookOpen,
  ChevronRight,
  GraduationCap,
  MapPin,
  Phone,
  Youtube,
  MessageSquare,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { courses, testimonials, successStories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import MainLayout from '@/components/layout/main-layout';

const getPlaceholderImage = (id: string) => {
  return PlaceHolderImages.find((img) => img.id === id);
};

export default function Home() {
  return (
    <MainLayout>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] w-full">
          <Image
            src={getPlaceholderImage('hero-bg')?.imageUrl || ''}
            alt="Students studying at Karmveer IAS Academy"
            data-ai-hint="students studying"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold !leading-tight">
              Your Path to Government Service Begins Here.
            </h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200">
              Join Karmveer IAS Academy to excel in UPSC, MPSC, SSC, and other government exams with our experienced faculty and proven track record.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6">
                <Link href="/admissions">Apply Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black font-bold text-lg px-8 py-6">
                <Link href="/contact">Join Free Counselling</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Key Stats Section */}
        <section className="bg-secondary py-12 md:py-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <GraduationCap className="h-12 w-12 text-primary" />
                <p className="text-4xl font-bold mt-2">1000+</p>
                <p className="text-muted-foreground text-lg">Selections</p>
              </div>
              <div className="flex flex-col items-center">
                <Award className="h-12 w-12 text-primary" />
                <p className="text-4xl font-bold mt-2">10+</p>
                <p className="text-muted-foreground text-lg">Years of Experience</p>
              </div>
              <div className="flex flex-col items-center">
                <BookOpen className="h-12 w-12 text-primary" />
                <p className="text-4xl font-bold mt-2">Trusted</p>
                <p className="text-muted-foreground text-lg">Faculty</p>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Overview Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto">
            <h2 className="text-center font-headline text-3xl md:text-4xl font-bold">Our Premier Courses</h2>
            <p className="text-center mt-2 max-w-2xl mx-auto text-muted-foreground">
              We offer a wide range of courses to help you crack the toughest government exams.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {courses.slice(0, 3).map((course) => (
                <Card key={course.title} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
                      <Link href={`/courses/${course.id}`}>
                        Learn More <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button asChild size="lg" variant="default">
                <Link href="/courses">View All Courses</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-secondary py-12 md:py-20">
          <div className="container mx-auto">
            <h2 className="text-center font-headline text-3xl md:text-4xl font-bold">What Our Students Say</h2>
            <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full max-w-4xl mx-auto mt-10"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2">
                    <div className="p-1">
                      <Card className="h-full">
                        <CardContent className="flex flex-col items-center text-center p-6">
                          <Avatar className="w-20 h-20 mb-4 border-2 border-primary">
                            <AvatarImage src={getPlaceholderImage(testimonial.avatar)?.imageUrl} alt={testimonial.name} data-ai-hint="person portrait"/>
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                          <p className="font-bold mt-4">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* YouTube Video Embed Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Guidance from Our Experts</h2>
             <div className="mt-10 aspect-video max-w-4xl mx-auto">
                <iframe
                    className="w-full h-full rounded-lg shadow-xl"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
          </div>
        </section>

      </main>
    </MainLayout>
  );
}
