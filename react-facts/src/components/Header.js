import reactLogo from '../assets/react.png';
import './Header.css';

function Header () {
    return (
        <div>
            <header>
                <nav>
                    <img 
                        src={reactLogo}
                        alt="React Logo"
                        className="nav--icon"
                    />
                    <h3 className="nav--title">
                        React facts
                    </h3>
                </nav>
                <h4>
                    React Course - Project 1
                </h4>
            </header>
        </div>
    )
}

export default Header;