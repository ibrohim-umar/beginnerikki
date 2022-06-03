import React from 'react';
import './styles/Second.css'
import kichik from './assets/kichik.jpg'
const Second = () => {
  return (
   <section className='second-section' >
     <div className="second-container">
         

         <div className="card">
             <img src={kichik} alt="" />
             <p>Big boy spicy</p>
             <button>Order</button>
         </div>
         <div className="card">
             <img src={kichik} alt="" />
             <p>Big boy spicy</p>
             <button>Order</button>
         </div>
         <div className="card">
             <img src={kichik} alt="" />
             <p>Big boy spicy</p>
             <button>Order</button>
         </div>
         <div className="card">
             <img src={kichik} alt="" />
             <p>Big boy spicy</p>
             <button>Order</button>
         </div>
         <div className="card">
             <img src={kichik} alt="" />
             <p>Big boy spicy</p>
             <button>Order</button>
         </div>
         <div className="card">
             <img src={kichik} alt="" />
             <p>Big boy spicy</p>
             <button>Order</button>
         </div>
        


    </div> 
   </section>
  )
}

export default Second