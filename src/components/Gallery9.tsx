import clsx from "clsx";
import React from "react";
type Props = {
  heading: string;
  description: string;
  children?: React.ReactNode; 
};

export type Gallery8Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Gallery8 = (props: Gallery8Props) => {
  const { heading, description, children } = {
    ...Gallery8Defaults,
    ...props,
  };
  
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>

        <div className="gap-x-8 md:columns-2">
          {React.Children.map(children, (child, index) => (
            <div key={index} className="mb-8 inline-block w-full">
              <div
                className={clsx("relative inline-block w-full", {
                  "pt-[100%]": index % 3 === 0,
                  "pt-[66.66%]": index % 3 !== 0,
                })}
              >
                {child}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Gallery8Defaults: Omit<Props, "children"> = {
  heading: "Image Gallery",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};
