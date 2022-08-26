import NavButton from "./NavButton";
import NavBurger from "./NavBurger";

const NavButtonsBurger = (props) => {
    const burgerClickHandler = () => {
        props.onExpand();
    };

    return (
        <div className="menu">
            <NavBurger onBurgerClick={burgerClickHandler} />
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
