"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "../src/auth/AuthButton";
import { useSession, signIn, signOut } from "next-auth/react";
import AuthButton from "../src/auth/AuthButton";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/40">
          Prochains tournois{" "}
          <a href="#" className="font-semibold text-white">
            <span className="absolute inset-0" aria-hidden="true" />
            Voir <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Padel Time
        </h1>
        <p className="mt-6 text-lg leading-8 text-white">
          Application de gestion de groupe de Padel
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <AuthButton />
        </div>
      </div>
    </div>
  );
}
