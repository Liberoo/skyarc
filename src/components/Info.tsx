import { BiEnvelope, BiMap, BiMessageDetail, BiPhone } from "react-icons/bi";

type LinkProps = {
  label: string;
  url: string;
};

type ContactProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: LinkProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  contacts: ContactProps[];
};

export type Contact24Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Contact24 = (props: Contact24Props) => {
  const { tagline, heading, description, contacts } = {
    ...Contact24Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="pb-28">
      <div className="container">

        <div className="grid grid-cols-1 items-start justify-start gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          {contacts.map((contact, index) => (
            <div key={index}>
              <div className="rb-5 mb-5 md:mb-6">{contact.icon}</div>
              <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {contact.title}
              </h3>
              <p className="mb-5 md:mb-6">{contact.description}</p>
              <a className="underline" href={contact.link.url}>
                {contact.link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact24Defaults: Contact24Props = {
  tagline: "Tagline",
  heading: "Contact us",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  contacts: [
    {
      icon: <BiEnvelope className="size-12" />,
      title: "Email",
      description:
        "Napisz do nas wiadomość ",
      link: {
        label: "hello@relume.io",
        url: "#",
      },
    },
    {
      icon: <BiPhone className="size-12" />,
      title: "Telefon",
      description:
        "Zadzwoń do nas",
      link: {
        label: "+1 (555) 000-0000",
        url: "#",
      },
    },
    {
      icon: <BiMap className="size-12" />,
      title: "Biuro",
      description:
        "Odwiedź nas w naszym biurze",
      link: {
        label: "123 Sample St, Sydney NSW 2000 AU",
        url: "#",
      },
    },
  ],
};
