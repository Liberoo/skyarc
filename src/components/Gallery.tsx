"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import type { CarouselApi } from "@relume_io/relume-ui";
import clsx from "clsx";
import Autoplay from 'embla-carousel-autoplay'

import img1 from "@/img/uslugi/konserwacja-dachow/1.webp";
import img2 from "@/img/uslugi/konserwacja-dachow/2.webp";
import img3 from "@/img/uslugi/konserwacja-dachow/3.webp"; 
import img4 from "@/img/uslugi/konserwacja-dachow/4.webp"; 
import img5 from "@/img/uslugi/konserwacja-dachow/5.webp";
import img6 from "@/img/uslugi/konserwacja-dachow/6.webp"; 
import img7 from "@/img/uslugi/konserwacja-dachow/7.webp"; 
import img8 from "@/img/uslugi/mycie-elewacji/1.webp";
import img9 from "@/img/uslugi/mycie-elewacji/2.webp";
import img10 from "@/img/uslugi/mycie-elewacji/3.webp"; 
import img11 from "@/img/uslugi/mycie-elewacji/4.webp"; 
import img12 from "@/img/uslugi/mycie-elewacji/5.webp";
import img13 from "@/img/uslugi/mycie-elewacji/6.webp"; 
import img14 from "@/img/uslugi/obsluga-nieruchomosci/1.webp";
import img15 from "@/img/uslugi/obsluga-nieruchomosci/2.webp";
import img16 from "@/img/uslugi/obsluga-nieruchomosci/3.webp"; 
import img17 from "@/img/uslugi/obsluga-nieruchomosci/4.webp"; 
import img18 from "@/img/uslugi/obsluga-nieruchomosci/5.webp";
import img19 from "@/img/uslugi/obsluga-nieruchomosci/6.webp"; 
import img20 from "@/img/uslugi/obsluga-nieruchomosci/7.webp";
import img21 from "@/img/uslugi/obsluga-nieruchomosci/8.webp"; 
import img22 from "@/img/uslugi/odsniezanie/1.webp";
import img23 from "@/img/uslugi/odsniezanie/2.webp"; 
import img24 from "@/img/uslugi/siatki-i-zabezpieczenia-na-ptaki/1.webp";
import img25 from "@/img/uslugi/siatki-i-zabezpieczenia-na-ptaki/2.webp"; 
type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  images: ImageProps[];
};

export type GalleryProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Gallery = (props: GalleryProps) => {
  const { heading, description, images } = {
    ...GalleryDefaults,
    ...props,
  } as Props;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section data-sal="fade" id="realizacje" className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        {/* for all available options: https://www.embla-carousel.com/api/options/ */}
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={
            [Autoplay()]
          }
        >
          <CarouselContent className="ml-0">
            {images.map((image, index) => (
              <CarouselItem key={index} className="basis-full pl-0 pr-6 md:basis-1/2 md:pr-8">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-square size-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="rt-8 mt-8 flex items-center justify-between">
            <div className="mt-5 flex w-full items-start justify-start">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={clsx("mx-[3px] inline-block size-2 rounded-full", {
                    "bg-black": current === index + 1,
                    "bg-neutral-light": current !== index + 1,
                  })}
                />
              ))}
            </div>
            <div className="flex items-end justify-end gap-2 md:gap-4">
              <CarouselPrevious className="static right-0 top-0 size-12 -translate-y-0" />
              <CarouselNext className="static right-0 top-0 size-12 -translate-y-0" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export const GalleryDefaults: GalleryProps = {
  heading: "Nasze Realizacje",
  description: "Skontaktuj się z nami i uzyskaj darmową wycenę",
  images: [
    {
      src: img1.src,
      alt: "Zdjęcie realizacji usługi skyarc",
    },
    {
      src: img2.src,
      alt: "Zdjęcie realizacji usługi skyarc",
    },   {
      src: img3.src,
      alt: "Zdjęcie realizacji usługi skyarc",
    },   {
      src: img4.src,
      alt: "Zdjęcie realizacji usługi skyarc",
    },   {
      src: img5.src,
      alt: "Zdjęcie realizacji usługi skyarc",
    },   {
      src: img6.src,
      alt: "Zdjęcie realizacji usługi skyarc",
    },   {
      src: img7.src,
      alt: "Zdjęcie realizacji usługi skyarc",
    },   {
      src: img8.src,
      alt: "Zdjęcie realizacji usługi skyarc",
    },   {
      src: img9.src,
      alt: "Zdjęcie realizacji usługi skyarc",
    },   {
      src: img10.src,
      alt: "Zdjęcie realizacji usługi skyarc",
    },   {
      src: img11.src,
      alt: "Zdjęcie realizacji usługi skyarc",
    },   {
      src: img12.src,
      alt: "Zdjęcie realizacji usługi skyarc",
    },   {
      src: img13.src,
      alt: "Zdjęcie realizacji usługi skyarc",
    },   {
      src: img14.src,
      alt: "Zdjęcie realizacji usługi skyarc",
    },   {
      src: img15.src,
      alt: "Zdjęcie realizacji usługi skyarc",
    },   {
      src: img16.src,
      alt: "Zdjęcie realizacji usługi skyarc",
    },   {
      src: img17.src,
      alt: "Zdjęcie realizacji usługi skyarc",
    },   {
      src: img18.src,
      alt: "Zdjęcie realizacji usługi skyarc",
    },   {
      src: img19.src,
      alt: "Zdjęcie realizacji usługi skyarc",
    },   {
      src: img20.src,
      alt: "Zdjęcie realizacji usługi skyarc",
    },   {
      src: img21.src,
      alt: "Zdjęcie realizacji usługi skyarc",
    },   {
      src: img22.src,
      alt: "Zdjęcie realizacji usługi skyarc",
    },   {
      src: img23.src,
      alt: "Zdjęcie realizacji usługi skyarc",
    },   {
      src: img24.src,
      alt: "Zdjęcie realizacji usługi skyarc",
    },   {
      src: img25.src,
      alt: "Zdjęcie realizacji usługi skyarc",
    },
  ],
};
