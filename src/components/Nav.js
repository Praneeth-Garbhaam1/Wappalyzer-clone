import React from 'react'
import { Link} from 'react-router-dom'
import Logo from '../svg_folder/wappalyzer-white-1.svg'
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Nav() {
    
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src={Logo} alt="wap-alt"/><span><Link to="/">Wappalyzer</Link></span>
                </div>
                <ul className="nav-links">
                    <li><Button>Products<ExpandMoreIcon/></Button></li>
                    <li><Button><Link to="/pricing">Pricing</Link></Button></li>
                    <li><Button>Resources<ExpandMoreIcon/></Button></li>
                    <li><Button><Link to="/about">About</Link></Button></li>
                    <li><Button>Sign Up free</Button></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;
