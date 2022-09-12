import OfferCard from "./OfferCard";

const OurOffers = () => {
    const offersData = [
        {
            title: "STOMATOLOGIA ESTETYCZNA",
            description:
                "Incididunt nostrud eiusmod Lorem tempor. Reprehenderit officia tempor sit esse nisi aliqua occaecat. Eu pariatur ex cupidatat.",
        },
        {
            title: "STOMATOLOGIA ZACHOWAWCZA",
            description:
                "Incididunt nostrud eiusmod Lorem tempor. Reprehenderit officia tempor sit esse nisi aliqua occaecat. Eu pariatur ex cupidatat.",
        },
        {
            title: "STOMATOLOGIA DZIECIĘCA",
            description:
                "Incididunt nostrud eiusmod Lorem tempor. Reprehenderit officia tempor sit esse nisi aliqua occaecat. Eu pariatur ex cupidatat.",
        },
        {
            title: "MEDYCYNA ESTETYCZNA",
            description:
                "Incididunt nostrud eiusmod Lorem tempor. Reprehenderit officia tempor sit esse nisi aliqua occaecat. Eu pariatur ex cupidatat.",
        },
        {
            title: "PROTETYKA",
            description:
                "Incididunt nostrud eiusmod Lorem tempor. Reprehenderit officia tempor sit esse nisi aliqua occaecat. Eu pariatur ex cupidatat.",
        },
        {
            title: "ENDODONCJA",
            description:
                "Incididunt nostrud eiusmod Lorem tempor. Reprehenderit officia tempor sit esse nisi aliqua occaecat. Eu pariatur ex cupidatat.",
        },
    ];

    return (
        <div className="ouroffers-container">
            <h2 className="title">NASZE USŁUGI</h2>
            <div className="offers-container-grid">
                <h6 className="description">
                    Aliquip non nostrud dolor ipsum exercitation anim commodo
                    officia incididunt reprehenderit anim voluptate. Non
                    consequat consectetur aute et enim velit qui consectetur
                    dolor ullamco culpa mollit.
                </h6>
                <img className="tools-image" src="/images/tools.jpg" />
                {offersData.map((offer) => (
                    <OfferCard
                        key={offer.title}
                        title={offer.title}
                        description={offer.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default OurOffers;
