// On return du jsx, on préfère donc naturellement l'utilisation d'un fichier avec une extension .jsx au lieu de .js

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
// import de Head inutilisé
import Head from "next/head";
// import de ClientLayout inutilisé
import ClientLayout from "./client-layout";

// Tu initialises une font que tu n'envoies pas dans ton html.
// Pour l'utilisation d'une font, il faudrait l'intégrer comme ceci dans ton html
// <html className={inter.className}>...</html>
// cf doc nextjs : https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Padel Time",
  description: "Ton site de Padel",
};

export default function RootLayout({ children }) {
  return (
    // Tu renvoies un site fr, il faut que la langue spécifiée soit fr
    <html
      lang="en"
      // On ne fait pas de h-full pour set la hauteur d'une app, on préfère l'utilisation de valeur comme dvh.
      // min-h-dvh devrait faire l'affaire
      // Je t'invite à aller voir cette vidéo de Kevin Powell au sujet des valeur dynamique en css
      // https://www.youtube.com/watch?v=ru3U8MHbFFI
      className="h-full"
    >
      {/* <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <body
        className="min-h-screen bg-fixed bg-cover"
        // Pour ajouter une image de bg avec tailwind, on peut l'ajouter dans la config et utiliser une class, ça permet d'éviter l'inline js style
        // cf doc : https://tailwindcss.com/docs/background-image#customizing-your-theme
        style={{ backgroundImage: "url(/background.jpg)" }}
      >
        {/* <ClientLayout> */}
        <Header />
        <main className="">{children}</main>
        {/*  </ClientLayout> */}
      </body>
    </html>
  );
}
