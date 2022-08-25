import NavButton from "./NavButton";
import Burger from "./Burger";

const NavButtonsBurger = () => {
    return (
        <div className="menu">
            <Burger />
            <div className="buttons-container">
                <NavButton>STRONA GŁÓWNA</NavButton>
                <NavButton>O NAS</NavButton>
                <NavButton>ZAKRES USŁUG</NavButton>
                <NavButton>KONTAKT</NavButton>
                <img className="fblogo" src="/images/facebook.png" />
            </div>
        </div>
    );
};

export default NavButtonsBurger;
