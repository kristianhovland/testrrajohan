import Heading from "../layout/Heading";
import AccomodationList from "./AccomodationList"

export default function AccomodationPage() {
    return (
        <>
            <Heading content="Accomodations" />
            <h3>Find the perfect accomodation for your Bergen trip.</h3>
            <AccomodationList />
        </>
    );
}