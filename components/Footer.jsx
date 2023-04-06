import React from 'react';
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";


const Footer = () => {
  return (
    <div className="footer-container">
      <p>Made with ❤️ by Ashkay!</p>
      <p>2023 KoreaTech Products All rights Reserved</p>

      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillFacebook />
      </p>
    </div>
  );
}

export default Footer