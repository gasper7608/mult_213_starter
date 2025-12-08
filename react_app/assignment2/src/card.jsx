import './card.css'

export function Card({ title, subtitle, image, content }) {
    return (
        <div className="card">
            {image ? <img src={image} alt={title ?? "Card image"} className="card__image" /> : null}
            <div className="card__body">
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>{content}</p>
            </div>
        </div>
    );
}