import React from 'react'
import Card from './Card'
import '../styles/Body.css'

const Body = () => {
  return (
    <>
    <main>
      <div className='body-header'>
        <h2>All Products</h2>
        <button>Sort by price</button>
      </div>

      <section>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        
      </section>
    </main>
    </>
  )
}

export default Body
