import { useEffect, useState } from "react";
import api from "../../utils/api";

const Hero = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = {
      region: "TR",
      language: "tr",
    };
    api.get("/movie/popular", { params }).then((res) => {
      const i = Math.round(Math.random() * 19);
    });
  }, []);
  return (
    <div className="backdrop-blur-m bg-gradient-to-r from-black/40 to-transparent p-8 rounded-3xl border border-white/10 shadow-2xl">
      Hero
    </div>
  );
};

export default Hero;
