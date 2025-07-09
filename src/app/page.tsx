import Image from "next/image";
import { Phone, Mail, Truck, Route, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const CONTACT_PHONE = "+261342664045";
const CONTACT_PHONE_HREF = `tel:${CONTACT_PHONE}`;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "contact@anjanatrans.mg";

function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-card shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="images/logo_anjanatrans.png"
            alt="AnjanaTrans Logo Placeholder"
            data-ai-hint="truck logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className="hidden sm:inline text-2xl md:text-3xl font-bold font-headline text-primary">
            AnjanaTrans
          </span>
        </Link>
        <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-md">
            <a href={CONTACT_PHONE_HREF}>
              <Phone className="mr-2 h-5 w-5" />
              Appeler
            </a>
        </Button>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="home" className="bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 md:py-28 lg:py-32">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-headline text-primary tracking-tight">
          AnjanaTrans
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80">
          Transport poids lourds partout à Madagascar
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-8 px-10 shadow-lg transform hover:scale-105 transition-transform">
            <a href={CONTACT_PHONE_HREF}>
              <Phone className="mr-3 h-6 w-6" />
              Appeler maintenant
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Truck,
    title: "Transport tout terrain",
    description: "Nous assurons le transport sur routes principales, secondaires, et même les pistes les plus difficiles."
  },
  {
    icon: Route,
    title: "Livraison nationale",
    description: "Livraison de marchandises lourdes dans toutes les régions et districts de Madagascar."
  },
  {
    icon: UserCheck,
    title: "Location avec chauffeur",
    description: "Location de nos camions avec des chauffeurs expérimentés et fiables pour vos projets."
  }
];

function ServicesSection() {
  return (
    <section id="services" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Nos Services</h2>
          <p className="mt-2 text-lg text-foreground/80">Des solutions de transport adaptées à vos besoins.</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center">
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="mt-4 font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Qui sommes-nous ?</h2>
          <p className="mt-4 text-lg text-foreground/80 leading-relaxed font-body">
            AnjanaTrans est une entreprise familiale spécialisée dans le transport de marchandises à travers Madagascar. Forts de notre expérience sur le terrain et de notre connaissance approfondie des routes malgaches, nous nous engageons à fournir un service fiable, sécurisé et ponctuel. Notre mission est de connecter les régions, de soutenir le commerce local et de participer activement au développement de l'île en relevant tous les défis logistiques.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Contactez-nous</h2>
          <p className="mt-2 text-lg text-foreground/80">Pour toute demande ou devis, n'hésitez pas à nous joindre.</p>
        </div>
        <div className="mt-10 max-w-lg mx-auto flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-12">
          <a href={CONTACT_PHONE_HREF} className="flex items-center gap-3 text-lg font-semibold text-primary hover:text-accent transition-colors duration-300">
            <Phone className="h-6 w-6"/>
            <span>{CONTACT_PHONE}</span>
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-lg font-semibold text-primary hover:text-accent transition-colors duration-300">
            <Mail className="h-6 w-6"/>
            <span>{CONTACT_EMAIL}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-sm">
        <p>© AnjanaTrans 2025. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
