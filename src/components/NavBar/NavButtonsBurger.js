import NavButton from "./NavButton";

const NavButtonsBurger = () => {
    return (
        <div className="buttons-container">
            <NavButton>STRONA GŁÓWNA</NavButton>
            <NavButton>O NAS</NavButton>
            <NavButton>ZAKRES USŁUG</NavButton>
            <NavButton>KONTAKT</NavButton>
            <img src="/images/facebook.png" />
        </div>
    );
};

export default NavButtonsBurger;
