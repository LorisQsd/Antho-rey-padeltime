import Image from "next/image";
import Hero from "./components/Home";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
    </main>
  );
}
