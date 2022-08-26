import NavButtonsBurger from "./NavButtonsBurger";
import NavMobileButtons from "./NavMobileButtons";
import { useState } from "react";

const NavBar = () => {
    const [isListExpanded, toggleExpandList] = useState(false);

    const expandHandler = () => {
        isListExpanded ? toggleExpandList(false) : toggleExpandList(true);
    };

    return (
        <div className="navbar-container">
            <div className="items-container">
                <img className="stomalogo" src="/images/stomalogo.jpg" />
                <NavButtonsBurger onExpand={expandHandler} />
            </div>
            <NavMobileButtons isExpanded={isListExpanded} />
        </div>
    );
};

export default NavBar;
