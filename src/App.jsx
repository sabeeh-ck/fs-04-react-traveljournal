import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

export default function App() {
    const entryElements = data.map((entry) => <Entry key={entry.id} {...entry} />);

    return (
        <>
            <Header />
            <main>{entryElements}</main>
        </>
    );
}
