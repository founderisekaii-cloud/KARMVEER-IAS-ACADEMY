import MainLayout from '@/components/layout/main-layout';

export default function AdmissionsPage() {
  return (
    <MainLayout>
      <div className="container py-12 md:py-20">
        <h1 className="text-center font-headline text-4xl md:text-5xl font-bold">Admissions</h1>
        <p className="text-center mt-2 max-w-2xl mx-auto text-muted-foreground">
          Join us and start your journey towards a successful career in government service.
        </p>
        <div className="max-w-2xl mx-auto mt-10 text-center">
            <p>Our admission process is currently offline. Please visit our center for more details.</p>
        </div>
      </div>
    </MainLayout>
  );
}
