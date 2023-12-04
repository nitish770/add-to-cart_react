import React, { useState } from "react";
import Modal from "react-modal";

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const addToCart = () => {
    handleClick(item);
    setIsOpen(false);
  };
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
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="ihm" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Rs: {price}/-</p>
        <button onClick={() => openModal()}>Add to Cart</button>
      </div>
      {/* Modal */}
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <p style={{ textAlign:'center',fontWeight:'bold' }}>Are you sure to add item</p>
        <button
          style={{
            background: "green",
            margin: "45px",
            padding: "10px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={addToCart}
        >
          yes
        </button>
        <button
          style={{
            background: "red",
            margin: "45px",
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
  );
};

export default Cards;
