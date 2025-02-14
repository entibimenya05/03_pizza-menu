import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  // const style = { color: "red", fontSize: "48", textTransform: "upperCase" };
  return (
    //styling using inline stylinin //first use style= then enter the
    //  javascript mode by {} then another {} for creating and object //font-size
    // is not allowed in javascript mode instead use camel case fontSize // we
    //  can also create a variable name and pass in the properties
    <header className="header">
      <h1
      //style={{ color: "red", fontSize: "48", textTransform: "upperCase" }}
      // style={style}
      >
        Fast React Pizza Co.
      </h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/*rendering a list*/}
      {/*conditional rendering;we only want to render the list of pizzas only if there are pizzas present*/}

      {/*  {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza
              //name={pizza.name} photoName={pizza.photoName}
              // this not how we want it instead we pass in a pizzaObject and then we can access the information we want out of the object
              pizzaObj={pizza}
              key={pizza.name}
            />
          ))}
        </ul>
      )}*/}
      {/*ternary operator*/}
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza
              //name={pizza.name} photoName={pizza.photoName}
              // this not how we want it instead we pass in a pizzaObject and then we can access the information we want out of the object
              pizzaObj={pizza}
              key={pizza.name}
            />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
      {/*
passing and receiving props:1. we pass the props into the component 2. then we receive the props into the component*/}
      {/*  <Pizza
        //1. pass the props into the component
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        //to pass the number as number we do it by entering javascript mode not as ""
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={12}
        photoName="pizzas/funghi.jpg"
        soldOut="false"
      />*/}
    </main>
  );
}
//2. we receive the props inside the child component
function Pizza(props) {
  console.log(props);
  return (
    <li className="pizza">
      {/*Now we use these values by entering javascript mode
      //also adapt our props to reflect pizzaObj*/}
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>

        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 3}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  //   if (hour >= openHour && hour <= closeHour) alert("W're currently open!");
  //   else alert("Sorry w're closed!");
  console.log(isOpen);

  return (
    <footer className="footer">
      {/* the && opoertor*/}
      {isOpen ? (
        <div className="order">
          <p>We're open until {closeHour} :00. Come visit us or order online</p>
          <button className="btn">Order Now</button>
        </div>
      ) : (
        <p>
          {" "}
          We're happy to welcome you between {openHour} :00 and {closeHour} :00
        </p>
      )}

      {/*{new Date().toLocaleTimeString()}. We are currently open*/}
    </footer>
  );
}

//React v18
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
