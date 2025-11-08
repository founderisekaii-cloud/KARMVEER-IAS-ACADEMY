import MainLayout from '@/components/layout/main-layout';

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="container py-12 md:py-20">
        <h1 className="text-center font-headline text-4xl md:text-5xl font-bold">About Us – Karmaveer IAS Institute</h1>
        <p className="text-center mt-2 max-w-2xl mx-auto text-muted-foreground">
          Best IAS Coaching in Thane
        </p>
        <div className="max-w-3xl mx-auto mt-8 space-y-6 text-muted-foreground text-lg">
          <p>Established in 2025, Karmaveer IAS Institute is one of the most trusted and result-oriented coaching centers in Thane for UPSC (IAS, IPS, IFS), MPSC (DSP, Tahsildar), and other competitive exams like Railway, Banking, and SSC.</p>
          <p>At Karmaveer IAS Institute, our mission is to provide quality education with personal mentorship. We focus on building strong concepts, analytical skills, and the right exam-oriented approach to help every aspirant achieve success in the shortest possible time.</p>
          <p>Our team of expert educators, updated study material, and motivational learning environment make us the best IAS and MPSC coaching institute in Thane. We are committed to transforming dreams into reality through dedication, discipline, and guidance.</p>
           <p className="text-center font-semibold text-xl pt-4">💡 Join Karmaveer IAS Institute today — where ambition meets achievement.</p>
        </div>
      </div>
    </MainLayout>
  );
}
