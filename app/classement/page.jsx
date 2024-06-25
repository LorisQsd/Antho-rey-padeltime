"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Classement() {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    axios
      .get("/api/rankings")
      .then((response) => setRankings(response.data))
      .catch((error) => console.error(error));
  }, []);

  return <div className="py-24 sm:py-32"></div>;
}
