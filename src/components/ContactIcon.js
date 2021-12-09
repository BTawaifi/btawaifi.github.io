import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const ContactIcon = (props) => {
    return (
        <motion.div whileHover={{ scale: 1.05, transition: { yoyo: Infinity } }} className="mb-3">
            <a className="contact-text-icons" href={props.href} >
                <FontAwesomeIcon icon={props.icon} size="2x" fixedWidth />
            </a>
        </motion.div>
    )
}

export default ContactIcon
