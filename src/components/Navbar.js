import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import { ButtonSignin } from './ButtonSignin';
import Axios from 'axios';





function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize',showButton); 
   
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                <img src="./Alchemyl.png" alt="bug" height={70} width={250} />
                <i className='fab fa-typo3'></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/Games' className='nav-links' onClick={closeMobileMenu}>
                        Games
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Leaderboards' className='nav-links' onClick={closeMobileMenu}>
                        Leaderboards
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Profile' className='nav-links' onClick={closeMobileMenu}>
                            Profile
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/SignIn' className='nav-links-mobile' onClick={closeMobileMenu}>
                            SIGN IN
                        </Link>
                    </li>
                </ul>
                {button && <ButtonSignin  buttonStyle='btn--outline'>SIGN IN</ButtonSignin>}
            </div>
        </nav>
    </>
  );
}

export default NavBar