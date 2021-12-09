import React from 'react';
import { motion } from 'framer-motion';
import X from "../assets/img/x-512.png";

const Modal = (props) => {
  const handleClick = () => {
    props.OnModalClose();
  }

  return (
    <motion.div className="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
      {props.children}
      <div className="CloseImg" onClick={handleClick}>
        <img src={X} width="32" height="32" alt="X" />
      </div>
    </motion.div>
  )
}

export default Modal;