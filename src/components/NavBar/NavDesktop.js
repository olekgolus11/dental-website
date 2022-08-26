import NavButton from "./NavButton";

const NavDesktop = () => {
    return (
        <div className="buttons-container">
            <NavButton className="navbutton-desktop">STRONA GŁÓWNA</NavButton>
            <NavButton className="navbutton-desktop">O NAS</NavButton>
            <NavButton className="navbutton-desktop">ZAKRES USŁUG</NavButton>
            <NavButton className="navbutton-desktop">KONTAKT</NavButton>
            <img className="fblogo" src="/images/facebook.png" />
        </div>
    );
};
export default NavDesktop;
