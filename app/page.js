// On return du jsx, on préfère donc naturellement l'utilisation d'un fichier avec une extension .jsx au lieu de .js

// Import de nextImage inutile à retirer.
import Image from "next/image";
import Home from "./components/Home";
import Header from "./components/Header";

export default function App() {
  return (
    // Pas de main ici ! Le layout renvoi déjà un main, tu imbriques donc un main dans un main
    // Ca apporte deux soucis : Hydration Issue code error de react & semantic HTML incorrecte
    // Tu pourrais utiliser un react fragment pour ton cas : <> <Header/> <Home/> </>
    <main className="">
      <Header />
      <Home />
    </main>
  );
}
