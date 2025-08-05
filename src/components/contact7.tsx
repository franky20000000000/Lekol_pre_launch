import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Contact7Props {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
  chatLabel?: string;
  chatDescription?: string;
  chatLink?: string;
}

const Contact7 = ({
  title = "Contact Us",
  description = "Laissez nous un message en cas d'incomprehension.",
  emailLabel = "Email",
  emailDescription = "Nous repondons 24hrs/24",
  email = "cabreltiomene21@gmail.com",
  officeLabel = "Notre bureau",
  officeDescription = "Venez nous rencontrez en presentiel",
  officeAddress = "Kotto,Douala",
  phoneLabel = "Telephone",
  phoneDescription = "Nous vous repondons entre 10hrs et 15hrs",
  phone = "+237 694 210 071",
  chatLabel = "Laissez un message",
  chatDescription = "Discutez directement avec notre team",
  chatLink = "Commencer a discuter",
}: Contact7Props) => {
  return (
    <section className="bg-background p-10">
      <div className="fixed top-0  flex mt-5 gap-4 justify-center items-center">
          <Link href={"/"}>
            <Button
              variant="secondary"
              className="group text-md flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
            >
              <span>Accueil</span>
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
            </Button>
          </Link>
          <Link href={"/about"}>
            <Button
              variant="default"
              className="group text-md flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
            >
              <span>About</span>
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
            </Button>
          </Link>
        </div>
      <div className="container">
        <div className="mb-14">
          <h1 className="mb-3 mt-2 text-balance text-[#2B80F6] text-3xl font-semibold md:text-4xl">
            {title}
          </h1>
          <p className="text-muted-foreground max-w-xl text-lg">
            {description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-muted rounded-lg p-6">
            <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
              <Mail className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{emailLabel}</p>
            <p className="text-muted-foreground mb-3">{emailDescription}</p>
            <a
              href={`mailto:${email}`}
              className="font-semibold hover:underline"
            >
              {email}
            </a>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
              <MapPin className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{officeLabel}</p>
            <p className="text-muted-foreground mb-3">{officeDescription}</p>
            <a href="#" className="font-semibold hover:underline">
              {officeAddress}
            </a>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
              <Phone className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{phoneLabel}</p>
            <p className="text-muted-foreground mb-3">{phoneDescription}</p>
            <a href={`tel:${phone}`} className="font-semibold hover:underline">
              {phone}
            </a>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
              <MessageCircle className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{chatLabel}</p>
            <p className="text-muted-foreground mb-3">{chatDescription}</p>
            <a href="#" className="font-semibold hover:underline">
              {chatLink}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact7 };
