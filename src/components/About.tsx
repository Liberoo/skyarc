type Props = {
	heading: string;
	description: string;
	tagline:string
	children: React.ReactNode;
  };
  
  export type AboutProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const About = (props: AboutProps) => {
	const { heading, description,tagline,children } = {
	  ...AboutDefaults,
	  ...props,
	} as Props;
	return (
	  <section data-sal="fade" id="o-nas" className="px-[5%] py-16 md:py-24 lg:py-28  ">
		<div className="md:border-t-2 border-primary md:pt-20 container grid grid-cols-1 items-start justify-between gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
		<div>
	{children}
		  </div>
		  <div className="flex justify-center flex-col h-full">
		
			<p className="mb-3 font-semibold md:mb-4 text-xl ">{tagline}</p>
			<h2 className=" text-primary text-big font-bold leading-[1.2] md:text-biggest">{heading}</h2>
			<p className="md:text-md">{description}</p>
		  </div>
		</div>
	  </section>
	);
  };
  
  export const AboutDefaults: AboutProps = {
	heading: "Long heading is what you see here in this feature section",
	description:
	  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  tagline:'Dlaczego warto postawić na:'
	};
  