import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { FaIndustry, FaTools, FaBullhorn, FaBolt, FaWrench, FaConciergeBell,FaBuilding, } from 'react-icons/fa';
import {GiFactory} from 'react-icons/gi';


type ImageProps = {
  src: string;
  alt?: string;
};



type FeatureSection = {
  icon: React.ReactNode;
  heading: string;
  subheading:string;
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
    <section data-sal="fade" id="uslugi" className="px-[5%] py-16 md:py-24 lg:py-28">
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
    <div className="flex flex-col justify-start border-2 border-primary rounded-md p-6 md:p-8 ">
      <div>
        <div className="rb-5 mb-5 md:mb-6">
         {featureSection.icon}
        </div>
        <h2 className="text-primary  text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
          {featureSection.heading}
        </h2>
        <h3 className="text-xl  mb-3 md:mb-4">{featureSection.subheading}</h3>
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
      heading:"Konserwacja dachów ",
      subheading: "Mycie, impregnacja, malowanie",
      description: "Dbając o estetykę, trwałość i bezpieczeństwo Twojego dachu, oferujemy kompleksowe usługi mycia, malowania i impregnacji dachów z blachy oraz dachówek ceramicznych i betonowych.",
      button: {
        title: "Czytaj więcej",
        variant: "link",
        size: "link",
        href:"/uslugi/konserwacja-dachow"
  
      },
    },
    {
      icon: <FaTools  className="text-secondary" size={30}/>,
      heading:"Montaże wysokościowe",
      subheading: "Profesjonalne Montaże i Demontaże na Wysokości",
      description: "Oferujemy szeroki zakres prac montażowych i demontażowych na wysokości, dostosowanych do Twoich potrzeb.",
      button: {
        title: "Czytaj więcej",
        variant: "link",
        size: "link",
        href:"/uslugi/montaze-wysokosciowe"
   
      },
    },
    {
      icon: <FaBullhorn  className="text-secondary" size={30}/>,
      heading:"Mycie przeszkleń i elewacji",
      subheading: "Profesjonalne mycie i doczyszczanie przeszkleń oraz elewacji",
      description: "Stosując techniki linowe i podnośniki, jesteśmy w stanie umyć każdą powierzchnię - nawet taką w najbardziej niedostępnych miejscach. ",
      button: {
        title: "Czytaj więcej",
        variant: "link",
        size: "link",
        href:"/uslugi/mycie-przeszklen-i-elewacji"
 
      },
    },
    {
      icon: <FaBolt  className="text-secondary" size={30}/>,
      heading:"Naprawa uszkodzeń po ptakach",
      subheading: "Naprawa dziur w elewacji i kratek wentylacyjnych ",
      description: "Pęknięcia i dziury w elewacji tynkowej, często spowodowane przez ptaki, wymagają szybkiej naprawy, aby uniknąć dalszych uszkodzeń. ",
      button: {
        title: "Czytaj więcej",
        variant: "link",
        size: "link",
        href:"/uslugi/naprawa-uszkodzen-po-ptakach"
 
      },
    },
    {
      icon: <FaWrench  className="text-secondary" size={30} />,
      heading:"Zabezpieczenia na ptaki",
      subheading: "Montaż systemów anty ptak oraz siatek",
      description: "Chronimy Twoją przestrzeń przed ptakami, stosując nowoczesne i bezpieczne metody. ",
      button: {
        title: "Czytaj więcej",
        variant: "link",
        size: "link",
        href:"/uslugi/zabezpieczenia-na-ptaki"
 
      },
    },
    {
      icon: <FaConciergeBell  className="text-secondary" size={30}/>,
      heading:"Odśnieżanie",
      subheading: "Odśnieżanie Dachów i Usuwanie Sopli",
      description: "W zimie zapewniamy bezpieczeństwo, oferując profesjonalne usługi odśnieżania dachów i usuwania sopli lodowych. ",
      button: {
        title: "Czytaj więcej",
        variant: "link",
        size: "link",
        href:"/uslugi/odsniezanie"
 
      },
    },
    {
      icon: <GiFactory  className="text-secondary" size={30}/>,
      heading:"Obsługa nieruchomości",
      subheading: "Kompleksowe prace budowlano-serwisowe ",
      description: "Regularne dbanie o stan techniczny Twojego budynku jest kluczowe dla utrzymania nieruchomości w dobrej kondycji. Nasze usługi zapewniają skuteczne i długotrwałe rozwiązania, które chronią Twój budynek. ",
      button: {
        title: "Czytaj więcej",
        variant: "link",
        size: "link",
        href:"/uslugi/obsluga-nieruchomosci"
 
      },
    },
    {
      icon: <FaBuilding  className="text-secondary" size={30}/>,
      heading:"Prace dla przemysłu",
      subheading: "Specjalistyczne prace budowlano-serwisowe na wysokości ",
      description: "Dzięki naszym usługom na wysokościach masz pewność, że Twój zakład będzie działał bezpiecznie i sprawnie. Wykorzystujemy nowoczesne techniki alpinistyczne, aby zapewnić skuteczne i bezpieczne wykonanie nawet najbardziej wymagających zadań.",
      button: {
        title: "Czytaj więcej",
        variant: "link",
        size: "link",
        href:"/uslugi/prace-dla-przemyslu"
 
      },
    },
  ],
};
