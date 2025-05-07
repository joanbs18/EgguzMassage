import "../../css/flipCard.css";

export default function FlipCard() {
    return (
      
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img  src="images/Elberth Logo-blanco.webp" alt="" width={95} height={80}/>
                    <h1 className="title">Elberth</h1>
                    <p>Hover Me</p>
                </div>
                <div className="flip-card-back">
                    <p className="title">BACK</p>
                    <p>Leave Me</p>
                </div>
            </div>
        </div>
    );
}