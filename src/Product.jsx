import React from "react";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./App.css"

function Product({ items, GetCart }) {
    return (
        <>
            <h1 className="productdata">
                <Link to="cart">
                    <BsCart4 style={{ width: "50px", height: "50px" }} />
                </Link>
            </h1>
            <div>
                {
                    items.map((item) => {
                        return (
                            <div key={item.id} id="main">
                                <div ><img src={item.image} id="img"></img></div>
                                <div id="data">
                                    <ul>
                                        <li>
                                            Id={item.id}
                                        </li>
                                        <li>
                                            Title={item.title}
                                        </li>
                                        <li>
                                            Price={item.price}
                                        </li>
                                        <li>
                                            Category={item.category}
                                        </li>
                                    </ul>
                                    <button onClick={() => GetCart(item)}>Add to cart</button>
                                </div>

                            </div>

                        )


                    })

                }

            </div>
        </>
    )
}


export default Product;