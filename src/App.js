import "./styles.css";
import { pizzas } from "./utils/pizzas";

export default function App() {
  const pizzaNames = Object.keys(pizzas);

  const getAllIngredients = (pizzas) => {
    let allIngredients = [];

    //remove the duplicates

    for (const [pizzaName, pizzaData] of Object.entries(pizzas)) {
      allIngredients.push(pizzaData.ingredients);
    }

    return allIngredients.flat();
  };

  const ingredients = getAllIngredients(pizzas);

  return (
    <div className="App">
      <>
        <h1>Menu</h1>
        <h2>Pizzas</h2>
        <select>
          {pizzaNames.map((pizza) => (
            <option>{pizza}</option>
          ))}
        </select>
      </>
      <div>
        <h2>ingredients</h2>
        {ingredients.map((ingredient) => (
          <div>
            <label>{ingredient}</label>
            <input type="checkbox" />
          </div>
        ))}
      </div>
    </div>
  );
}
