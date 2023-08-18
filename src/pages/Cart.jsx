import React from "react";
import Book from "../components/ui/Book";

const Cart = ({cart}) => {
    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="cart__title">
                            Cart
                            </h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__book">Book</span>
                                <span className="cart__quantity">Quantity</span>
                                <span className="cart__total">Price</span>
                            </div>
                            <div className="cart__body">
                                {
                                    cart.map(book=> {
                                        return ( <div className="cart__item">
                                    <div className="cart__book">
                                        <img src="https://covers.openlibrary.org/b/id/8091016-L.jpg" alt="" className="cart__book--img" />
                                    <div className="cart__book--info">
                                        <span className="cart__book--title">CRACK</span>
                                        <span className="cart__book--price">
                                            $99

                                        </span>
                                        <button className="cart__book--remove">Remove</button>
                                    </div>
                                    </div>
                                    <div className="cart__quantity">
                                        <input className="cart__input" type="number" min={0} max={99}/>
                                    </div>
                                    <div className="cart_total">$1010</div>

                                </div>

                                        )
                                    })
                                }
                               
                            </div>
                        </div>
                        <div className="total">
                            <div className="total__item total__sub-total">
                                <span>subtotal</span>
                                <span>9</span>
                        
                            </div>
                            <div className="total__item total__tax">
                                <span>tax</span>
                                <span>239</span>
                        
                            </div>
                            <div className="total__item total__price">
                                <span>total</span>
                                <span>668686</span>
                        
                            </div>
                            <button className="btn btn__checkout no-cursor" onClick={()=> alert("havnt done this yet ;(")}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        // <>
        // <div className="container">
        //     <div className="row">
        //         <h1>{JSON.parse(localStorage.getItem("cart"))}</h1>
     

        //     </div>
        // </div>
        // </>

    )
}

export default Cart