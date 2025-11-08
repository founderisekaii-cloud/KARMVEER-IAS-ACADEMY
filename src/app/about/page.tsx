import MainLayout from '@/components/layout/main-layout';

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="container py-12 md:py-20">
        <h1 className="text-center font-headline text-4xl md:text-5xl font-bold">About Us</h1>
        <div className="max-w-3xl mx-auto mt-6 space-y-4 text-muted-foreground">
            <p>Karmveer IAS Academy is a premier coaching institute dedicated to preparing aspirants for various competitive government examinations like UPSC, MPSC, SSC, Banking, and more.</p>
            <p>Our mission is to provide quality education and mentorship to help students achieve their dreams of serving the nation. We have a team of experienced faculty, comprehensive study material, and a proven track record of success.</p>
        </div>
      </div>
    </MainLayout>
  );
}
