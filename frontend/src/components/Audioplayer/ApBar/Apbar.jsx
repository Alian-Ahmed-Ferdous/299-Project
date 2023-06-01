import { motion } from 'framer-motion'
import React from 'react'
import './ApBar.css'
import AudioVisual from '../AudioVisual'

function Apbar({isOpen, audioPlayer}) {
  return (
    <div className="navbar-container">
      <motion.div
        className="navbar"
        initial={{ x: "15rem" }}
        animate={{ x: isOpen ? 0 : "15rem" }}
        transition={{ duration: 0.3 }}
      >
        <AudioVisual />
      </motion.div>
    </div>
  )
}

export default Apbar