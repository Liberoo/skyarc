import { Button } from "@relume_io/relume-ui";
import type { ButtonProps as RelumeButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { FaIndustry, FaTools, FaBullhorn, FaBolt, FaWrench, FaConciergeBell } from 'react-icons/fa';


type ImageProps = {
  src: string;
  alt?: string;
};



type FeatureSection = {
  icon: React.ReactNode;
  heading: string;
  description: string;
  button: CustomButtonProps; // Zamiana na CustomButtonProps
};

type Props = {
  heading: string;
  description: string;
  featureSections: FeatureSection[];
};

export type ServicesProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Services = (props: ServicesProps) => {
  const { heading, description, featureSections } = {
    ...ServicesDefaults,
    ...props,
  } as Props;

  return (
    <section id="uslugi" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="text-primary mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {featureSections.map((feature, index) => (
            <FeatureSection key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};


function FeatureSection(featureSection: FeatureSection) {
  return (
    <div className="flex flex-col justify-center border-2 border-primary rounded-md p-6 md:p-8 ">
      <div>
        <div className="rb-5 mb-5 md:mb-6">
         {featureSection.icon}
        </div>
        <h2 className="text-primary mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
          {featureSection.heading}
        </h2>
        <p>{featureSection.description}</p>
      </div>
      <div className="mt-5 md:mt-6">
        <Button className="p-0" asChild variant="link" ref={featureSection.button.href}>
          <a 
            href={featureSection.button.href}
            className="inline-flex items-center group"
          >
            {featureSection.button.title}
            <RxChevronRight className="ml-2 transition-transform transform group-hover:translate-x-2" />
          </a>
        </Button>
   
      </div>
    </div>
  );
}


export const ServicesDefaults: ServicesProps = {
  heading: "Usługi",
  description: "Zobacz w czym się specjalizujemy",
  featureSections: [
    {
      icon: <FaIndustry className="text-secondary" size={30}/>,
      heading: "Prace dla przemysłu",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button: {
        title: "Czytaj więcej",
        variant: "link",
        size: "link",
        href:"/uslugi/prace-dla-przemyslu"
  
      },
    },
    {
      icon: <FaTools  className="text-secondary" size={30}/>,
      heading: "Naprawa i obsługa nieruchomości",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button: {
        title: "Czytaj więcej",
        variant: "link",
        size: "link",
        href:"/uslugi/naprawa-i-obsluga-nieruchomosci"
   
      },
    },
    {
      icon: <FaBullhorn  className="text-secondary" size={30}/>,
      heading: "Obsługa Reklamy",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button: {
        title: "Czytaj więcej",
        variant: "link",
        size: "link",
        href:"/uslugi/obsluga-reklamy"
 
      },
    },
    {
      icon: <FaBolt  className="text-secondary" size={30}/>,
      heading: "Prace Elektryczne",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button: {
        title: "Czytaj więcej",
        variant: "link",
        size: "link",
        href:"/uslugi/prace-elektryczne"
 
      },
    },
    {
      icon: <FaWrench  className="text-secondary" size={30} />,
      heading: "Prace Montażowe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button: {
        title: "Czytaj więcej",
        variant: "link",
        size: "link",
        href:"/uslugi/prace-montazowe"
 
      },
    },
    {
      icon: <FaConciergeBell  className="text-secondary" size={30}/>,
      heading: "Inne Usługi",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button: {
        title: "Czytaj więcej",
        variant: "link",
        size: "link",
        href:"/uslugi/inne-uslugi"
 
      },
    },
  ],
};
