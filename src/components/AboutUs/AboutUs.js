import Card from "./Card";

const AboutUs = () => {
    const descriptionsData = [
        {
            name: "Monika Szymion",
            profession: "Stomatolog",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus mauris ut sem vehicula, eget elementum sapien dignissim. Duis rutrum fringilla orci eget tincidunt. Curabitur congue magna non tortor fringilla lacinia. Integer augue leo, vulputate vitae ligula in, laoreet viverra eros. Proin consequat iaculis pharetra. Fusce ac imperdiet tortor, non scelerisque felis.",
            picture: "/images/dentist.jpg",
        },
        {
            name: "Rafał Szymion",
            profession: "Protetyk",
            description:
                "Proin et lacus eros. Vivamus sed quam eu turpis pellentesque consectetur molestie eget tellus. Nulla aliquet eleifend turpis. Suspendisse potenti. Nullam tortor massa, vulputate vitae lectus id, ullamcorper ultricies libero. Pellentesque rutrum, augue ac euismod vehicula, odio orci ultricies augue, in auctor mi quam ut leo.",
            picture: "/images/dentist2.jpg",
        },
        {
            name: "Karolina Kucharzewska",
            profession: "Higienistka",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus mauris ut sem vehicula, eget elementum sapien dignissim. Duis rutrum fringilla orci eget tincidunt. Curabitur congue magna non tortor fringilla lacinia. Integer augue leo, vulputate vitae ligula in, laoreet viverra eros. Proin consequat iaculis pharetra. Fusce ac imperdiet tortor, non scelerisque felis.",
            picture: "/images/dentist3.jpg",
        },
    ];

    return (
        <div className="main-aboutus-container">
            <div className="aboutus-container">
                <h2 className="title">POZNAJ NAS</h2>
                <div className="cards-container-grid">
                    {descriptionsData.map((person) => (
                        <Card
                            key={person.name}
                            picture={person.picture}
                            name={person.name}
                            profession={person.profession}
                            description={person.description}
                        />
                    ))}
                    <img className="arrow" src="/images/arrow.png" />
                </div>
                <span className="big-bg-text">POZNAJ NAS</span>
            </div>
        </div>
    );
};

export default AboutUs;
