import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import '../styles/Card.css'

const Card = () => {
  return (
    <div>
      <div className='card'>
        <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/8230433/1.jpg?3035" alt="" />
        <p className='first'>Product Name</p>
        <p className='second'>$10000</p>
        <p className='third'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatibus.</p>
        
        <div className='icon-container'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </div>

        <div className='btn-container'>
        <button className='btn'>Add to cart <IoMdCart/></button>
        </div>
      </div>
    </div>
  )
}

export default Card
