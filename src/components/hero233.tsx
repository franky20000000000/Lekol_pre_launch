"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

import { useIsMobile } from "@/hooks/use-mobile";

import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { Button } from "@/components/ui/button";

const Hero233 = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative h-screen w-screen overflow-hidden bg-background py-32">
      <div className="relative z-20 flex flex-col h-max items-center justify-center gap-4 py-10 text-center bg-background">
        <div className="absolute -z-1 size-full  max-w-3xl bg-background blur-xl" />

        <div className="fixed top-0 my-5 flex gap-4">
            <Link href="/about">
              <Button
            variant="secondary"
            className="group text-md flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
          >
            <span>About</span>
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

        <div className="relative flex max-w-4xl items-center justify-center text-center text-4xl font-medium tracking-tight md:text-7xl">
          <h1 className="relative z-10">
            <LineShadowText className="text-[#2B80F6]"> Lékol </LineShadowText>
            <span className="mr-3 text-muted-foreground/50"> arrive bientôt
            </span> <br />
            <span className="text-muted-foreground/50">Le soutien scolaire repensé, simple et accessible pour tous</span>
            <span className="text-[#2B80F6]">.</span>
          </h1>
        </div>

        <div className="flex flex-row gap-5 items-center mt-5 w-full justify-center">
          <input type="text" className="p-1 px-3 border-2 rounded-md focus:shadow-lg" placeholder="Entrez votre Email"/>
          <Button>Envoyer</Button>
        </div>
      </div>

      <div className="absolute top-0 flex size-full justify-center">
        {Array.from({ length: isMobile ? 7 : 18 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100%" }}
            transition={{
              duration: 0.8,
              delay: i * 0.05,
              ease: "easeOut",
            }}
            className="w-24 border-l bg-gradient-to-b to-transparent transition-all ease-in-out hover:scale-110 hover:from-black/2"
          />
        ))}
      </div>
    </section>
  );
};

export { Hero233 };
