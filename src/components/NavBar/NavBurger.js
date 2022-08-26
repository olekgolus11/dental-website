const NavBurger = (props) => {
    const clickHandler = () => {
        props.onBurgerClick();
    };
    return (
        <div className="burger" onClick={clickHandler}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    );
};

export default NavBurger;
