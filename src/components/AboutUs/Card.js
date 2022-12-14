const Card = (props) => {
    return (
        <div className="card-container">
            <img src={`${props.picture}`} />
            <h3>{props.name}</h3>
            <h4>{props.profession}</h4>
            <h6>{props.description}</h6>
        </div>
    );
};
export default Card;
