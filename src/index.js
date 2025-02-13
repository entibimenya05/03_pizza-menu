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
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/*
passing and receiving props:1. we pass the props into the component 2. then we receive the props into the component*/}
      <Pizza
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
      />
    </main>
  );
}
//2. we receive the props inside the child component
function Pizza(props) {
  console.log(props);
  return (
    <div className="pizza">
      {/*Now we use these values by entering javascript mode*/}
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>

        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div>
    </div>
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
      {new Date().toLocaleTimeString()}. We are currently open
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
