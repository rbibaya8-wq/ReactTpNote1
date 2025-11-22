
/*import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import "./App.css";
import CartModel from "./Components/CartModel";
import CheckoutForm from "./Components/CheckoutForm";
import { products } from "./data/products";

function App() {
  const [cart, setCart] = useState([]);
  const [search,setSearch]=useState("");
  const [showInfo,setShowInfo]=useState(false);
  const [Filtrage,setFiltrage]=useState("All");
  const [ShowForm,SetShowForm]=useState(false);
  const [Theme,setTheme]=useState("light");
  const [wishlist, setWishlist] = useState([]);

  const toggletheme=()=>{
    setTheme((prev)=>(prev==="light"?"dark":"light"))
  }
  {/*const toggleWishlist=(product)=>{
    const exsits=wishlist.find((item)=>item.id===product.id);
  
  if (exsits){
    setWishlist(wishlist.filter((item)=>item.id!==product.id))
  }else{
    setWishlist([...wishlist,product])
  }
} 
  const toggleWishlist = (product) => {
  setWishlist(prev => {
    const exists = prev.find(item => item.id === product.id);
    return exists
      ? prev.filter(item => item.id !== product.id) // remove
      : [...prev, product]; // add
  });
};

  return (
    <div className={`app ${Theme}`}>
      <Navbar
        cartCount={cart.length}
        onOpenCart={() => {setShowInfo(true)}}
        search={search} setSearch={setSearch}
        Filtrage={Filtrage} setFiltrage={setFiltrage}
        toggletheme={toggletheme}  Theme={Theme}
      />
      {showInfo && !ShowForm && (
        <CartModel
          cart={cart}
          setCart={setCart}
          onClose={() => setShowInfo(false)}
          SetShowForm={() => {
            SetShowForm(true);
            setShowInfo(false);
          }}
        />
      )}
      {ShowForm &&(
        <CheckoutForm cart={cart} SetShowForm={SetShowForm} total={cart.reduce((acc, item) => acc + item.price * item.qty, 0)}/>
      )}
      {!ShowForm &&(
        <Home cart={cart} setCart={setCart} search={search} Filtrage={Filtrage} />
      )}
      
    

    </div> 
      
  );
}

export default App;
*/
import React from "react";
import "./App.css";
import MainPagee from "./Pages/MainPagee";
function App() {
  return (
    <div className="App">
      <MainPagee />
    </div>
  );
}

export default App;