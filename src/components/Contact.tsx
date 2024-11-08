"use client";

import { Button, Checkbox, Input, Label, Textarea } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { useState } from "react";
import { FaSpinner } from 'react-icons/fa';

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  children: React.ReactNode;
  tagline: string;
  heading: string;
  description: string;
  button: ButtonProps;
};

export type Contact9Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Contact9 = (props: Contact9Props) => {
  const { children, tagline, heading, description, button } = {
    ...Contact9Defaults,
    ...props,
  } as Props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
    acceptTerms: ''
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let hasError = false;
    const newErrors = { name: '', email: '', message: '', acceptTerms: '' };

    if (!name) {
      newErrors.name = 'Pole musi być uzupełnione';
      hasError = true;
    }
    if (!email) {
      newErrors.email = 'Pole musi być uzupełnione';
      hasError = true;
    }
    if (!message) {
      newErrors.message = 'Pole musi być uzupełnione';
      hasError = true;
    }
    if (!acceptTerms) {
      newErrors.acceptTerms = 'Musisz zaakceptować politykę prywatności';
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      setIsSubmitting(true); // Disable the button when submitting
      
      try {
        const response = await fetch("https://formsubmit.co/ajax/f1089116914fb8e36f40be920748c405", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            email: email,
            message: message,
            acceptTerms: acceptTerms
          }),
        });

        if (response.ok) {
          const result = await response.json();
          console.log("Form submitted successfully:", result);

          // Show a thank-you message
          setFormSubmitted(true);

          // Optionally reset form fields here
          setName("");
          setEmail("");
          setMessage("");
          setAcceptTerms(false);
        } else {
          console.error("Submission error:", response.statusText);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setIsSubmitting(false); // Enable the button after submission
      }
    }
  };

  return (
    <section data-sal="fade" id="kontakt" className="px-[5%] py-16 md:py-24 lg:py-28 ">
      <div className="container grid grid-cols-1 items-stretch gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
        <div className="mx-auto aspect-video w-full ">
        {children}
        </div>
        <div>
          <div className="rb-6 mb-6 md:mb-8">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
          </div>
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="Nowa wiadomość ze strony skyarc.pl"/>
            <div className="grid w-full items-center">
              <Label htmlFor="name" className="mb-2">
                Imię
              </Label>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="wiadomość" className="mb-2">
                Wiadomość
              </Label>
              <Textarea
                id="wiadomość"
                placeholder="Treść wiadomości..."
                className="min-h-[11.25rem] overflow-auto"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
            </div>
            <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
              <Checkbox id="terms" checked={acceptTerms} onCheckedChange={setAcceptTerms} />
              <Label htmlFor="terms" className="cursor-pointer">
                Akceptuję{" "}
                <a
                  className="text-link-primary underline"
                  href="/polityka-prywatnosci"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Politykę Prywatności
                </a>
              </Label>
            </div>
            {errors.acceptTerms && <p style={{ color: 'red' }}>{errors.acceptTerms}</p>}
            <div>
              <Button type="submit" {...button} disabled={isSubmitting}>
                {isSubmitting ? (
                  <FaSpinner className="animate-spin text-white" /> 
                ) : (
                  button.title
                )}
              </Button>
            </div>
          </form>
          {formSubmitted && <p style={{ color: 'green', marginTop: '10px' }}>Dziękujemy za wysłanie wiadomości!</p>}
        </div>
      </div>
    </section>
  );
};

export const Contact9Defaults: Contact9Props = {
 
  tagline: "Napisz do nas",
  heading: "Kontakt",
  description: "Zadzwoń do nas lub wyślij nam wiadomość – poznamy Twoje oczekiwania, ustalimy szczegóły, przedyskutujemy zakres prac i czas realizacji.",
  button: { title: "Wyślij" },
};
