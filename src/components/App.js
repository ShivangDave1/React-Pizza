import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [pizzas, setPizzas] = useState([])
  const [selectedPizza, setSelectedPizza] = useState({})

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(res => res.json())
    .then(pizzas => setPizzas(pizzas))
  },[])

  const updatePizza = (updatedPizzaObj) => {
    // console.log(updatedPizzaObj)
    const newPizzaList = pizzas.map(originalPizzaObj => {
      
      if(updatedPizzaObj.id === originalPizzaObj.id){
        return updatedPizzaObj
      }else {
        return originalPizzaObj
      }

    })
    setPizzas(newPizzaList)
  }

  return (
    <>
      <Header />
      <PizzaForm selectedPizza={selectedPizza} updatePizza={updatePizza} />
      <PizzaList pizzas={pizzas} setSelectedPizza={setSelectedPizza} />
    </>
  );
}

export default App;
