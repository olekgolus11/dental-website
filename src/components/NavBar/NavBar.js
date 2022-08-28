import { useState } from "react";
import NavButton from "./NavButton";
import NavBurger from "./NavBurger";

const NavBar = () => {
    const [isExpanded, toggleExpand] = useState(false);
    const [buttonsClasslist, toggleButtonsClasslist] = useState(
        "buttons-container buttons-container--disabled"
    );

    const expandOn = () => {
        toggleExpand(true);
        toggleButtonsClasslist("buttons-container");
    };
    const expandOff = () => {
        toggleExpand(false);
        toggleButtonsClasslist("buttons-container buttons-container--disabled");
    };

    const expandhandler = () => {
        isExpanded ? expandOff() : expandOn();
    };

    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="logo-and-burger-container">
                    <img
                        className="dental-logo"
                        src="/images/logostomatologia.png"
                    />
                    <NavBurger
                        onExpand={expandhandler}
                        isExpanded={isExpanded}
                    />
                </div>
                <div className={buttonsClasslist}>
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
