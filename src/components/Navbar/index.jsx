import React from 'react'
import './style.css'

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className='nav-black'>
        <h1>Republic of Gamers</h1>
        <div className='nav'>
          <a href="">PRODUCTS</a>
          <a href="">INNOVATIONS</a>
          <a href="">DOWNLOADS</a>
          <a href="">COMMUNITY</a>
          <a href="">WHAT'S HOT</a>
          <a href="">SUPPORT</a>
        </div>
        <div className='extra'>
          <p>ASUS</p>
          <a href=''><i class="fa-solid fa-magnifying-glass"></i></a>
          <a href=""><i class="fa-regular fa-user"></i></a>
        </div>
      </div>
      <div className='nav-red'>
        <p>Create an account for better product support!</p>
      </div>
    </div>
  )
}