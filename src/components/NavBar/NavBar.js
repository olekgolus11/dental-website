import NavButtonsBurger from "./NavButtonsBurger";

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="items-container">
                <img src="/images/stomalogo.jpg" />
                <NavButtonsBurger />
            </div>
        </div>
    );
};

export default NavBar;
