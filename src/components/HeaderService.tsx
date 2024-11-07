

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
subheading: string
children: React.ReactNode;
};

export type Header36Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header36 = (props: Header36Props) => {
  const { heading,subheading, description,  children } = {
    ...Header36Defaults,
    ...props,
  } as Props;
  return (
    <section
      id="relume"
      className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-36 xl:pt-24"
    >
      <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end mt-20 lg:mt-0 ">
        <h1 className=" text-6xl font-bold  md:text-9xl lg:text-10xl">{heading}</h1>
        <h2 className="mb-5 md:mb-6 text-2xl text-primary">{subheading}</h2>
        <p className="md:text-md">{description}</p>
      </div>
      <div>
       {children}
      </div>
    </section>
  );
};

export const Header36Defaults: Header36Props = {
  heading: "Medium length hero heading goes here",
  subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",

};