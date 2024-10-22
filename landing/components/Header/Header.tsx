"use client";
import React, { useRef, useState } from 'react';

const Header = () => {
    const navStatus = useRef("light");
    const [icon, seticon] = useState<React.ReactElement>(<i className="ri-sun-line"></i>);

    let theme;

    const handleTheme = () => {
        if (navStatus.current === "light") {
            navStatus.current = "dark";
            theme = "dark";
            seticon(<i className="fa-solid fa-moon"></i>);
            // console.log(theme)
        } else if (navStatus.current === "dark") {
            navStatus.current = "light";
            theme = "light";
            seticon(<i className="ri-sun-line"></i>)
            // console.log(theme)
        }
    }

    return (
        <div className='bg-black'>
            <header className='z-100 p-5 bg-black w-full fixed'>
                <nav className='flex justify-between align-middle'>
                    <div className={`text-2xl font-bold`}>#30 Days Coding Challenge</div>
                    <div className='text-black text-2xl bg-white rounded-full w-10 h-10 text-center p-1 font-bold' onClick={handleTheme}>{icon}</div>
                </nav>
            </header>
        </div>
    )
}
export default Header;