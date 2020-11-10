import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import axios from "axios";
import Category from "./components/Category";
import Panier from "./components/Panier";

function App() {
  //définition du state pour recevoir les données
  const [data, setData] = useState({});

  //définition du state pour laisser terminer chargement de la requête
  const [isLoading, setIsLoading] = useState(true);

  //définition de la state qui recevra les infos des repas ajoutés au panier => c'est le panier
  const [panier, setPanier] = useState([]);

  //fonction pour récupérer les données grâce à une requête (après avoir mis en place un backend)
  const fetchData = async () => {
    const response = await axios.get(
      "https://deliveroo-lereacteur-backend.herokuapp.com/"
    );

    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header data={data} isLoading={isLoading} />
      <main className="main">
        <div className="order container">
          <Category
            data={data}
            isLoading={isLoading}
            panier={panier}
            setPanier={setPanier}
          />
          <Panier panier={panier} setPanier={setPanier} />
        </div>
      </main>
    </div>
  );
}

export default App;
