import NavButton from "./NavButton";

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="logo-and-burger-container">
                    <img className="dental-logo" src="/images/stomalogo.jpg" />
                    <div className="burger" />
                </div>
                <div className="buttons-container">
                    <NavButton>STRONA GŁÓWNA</NavButton>
                    <NavButton>O NAS</NavButton>
                    <NavButton>ZAKRES USŁUG</NavButton>
                    <NavButton>KONTAKT</NavButton>
                    <NavButton>
                        <img
                            className="facebook-logo"
                            src="/images/facebook.png"
                        />
                    </NavButton>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
