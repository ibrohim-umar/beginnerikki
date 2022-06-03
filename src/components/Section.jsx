import { ArrowForward } from '@material-ui/icons';
import React from 'react';
import './styles/Section.css';

const Section = () => {
  return (
    <section className='section-1'>
        <div className="section-container">

         <div className="texts">
             <h1> day starts with a piece of <span>pizza</span>  </h1>
             <h4>And ends with two piece of pizza</h4>
             <button className='button'> Discover </button>
             <button className='button' >Menu</button>
         </div>

          <div className="black-box">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam facere, eum pariatur ea odit iure aspernatur consequatur quo in mollitia officia reprehenderit amet autem similique placeat sit dolores nulla unde blanditiis culpa a ipsa. Dicta laboriosam a dolorum mollitia veritatis eaque, iure soluta, ullam voluptate ad officiis impedit placeat? Eius.</p>
              <button>
                  <span>more</span>
                  <ArrowForward className='arrow-forward'/>
              </button>
          </div>

        </div>
    </section>
  )
}

export default Section