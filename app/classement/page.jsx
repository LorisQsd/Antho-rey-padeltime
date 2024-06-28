"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Classement() {
  const [rankings, setRankings] = useState([]);

  // useEffect inutile, on peut utiliser les RSC (React Server Component) pour faire des appels en rendant nos composants asynchrones, il faut les utiliser. C'est fait en partie pour ça :)
  useEffect(() => {
    // Ne surtout pas utiliser axios dans un contexte next
    axios
      .get("/api/rankings")
      .then((response) => setRankings(response.data))
      .catch((error) => console.error(error));
  }, []);

  return <div className="py-24 sm:py-32"></div>;
}
