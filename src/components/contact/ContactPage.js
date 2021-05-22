import ContactForm from "./ContactForm";
import Heading from "../layout/Heading";

export default function ContactPage() {
	return (
		<>
			<Heading content="Contact" />
			<h3>Are you wondering about allergies, roomsizes, or distance? Don't hesitate to ask us anything.</h3>
			<ContactForm />
		</>
	);
}