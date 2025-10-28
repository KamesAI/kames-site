'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Linkedin, Youtube, Instagram } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
  firstName: z.string().min(2, { message: 'Le prénom doit comporter au moins 2 caractères.' }),
  lastName: z.string().min(2, { message: 'Le nom de famille doit comporter au moins 2 caractères.' }),
  email: z.string().email({ message: 'Veuillez saisir une adresse e-mail valide.' }),
  company: z.string().optional(),
  message: z.string().min(10, { message: 'Le message doit comporter au moins 10 caractères.' }),
});

const contactDetails = [
    { icon: Mail, text: "contact.kamesai@gmail.com", href: "mailto:contact.kamesai@gmail.com" },
    { icon: Linkedin, text: "Kames", href: "#" },
]

const XLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      aria-label="X logo"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );

const socialLinks = [
    { icon: Youtube, text: "YouTube", href: "#" },
    { icon: Instagram, text: "Instagram", href: "#" },
    { icon: XLogo, text: "X", href: "#" },
]

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Dans une vraie application, vous appelleriez une action serveur ici.
    console.log(values);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: 'Message envoyé !',
      description: "Merci de nous avoir contactés. Nous vous répondrons sous peu.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient">Travaillons ensemble pour vous faciliter le quotidien.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Vous avez un projet en tête ou souhaitez en savoir plus ? Parlons-en.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="flex flex-col p-8 rounded-lg lg:p-12 bg-card">
            <h3 className="text-2xl font-bold">Écrivez-nous</h3>
            <p className="mt-2 text-muted-foreground">
                Remplissez ce formulaire et nous vous contacterons rapidement.
            </p>
            <div className="mt-8">
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <FormField control={form.control} name="firstName" render={({ field }) => (
                            <FormItem><FormLabel>Prénom</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="lastName" render={({ field }) => (
                            <FormItem><FormLabel>Nom</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                    </div>
                    <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem><FormLabel>Email</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="company" render={({ field }) => (
                        <FormItem><FormLabel>Entreprise (Optionnel)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea className="min-h-32" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <button
                    type="submit"
                    className="w-full rounded-2xl border border-[#FF6D00] px-6 py-3 font-medium transition hover:-translate-y-0.5 hover:bg-white/5 disabled:opacity-50 disabled:pointer-events-none"
                    disabled={form.formState.isSubmitting}
                    >
                    {form.formState.isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                    </button>
                </form>
                </Form>
            </div>
          </div>
          <div className="flex flex-col p-8 rounded-lg lg:p-12 bg-card">
            <div>
              <h3 className="text-2xl font-bold">Coordonnées</h3>
              <p className="mt-2 text-muted-foreground">
                  Contactez-nous directement via l'un des canaux ci-dessous.
              </p>
              <ul className="mt-8 space-y-6">
                  {contactDetails.map(({ icon: Icon, text, href }) => (
                      <li key={text} className="flex items-center">
                          <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-lg bg-primary/10">
                              <Icon className="w-6 h-6 text-primary" />
                          </div>
                          {href ? (
                            <Link href={href} className="font-medium transition-colors text-muted-foreground hover:text-foreground">{text}</Link>
                          ) : (
                            <span className="font-medium text-muted-foreground">{text}</span>
                          )}
                      </li>
                  ))}
              </ul>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold">Réseaux sociaux</h3>
              <p className="mt-2 text-muted-foreground">
                  Suivez notre actualité et nos projets sur nos réseaux.
              </p>
              <ul className="mt-8 space-y-6">
                  {socialLinks.map(({ icon: Icon, text, href }) => (
                      <li key={text} className="flex items-center">
                          <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-lg bg-primary/10">
                                <Icon className="w-6 h-6 text-primary" fill={text === 'X' ? 'currentColor' : 'none'}/>{/* fill only for X */}
                          </div>
                          <Link href={href} className="font-medium transition-colors text-muted-foreground hover:text-foreground">{text}</Link>
                      </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
