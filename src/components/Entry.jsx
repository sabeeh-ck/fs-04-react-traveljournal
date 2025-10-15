export default function Entry(props) {
    return (
        <article>
            <img src={props.entry.img.src} alt={props.entry.img.alt} />
            <div className="details">
                <div className="location">
                    <img src="src\assets\marker.png" alt="" />
                    <span>{props.entry.country}</span>
                    <a href={props.entry.googleMapsLink}>VIew on Google Maps</a>
                </div>
                <h1>{props.entry.title}</h1>
                <span className="date">{props.entry.dates}</span>
                <p>{props.entry.text}</p>
            </div>
        </article>
    );
}
