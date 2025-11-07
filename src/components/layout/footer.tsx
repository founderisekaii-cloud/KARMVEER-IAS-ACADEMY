import Link from 'next/link';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">KARMVEER IAS ACADEMY</span>
            </Link>
            <p className="text-sm text-muted-foreground">Your Path to Government Service Begins Here.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Youtube /></Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 font-headline">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/courses" className="text-sm text-muted-foreground hover:text-primary">Courses</Link></li>
              <li><Link href="/results" className="text-sm text-muted-foreground hover:text-primary">Results</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 font-headline">Exams</h3>
            <ul className="space-y-2">
              <li><Link href="/courses?exam=upsc" className="text-sm text-muted-foreground hover:text-primary">UPSC</Link></li>
              <li><Link href="/courses?exam=mpsc" className="text-sm text-muted-foreground hover:text-primary">MPSC</Link></li>
              <li><Link href="/courses?exam=ssc" className="text-sm text-muted-foreground hover:text-primary">SSC</Link></li>
              <li><Link href="/courses?exam=banking" className="text-sm text-muted-foreground hover:text-primary">Banking</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 font-headline">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 shrink-0"/>
                <span className="text-muted-foreground">123 Education Lane, Knowledge Park, New Delhi, India</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2"/>
                <a href="mailto:info@karmveeracademy.com" className="text-muted-foreground hover:text-primary">info@karmveeracademy.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2"/>
                <a href="tel:+911234567890" className="text-muted-foreground hover:text-primary">+91 12345 67890</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Karmveer IAS Academy. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
