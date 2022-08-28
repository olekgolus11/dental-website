import { useState } from "react";

const NavBurger = (props) => {
    const [span1Classlist, toggleSpan1Classlist] = useState("s1");
    const [span2Classlist, toggleSpan2Classlist] = useState("s2");
    const [span3Classlist, toggleSpan3Classlist] = useState("s3");

    const clickHandler = () => {
        props.onExpand();
        if (props.isExpanded) {
            toggleSpan1Classlist("s1");
            toggleSpan2Classlist("s2");
            toggleSpan3Classlist("s3");
        } else {
            toggleSpan1Classlist("s1 s1--active");
            toggleSpan2Classlist("s2 s2--active");
            toggleSpan3Classlist("s3 s3--active");
        }
    };

    return (
        <div className="burger" onClick={clickHandler}>
            <span className={span1Classlist} />
            <span className={span2Classlist} />
            <span className={span3Classlist} />
        </div>
    );
};

export default NavBurger;
