import ContactForm from "./ContactForm";
import Heading from "../layout/Subheading";
import Subheading from "../layout/Heading";

export default function ContactPage() {
	return (
		<>
			<Heading content="Contact" />
			<Subheading content="Ask us anything" />
			<ContactForm />
		</>
	);
}