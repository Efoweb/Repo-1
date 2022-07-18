import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
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

    window.addEventListener('resize',showButton);

    const getCar = () => {
        Axios.get("http://localhost:8080/customer/viewCars").then((response) => {
            console.log(response)
        })
    }

    
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo'>
                    Alchemy <i className='fab fa-typo3' />
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
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
    </>
  );
}

export default NavBar