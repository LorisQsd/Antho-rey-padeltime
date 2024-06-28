// Il faut absolument éviter de faire "use client" à la racine
// cf mon commentaire dans a doc core_review.md pour plus d'explications
"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "../src/auth/AuthButton";

// Excellent d'avoir initialiser un array pour la navigation et d'avoir mapper dessus
// En plus tu le fais en dehors du composant Header donc ça ne sera pas réexec à chaque fois
// C'est parfait c'est exactement ce qu'il faut faire
const navigation = [
  { name: "Joueurs", href: "/joueurs" },
  { name: "Tournois", href: "/tournois" },
  { name: "Ma fiche", href: "/profil" },
  { name: "Classement", href: "/classement" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        // Je ne pense pas que l'aria label soit nécessaire ici
        // Je t'invite à consulter cette doc qui explique très bien le principe suivant : No ARIA is better than Bad ARIA
        // https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          {/* !!! Utiliser le composant Link de next pour l'internal linking !!! */}
          <a href="/" className="-m-1.5 p-1.5">
            <Image
              className="w-auto h-8"
              src="/logo.svg"
              alt=""
              width={128}
              height={128}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          {/* Il faut absolument créer un composant button et trouver un moyen de partager le state de la modale pour réduire au maximum le client boundary */}
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            {/* L'élément est visible à l'utilisateur, il ne faut pas utiliser aria-hidden:"true" dans ce cas */}
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {/* BEST PRACTICE
          Préférer la destructuration */}
          {navigation.map((item) => (
            // utilisation du Link de Next
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white hover:text-blue-400"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-white hover:text-blue-400"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      {/* MANDATORY BEST PRACTICE
      Penser à utiliser la méthode createPortal de react pour gérer les fenêtres de dialog */}
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-gray-900 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="w-auto h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="py-6 space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white rounded-lg hover:bg-gray-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
