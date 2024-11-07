import React from 'react';
import { Heading, Text } from "@relume_io/relume-ui";
import Link from "./Link";



type ButtonProps = {
  text: string;
  href: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  children: React.ReactNode;

};

export type HeaderProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header = (props: HeaderProps) => {
  const {
    heading,
    description,
    buttons,
   children
  } = {
    ...props,
  } as Props;

  return (
    <section id="relume" className="relative px-[5%] overflow-hidden">
      <div className="container">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-md text-text-alternative">
            {heading && <Heading headingSize="h1">{heading}</Heading>}
            <Text>{description}</Text>
            <div>
              {buttons.map((button, index) => (
                <Link href={button.href} key={index}>
                  {button.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 ">
       {children}
        <div className="absolute inset-0 bg-black/50 "  />
      </div>
    </section>
  );
};

