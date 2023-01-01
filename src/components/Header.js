import React from 'react'
import NavItem from './NavItem'
 

const Header = () => {

  return (
    <nav className="flex-row bg-black">
    <div className="sm:flex">
    
    <div className=" text-white px-3 py-5 text-2xl font-semibold place-content-start">
    Property Investment Company
    </div>
     <div className='sm:flex sm:grow place-content-end'>
      <NavItem 
        option="How It Works" 
        link="howitworks"  
        />
        <NavItem 
        option="What To Expect" 
        link="steps"  
        />
        <NavItem 
         option="Partners"   
         link="partners"
        />
        <NavItem 
         option="Sign Up"  
         link="signup"
        />
        <NavItem 
         option="Contact"   
         link="contact"
        />
    </div>  
    </div> 
    </nav>
  )
}

export default Header