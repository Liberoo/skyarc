import { FaXTwitter } from "react-icons/fa6";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Links = {
  title: string;
  url: string;
};

type ColumnLinks = {
  links: Links[];
};

type SocialMediaLinks = {
  url: string;
  icon: React.ReactNode;
};

type FooterLink = {
  title: string;
  url: string;
};

type Props = {
  children: React.ReactNode;
  columnLinks: ColumnLinks[];
  socialMediaLinks: SocialMediaLinks[];
  footerText: string;
  footerLinks: FooterLink[];
};

export type FooterProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Footer = (props: FooterProps) => {
  const { children, footerText, columnLinks, footerLinks, socialMediaLinks } = {
    ...FooterDefaults,
    ...props,
  } as Props;
  return (
    <footer className="px-[5%] py-5  bg-primary text-white">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-5  lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4">
          <a href="/" className="lg:justify-self-start">
            {props.children}
          </a>
          {columnLinks.map((column, index) => (
            <ul
              key={index}
              className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start"
            >
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex} className="font-semibold">
                  <a className="hover:text-secondary transition-colors duration-300" href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          ))}
          <div className="flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end">
            {socialMediaLinks.map((link, index) => (
              <a className="hover:text-secondary transition-colors duration-300" aria-label="User Profile" key={index} href={link.url}  target="_blank">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-secondary" />
        <div className="flex flex-col-reverse items-center justify-center justify-items-center pb-4 pt-6 text-sm md:flex-row md:gap-x-6 md:pb-0 md:pt-8">
          <p className="text-secondary mt-8 md:mt-0">{footerText}</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            {footerLinks.map((link, index) => (
              <li key={index} className="underline decoration-black underline-offset-1 ">
                <a href={link.url} target="_blank">{link.title} </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export const FooterDefaults: FooterProps = {
  logo: {
    url: "/",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo image",
  },
  columnLinks: [
    {
      links: [
        { title: "O nas", url: "/#o-nas" },
        { title: "Usługi", url: "/#uslugi" },
        { title: "Realizacje", url: "/#realizacje" },

      ],
    },
  ],
  socialMediaLinks: [
    { url: "https://www.facebook.com/Skyarcuslugiwysokosciowe", icon: <BiLogoFacebookCircle className="size-6" /> },
    // { url: "#", icon: <BiLogoInstagram className="size-6" /> },
    // { url: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
    // { url: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
    // { url: "#", icon: <BiLogoYoutube className="size-6" /> },
  ],
  footerText: "© 2024 SkyArc. Wszystkie Prawa Zastrzeżone.",
  footerLinks: [
    { title: "Polityka Prywatności", url: "/polityka-prywatnosci" },

  ],
};
