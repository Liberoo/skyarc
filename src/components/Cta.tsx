import Link from "./Link"

type Props = {
  heading: string;
  description: string;
children: React.ReactNode;
};

export type CtaProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Cta = (props: CtaProps) => {
  const { heading, description, buttons,children } = {
    ...CtaDefaults,
    ...props,
  } as Props;
  return (
    <section data-sal="fade" id="kontakt" className="bg-primary  text-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <div className="mb-5 mx-auto flex justify-center">{props.children}</div>
        <h2 className="text-secondary rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
        <p className="md:text-md">{description}</p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          {buttons.map((button, index) => (
         <Link href="/kontakt" variant="secondary" outline='true' key={index}>
			{button.title}</Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CtaDefaults: CtaProps = {
  heading: "Zaplanuj realizację projektu z naszymi specjalistami!  ",
  description:
    "Skontaktuj się z nami i uzyskaj darmową wycenę",
  buttons: [{ title: "Kontakt" }],
};
