import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

export default function App() {
    const entryElements = data.map((entry) => (
        <Entry
            img={entry.img}
            title={entry.title}
            country={entry.country.toUpperCase()}
            googleMapsLink={entry.googleMapsLink}
            dates={entry.dates}
            text={entry.text}
        />
    ));

    return (
        <>
            <Header />
            <main>{entryElements}</main>
        </>
    );
}
