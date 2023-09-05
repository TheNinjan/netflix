import { FaFacebookF, FaTwitter,FaInstagram,FaLinkedinIn,FaYoutube } from "react-icons/fa";
import Link from "next/link";


export const metadata = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
}

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='content'>
                    <div className='top'>
                        <div className='logo-details'>
                            <span className='logo_name'>Netflix</span>
                        </div>
                        <div className="media-icons">
                            <Link href="#"><i > <FaFacebookF/> </i></Link>
                            <Link href="#"><i > <FaTwitter/> </i> </Link>
                            <Link href="https://www.instagram.com/#" target="_blank"><i > <FaInstagram/>  </i></Link>
                            <Link href="#"><i > <FaLinkedinIn /> </i></Link>
                            <Link href="#"><i > <FaYoutube />  </i></Link>
                        </div>
                    </div>
                    <div className='link-boxes'>
                        <ul className='box'>
                            <li className='link_name'>Netflix</li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Get started</a></li>
                        </ul>
                        <ul className='box'>
                            <li className='link_name'>Services</li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">Series</a></li>
                            <li><a href="#">Documentry</a></li>
                            <li><a href="#">Music</a></li>
                        </ul>
                        <ul className='box'>
                            <li className='link_name'>Account</li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">My account</a></li>
                            <li><a href="#">Prefrences</a></li>
                            <li><a href="#">Purchase</a></li>
                        </ul>
                        <ul className='box'>
                            <li className='link_name'>Packes</li>
                            <li><a href="#">Free</a></li>
                            <li><a href="#">399/Month</a></li>
                            <li><a href="#">3000/Year</a></li>
                            <li><a href="#"> Buy Now</a></li>
                        </ul>
                        <ul className='${box}input-box'>
                            <li className='link_name'>Subscribe</li>
                            <li><input type="text" placeholder="Enter your email" /></li>
                            <li><input type="button" value="Subscribe" /></li>
                        </ul>
                    </div>
                </div>
                <div className='bottom-details'>
                    <div className='bottom_text'>
                        <span className='copyright_text'> Copyright © 2023
                            <Link href="/>"> Netflix.</Link> All rights reserved </span>
                        <span className='policy_terms'>
                          <Link href="/">Privacy policy</Link>
                          <Link href="/">Terms & condition</Link>
                        </span>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;