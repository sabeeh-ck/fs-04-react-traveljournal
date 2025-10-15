export default function Entry(props) {
    return (
        <article>
            <img src={props.img.src} alt={props.img.alt} />
            <div className="details">
                <div className="location">
                    <img src="src\assets\marker.png" alt="" />
                    <span>{props.country}</span>
                    <a href={props.googleMapsLink}>VIew on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <span className="date">{props.dates}</span>
                <p>{props.text}</p>
            </div>
        </article>
    );
}
