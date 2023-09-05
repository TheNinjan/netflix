import React from 'react'
import Link from 'next/link'
function Nav() {
  return (
    <nav className='nav'>
        <div className='navbarList'> 
        <ul>
            <li className='navbarItem'>
                <Link href={"/"} className='navbarLink'>Home</Link>
            </li>
        </ul>
        <ul>
            <li className='navbarItem'>
                <Link href={"/movie"} className='navbarLink'>Movies</Link>
            </li>
        </ul>
        <ul>
            <li className='navbarItem'>
                <Link href={"/about"} className='navbarLink'>About</Link>
            </li>
        </ul>
        <ul>
            <li className='navbarItem'>
                <Link href={"/contects"} className='navbarLink'>Contect</Link>
            </li>
        </ul>
        </div>


    </nav>
  )
}

export default Nav
