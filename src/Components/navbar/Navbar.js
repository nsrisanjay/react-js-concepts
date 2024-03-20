import './Navbar.css'
import {Link} from 'react-router-dom'
function Navbar()
{
    return(
        <div className="navbar">
            <h3>NAVBAR</h3>
            <ul>
                <li>
                    {/* link to home */}
                    <Link to=" " style={{textDecoration:'none'}}>
                        HOME
                    </Link>
                </li>
                <li>
                    {/* link to Login */}
                    <Link to="login" style={{textDecoration:'none'}}>
                        LOGIN
                    </Link>
                </li>
                <li>
                    {/* link to signup */}
                    <Link to="signup" style={{textDecoration:'none'}}>
                        SIGNUP
                    </Link>
                </li>
                <li>
                    {/* link to technologies */}
                    <Link to="technologies" style={{textDecoration:'none'}}>
                        TECHNOLOGIES
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default Navbar;