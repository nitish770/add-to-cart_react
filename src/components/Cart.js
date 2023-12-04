import React, { useEffect, useState } from "react";
import "../style/cart.css";
import Modal from "react-modal";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleRemove = (id) => {
    let delt = cart.filter((item) => item.id !== id);
    setCart(delt);
    setIsOpen(false);
  };
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  });
  // Modal
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="imk" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => openModal(item.id)}>Remove</button>
          </div>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <p style={{ textAlign: "center", fontWeight: "bold" }}>
              Are you sure to delete
            </p>
            <button
              style={{
                backgroundColor: "green",
                margin: "30px",
                padding: "10px",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => handleRemove(item.id)}
            >
              yes
            </button>
            <button
              style={{
                backgroundColor: "red",
                margin: "30px",
                padding: "10px",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => setIsOpen(false)}
            >
              no
            </button>
          </Modal>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs- {price}</span>
      </div>
    </article>
  );
};

export default Cart;
