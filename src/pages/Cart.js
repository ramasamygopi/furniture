import React from 'react';
import './style.css';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="container fluid">
      <div className="producttitle">
        <h2> your Cart Item</h2>
      </div>
      {cart.length === 0 ? (
        <p  id="empty"> Your cart is empty.</p>
      ) : (
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <button onClick={() => removeFromCart(index)} id="delete">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cart;
