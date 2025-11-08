import MainLayout from '@/components/layout/main-layout';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="container py-12 md:py-20">
        <h1 className="text-center font-headline text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="text-center mt-2 max-w-2xl mx-auto text-muted-foreground">
          We'd love to hear from you. Reach out to us for any queries or for counselling.
        </p>
        <div className="max-w-sm mx-auto mt-10 space-y-4">
            <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 shrink-0 text-primary"/>
                <span>Near Hanuman Mandir, Patlipada, G.B. Road, Thane</span>
            </div>
             <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary"/>
                <a href="mailto:karmaveeriasinstitute@gmail.com" className="hover:text-primary">karmaveeriasinstitute@gmail.com</a>
            </div>
            <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary"/>
                <a href="tel:9136958719" className="hover:text-primary">9136958719</a>
            </div>
        </div>
      </div>
    </MainLayout>
  );
}
