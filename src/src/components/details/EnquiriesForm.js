import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export class EnquiriesForm extends React.Component {
  constructor(props) {
    super(props);

  
    this.state = {
      modifiedData: {
        name: '',
        description: '',
        categories: [],
      },
      allCategories: [],
      error: null,
    };
  }


  componentDidMount = async () => {
    try {
      const response = await axios.get('https://thawing-shelf-44327.herokuapp.com/enquiries');
      this.setState({ allCategories: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState(prev => ({
      ...prev,
      modifiedData: {
        ...prev.modifiedData,
        [name]: value,
      },
    }));
  };

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://thawing-shelf-44327.herokuapp.com/enquiries",
        this.state.modifiedData
      );
      console.log(response);
    } catch (error) {
      this.setState({ error });
    }
  };

 

  render() {
    const { error, modifiedData } = this.state;

    
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
      <div className="EnquiryForm">
        <h3>Booking</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Label>
            Name:
            <Form.Control
              type="text"
              name="name"
              onChange={this.handleInputChange}
              value={modifiedData.name}
            />  
          </Form.Label>
          <Form.Label>
            Email:
            <Form.Control
              type="Email" 
              name="email"
              onChange={this.handleInputChange}
              value={modifiedData.email}
            />
          </Form.Label>
          <Form.Label>
            Date:
            <Form.Control
              type="date" 
              name="date"
              onChange={this.handleInputChange}
              value={modifiedData.date}
            />
          </Form.Label>
        </Form>
        <Button type="submit">Submit</Button>
      </div>
    );
  }
}

export default EnquiriesForm;