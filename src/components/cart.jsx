import "./cart.css";
import { useContext } from "react";
import StoreContext from './../context/storeContext';


const Cart = () => {
    let cart = useContext(StoreContext).cart;


    return (
        <div className="cart">
            <h6>We have {cart.length} products ready for you.</h6>
            <h3>Are you ready to place the order?</h3>
            <hr />
            
            <ul>
                {cart.map(prod => <li key={prod.id}>{prod.title} - ${prod.price}</li>)}
            </ul>

        </div>
    );
};

export default Cart;