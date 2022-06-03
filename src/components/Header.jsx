import { MenuOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React, {useState} from 'react';
import './styles/Header.css';
import {Data} from './Data';



const Header = () => {

  const [open, setOpen] = useState(false);

  const showMenu = () => {
      setOpen(!open)
  }

  return (
    <div className='header' >

     <div className="header-container">

      <div className="logo">
          <h1> eBurger </h1>
      </div>
       <div className="number">
           <span></span>
           <p> +1 983 1234 5567 </p>
       </div>


           <div className="right">
               <ShoppingCartOutlined className='sh-card'/>
               <MenuOutlined  onClick={showMenu} className='M-card'/>
           </div>

          </div>
         
         <nav  className={open ? 'slider-active' : 'slider'} >
             <ul  onClick={showMenu} >
                  {Data.map((items,index) =>{
                      return (
                          <li key={index}>  <a href={items.path}> {items.text} </a>  </li>
                      )
                  })}
             </ul>
         </nav>

    </div>
  )
}

export default Header