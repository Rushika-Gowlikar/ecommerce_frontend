'use client';
import { useContext } from "react";
import { CartCountContext } from "../context/CartContext";

export default function Cart() {
  const { cartState, dispatch } = useContext(CartCountContext);

  const handleRemoveToCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  return (
    <div className="container">
      <h1>Cart Products</h1>
      {cartState.cartItem.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <>
          <ul className="list-group">
            {cartState.cartItem.map((item) => (
              <li key={item._id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h4>{item.name}</h4>
                  <img src={item.url} alt={item.name} width={50} height={50} />
                  <p>Price: ₹{item.price}</p>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveToCart(item)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="d-flex justify-content-end mt-4">
            <button className="btn btn-success">
              Proceed to Buy ({cartState.cartItem.length} items)
            </button>
          </div>
        </>
      )}
    </div>
  );
}

