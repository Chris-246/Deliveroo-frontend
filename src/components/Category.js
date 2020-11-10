import React from "react";

const Category = ({ data, isLoading, panier, setPanier }) => {
  // const handleClick = () => {
  //   const newPanier = [...panier];
  //   newPanier.push({ title: meal.title, price: meal.price });
  //   setPanier(newPanier);
  //   console.log(panier);
  //   console.log(newPanier);
  // };
  return (
    <div className="menu-categories">
      {isLoading ? (
        <span>Page is loading</span>
      ) : (
        data.categories.map((category, index) => {
          return (
            <div key={index} className="category">
              <h2 className="titre2">{category.name}</h2>
              <div className="mailboxes">
                {category.meals.map((meal, index2) => {
                  return (
                    <div
                      key={index2}
                      className="mailbox"
                      onClick={() => {
                        const newPanier = [...panier];
                        const mealCommand = newPanier.find(
                          (commandId) => commandId.id === meal.id
                        );
                        if (mealCommand) {
                          mealCommand.counter += 1;
                        } else {
                          newPanier.push({
                            title: meal.title,
                            price: meal.price,
                            id: meal.id,
                            counter: 1,
                          });
                        }

                        setPanier(newPanier);
                        // console.log(panier);
                        // console.log(newPanier);
                      }}
                    >
                      <div className="texte">
                        <h3>{meal.title}</h3>
                        <p className="description">
                          {meal.description.split(" ").splice(0, 10).join(" ")}
                        </p>
                        <p className="price">
                          {meal.price}€{" "}
                          <span className="popular">
                            {meal.popular ? "populaire" : ""}
                          </span>
                        </p>
                      </div>
                      {meal.picture ? (
                        <img alt="meal" src={meal.picture} />
                      ) : (
                        <></>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Category;
