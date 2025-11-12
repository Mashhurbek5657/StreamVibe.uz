import React, { useEffect, useState } from 'react'
import Logo from '../Conponit/Logo.png'
import Qiud from '../Conponit/Vector (1).png'
import Xa from '../Conponit/Vector (2).png'
import { Link, NavLink, Outlet } from 'react-router-dom'
import ScrollTop from './ScrollTop'

export default function Navbar() {


    const [isScolled, setScrolled] = useState(false)


    useEffect(() => {
        // console.log(window.scrollY);

        function handleScrollTop() {
            if (window.scrollY > 200) {
                setScrolled(true)
                console.log("Succes");

            } else {
                setScrolled(false)
                console.log("Error");

            }
        }

        window.addEventListener("scroll", handleScrollTop)

        return () => window.removeEventListener("scroll", handleScrollTop)
    }, [])

    return (
        <div>
            {/* <ScrollTop/> */}
            <div className="contenr">
                <div className="parent">
                    <div className='nav'>
                        <div className={`py-3 z-[99] flex items-center gap-[150px] justify-center fixed left-0 top-0 w-full transition-all duration-500 ${isScolled ? " gap-[130px] backdrop-blur-[10px] bg-white/5 h-[110px] translate-y-0" : ""}`}>
                            <img src={Logo} alt="" />
                            <div className="nav-pg">
                                <ul>
                                    <li><NavLink className='px-4 py-3 rounded-[8px]' to="/" activeClassName="active">Home</NavLink></li>
                                    <li><NavLink className='px-4 py-3 rounded-[8px]' to="/video" activeClassName='active'>Movies & Shows</NavLink> </li>
                                    <li><NavLink className='px-4 py-3 rounded-[8px]' to="/support" activeClassName='active'>Support</NavLink></li>
                                    <li><NavLink className='px-4 py-3 rounded-[8px]' to="/Subscriptions" activeClassName='active'>Subscriptions</NavLink></li>
                                </ul>
                            </div>
                            <div className=' flex gap-[30px]'>
                                <img src={Qiud} alt="" className=' cursor-pointer' />
                                <img src={Xa} alt="" className=' cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main className='pt-8'>
                <Outlet />
            </main>
        </div>
    )
}
