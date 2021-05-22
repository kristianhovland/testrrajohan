import Heading from "../layout/Heading";
import AdminAdd from "./AdminAdd";
import AdminEnquiries from "./AdminEnquiries";
import AdminList from './AdminList';



export default function AdminPage() {
	return (
		<>
			<Heading content="Admin Dashboard" />
			
			<h3>New Questions</h3>
			<AdminList />
			<h3>New Enquiries</h3>
			<AdminEnquiries />
			<h3>Add new accomodation</h3>
			<AdminAdd />
			
		</>
	);
}