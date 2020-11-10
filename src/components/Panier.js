import React from "react";

const Panier = ({ panier, setPanier }) => {
  let finalPrice = 0;
  if (panier) {
    for (let i = 0; i < panier.length; i++) {
      finalPrice += Number(panier[i].price) * panier[i].counter;
    }
    // console.log(finalPrice);
  }
  return (
    <div className="panier">
      <button className="valid-button">Valider mon panier</button>

      {panier.length !== 0 ? (
        <div>
          {panier.map((panierItem, index) => {
            return (
              <div key={index} className="command-line">
                <span className="buttons">
                  <button
                    className="button-calc"
                    onClick={() => {
                      const newPanier = [...panier];
                      if (panierItem.counter > 1) {
                        newPanier[index].counter--;
                        setPanier(newPanier);
                      } else {
                        newPanier.splice(index, 1);
                        setPanier(newPanier);
                      }
                    }}
                  >
                    -
                  </button>
                  <span> {panierItem.counter} </span>
                  <button
                    className="button-calc"
                    onClick={() => {
                      const newPanier = [...panier];
                      newPanier[index].counter++;
                      setPanier(newPanier);
                    }}
                  >
                    +
                  </button>
                </span>
                <span className="mealtitle">{panierItem.title}</span>{" "}
                <span className="mealprice">{panierItem.price} €</span>
              </div>
            );
          })}
          <hr></hr>
          <p className="total">
            {" "}
            <span> Sous-total </span> <span>{finalPrice.toFixed(2)} €</span>
          </p>
          <p className="total">
            <span>Frais de livraison</span>
            <span>2.50 €</span>
          </p>
          <hr></hr>
          <p className="total">
            <span>Total</span> <span>{(finalPrice + 2.5).toFixed(2)} €</span>
          </p>
        </div>
      ) : (
        <p className="vide">Panier vide</p>
      )}
    </div>
  );
};
export default Panier;
