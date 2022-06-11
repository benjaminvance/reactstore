import StoreContext from "./storeContext";
import { useState } from "react";
import Cart from './../components/cart';

const GlobalStoreProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({ name: "admin", id: 42});

    const addProdToCart = (prod) =>{
        console.log("Global add prod...");

        let copy = [...cart];
        copy.push();
        setCart(copy);
    };

    const removeProdFromCart = () => {
        console.log("Global remove prod...");
    };

    return(
        <div>
            <StoreContext.Provider value={{
                cart: cart,
                user: user,
                addProdToCart: addProdToCart,
                removeProdFromCart: removeProdFromCart,

            }}>
                {props.children}
            </StoreContext.Provider>

        </div>
    );

};

export default GlobalStoreProvider;