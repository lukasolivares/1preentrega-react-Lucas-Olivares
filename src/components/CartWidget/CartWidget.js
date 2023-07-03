import React from 'react';
import 'react-bootstrap-icons';
import { FaCartShopping } from "react-icons/fa6";

const CartWidget = () => {
    return (
        <div>
            <i className="FaCartShopping"><FaCartShopping/><span>0</span></i>
        </div>
    )
}

export default CartWidget