import React, {useState, useEffect} from "react";
import Pizza from "./Pizza";

function PizzaForm({ selectedPizza, updatePizza }) {

  const [id, setPizzaId] = useState(selectedPizza.id)
  const [topping, setPizzaTopping] = useState(selectedPizza.topping)
  const [size, setPizzaSize] = useState(selectedPizza.size)
  const [vegetarian, setPizzaVegetarian] = useState(selectedPizza.vegetarian)

  useEffect(() => {
    setPizzaId(selectedPizza.id)
    setPizzaTopping(selectedPizza.topping)
    setPizzaSize(selectedPizza.size)
    setPizzaVegetarian(selectedPizza.vegetarian)
  },[selectedPizza])


  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedPizzaObj = {
      id: id,
      topping: topping,
      size: size,
      vegetarian: vegetarian
    }
    updatePizza(updatedPizzaObj)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={(e) => setPizzaTopping(e.target.value)}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={size} onChange={(e) => setPizzaSize(e.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian}
              onChange={() => setPizzaVegetarian(true)}
              
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!vegetarian}
              onChange={() => setPizzaVegetarian(false)}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
