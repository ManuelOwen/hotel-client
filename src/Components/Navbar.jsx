import {Link} from 'react-router-dom'
import './Navbar.css';
import { FcHome } from "react-icons/fc";
import {FcAbout  } from "react-icons/fc";
import {FcMenu  } from "react-icons/fc";
import {FcBriefcase  } from "react-icons/fc";
import {FcInfo } from "react-icons/fc";
import {FcTabletAndroid } from "react-icons/fc";
export const Navbar = () =>{
    return (
        <div className='navbar'>
            <Link to="/">
  <FcHome /> <span>Home</span>
</Link>

            <Link to="/About">
                <FcAbout />
               <span>About</span> </Link>
            <Link to="/Menu">
                <FcTabletAndroid    />
                <span>Online order</span></Link>
            <Link to="/More">
            <FcMenu/>
               <span>More</span> </Link>
            <Link to="/Rooms">
                <FcBriefcase/>
               <span>Accomodation</span> </Link>
            {/* <Link to="/Contacts">
                <FcInfo/>
               <span>Remarks</span> </Link> */}

                <Link to="/Login">
                
                <span>Sign Up</span></Link>
        </div>
    )
}