import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
function Header() {
  return (
    <header className='main_header' >
      <div className='navbar_brand'> 
      <Link href={'/'}> 
      <Image src={'/logo.svg'} alt='img' width={100} height={100 }/>
      </Link>
      </div>
      <Nav/>
    </header>
  )
}

export default Header
