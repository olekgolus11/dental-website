import OfferButton from "./OfferButton";

const OfferCard = (props) => {
    return (
        <div className="offer-container-grid">
            <h4 id="offer-title">{props.title}</h4>
            <h6 id="offer-description">{props.description}</h6>
            <OfferButton />
        </div>
    );
};
export default OfferCard;
