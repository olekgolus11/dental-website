const NavMobileButtons = (props) => {
    const classNames =
        "mobile-button-list " +
        (props.isExpanded ? "" : "mobile-button-list--disabled");

    return (
        <div className={classNames}>
            <div className="mobile-button">STRONA GŁÓWNA</div>
            <div className="mobile-button">O NAS</div>
            <div className="mobile-button">ZAKRES USŁUG</div>
            <div className="mobile-button">KONTAKT</div>
        </div>
    );
};
export default NavMobileButtons;
