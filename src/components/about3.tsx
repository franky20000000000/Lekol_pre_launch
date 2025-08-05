
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

const lekol_achievements = [
  { label: "Répétiteurs inscrits", value: "500+" },
  { label: "Élèves accompagnés", value: "1200+" },
  { label: "Taux de réussite", value: "92%" },
  { label: "Villes couvertes", value: "8+" },
];

const About3 = ({
  title = "À propos de Lékol",
  description = "Lékol est bien plus qu'une simple plateforme de mise en relation. Nous sommes une communauté dédiée à la réussite scolaire et académique des élèves au Cameroun. Nous avons conçu Lékol pour répondre à un besoin essentiel : permettre aux parents de trouver rapidement et en toute confiance des répétiteurs compétents et sérieux pour leurs enfants.",
  mainImage = {
    src: "/schoolbus.jpg",
    alt: "Étudiants utilisant Lékol",
  },
  secondaryImage = {
    src: "/student-7378903_1920.jpg",
    alt: "Séance de répétition avec Lékol",
  },
  breakout = {
    src: "/circle-check.png",
    alt: "Logo Lékol",
    title: "La plateforme web de soutien scolaire 100% locale",
    description:
      "Connecter parents et étudiants-répétiteurs pour un accompagnement personnalisé, simple et sécurisé au Cameroun.",
    buttonText: "Découvrir l'app",
    buttonUrl: "#",
  },
  achievementsTitle = "Notre impact en chiffres",
  achievementsDescription = "Depuis notre lancement, Lékol transforme l'éducation au Cameroun en facilitant l'accès à un soutien scolaire de qualité pour tous.",
  achievements = lekol_achievements,
}: About3Props = {}) => {
  return (
    <section className="p-10">
      <div className="fixed top-0 w-full flex mt-5 gap-4 justify-center items-center">
          <Link href={"/"}>
            <Button
              variant="secondary"
              className="group text-md flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
            >
              <span>Accueil</span>
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
            </Button>
          </Link>
          <Link href={"/contact"}>
            <Button
              variant="default"
              className="group text-md flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
            >
              <span>Contact</span>
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
            </Button>
          </Link>
        </div>
      <div className="container">
        <div className="mb-14 mt-10 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-5xl font-semibold text-[#2B80F6]">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="grid gap-7 lg:grid-cols-3">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto">
              <img
                src={breakout.src}
                alt={breakout.alt}
                className="mr-auto h-12"
              />
              <div>
                <p className="mb-2 text-lg font-semibold">{breakout.title}</p>
                <p className="text-muted-foreground">{breakout.description}</p>
              </div>
              <Button variant="outline" className="mr-auto" asChild>
                <a href={breakout.buttonUrl} target="_blank">
                  {breakout.buttonText}
                </a>
              </Button>
            </div>
            <img
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
            />
          </div>
        </div>
        
        {/* Section Mission Lékol */}
        <div className="py-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-6">Notre Mission</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-8">
                <strong>Lékol est une application web qui connecte parents et étudiants-répétiteurs pour un accompagnement scolaire personnalisé, simple et sécurisé.</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-12 mt-12 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">👨‍👩‍👧‍👦</span>
                  </div>
                  <h3 className="font-semibold mb-3 text-lg">Parents</h3>
                  <p className="text-muted-foreground">Trouvez et contactez des répétiteurs qualifiés pour vos enfants en toute confiance</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🎓</span>
                  </div>
                  <h3 className="font-semibold mb-3 text-lg">Étudiants-Répétiteurs</h3>
                  <p className="text-muted-foreground">Proposez vos services et monétisez vos compétences académiques</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        
        <div className="relative overflow-hidden rounded-xl bg-muted p-10 md:p-16">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-4xl font-semibold">{achievementsTitle}</h2>
            <p className="max-w-xl text-muted-foreground">
              {achievementsDescription}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
            {achievements.map((item, idx) => (
              <div className="flex flex-col gap-4" key={item.label + idx}>
                <p className="text-muted-foreground">{item.label}</p>
                <span className="text-4xl font-semibold md:text-5xl text-[#2B80F6]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] bg-[size:80px_80px] opacity-15 md:block"></div>
        </div>

        {/* Section Comment ça marche */}
        <div className="py-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-6">Comment ça marche ?</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4 text-[#2B80F6]">💰 Système dabonnement flexible</h3>
                <p className="text-muted-foreground">
                  {`Grâce à notre modèle d'abonnement adaptatif, les étudiants peuvent monétiser leurs compétences 
                  pendant que les élèves accèdent à un soutien scolaire abordable et de qualité.`}
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4 text-[#2B80F6]">🤝 Négociation directe</h3>
                <p className="text-muted-foreground">
                  Les parents contactent directement les répétiteurs, négocient les modalités 
                  (tarifs, horaires, lieu) pour un service 100% personnalisé et transparent.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4 text-[#2B80F6]">🌐 Application web accessible</h3>
                <p className="text-muted-foreground">
                  {`Accédez à Lékol depuis n'importe quel navigateur, sur ordinateur, tablette ou smartphone. 
                  Aucune installation nécessaire, juste une connexion internet.`}
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4 text-[#2B80F6]">🛡️ Sécurité assurée</h3>
                <p className="text-muted-foreground">
                  Tous nos répétiteurs sont vérifiés. Profils détaillés, avis parents, 
                  et système de notation transparent pour choisir en toute confiance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About3 };