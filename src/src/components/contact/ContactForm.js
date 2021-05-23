import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class ContactForm extends React.Component {
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
      const response = await axios.get('https://thawing-shelf-44327.herokuapp.com/contactmsgs');
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
        "https://thawing-shelf-44327.herokuapp.com/contactmsgs",
        this.state.modifiedData
      );
      console.log(response);
    } catch (error) {
      this.setState({ error });
    }
  };

  renderCheckbox = category => {
    const {
      modifiedData: { categories },
    } = this.state;
    const isChecked = categories.includes(category.id);
    const handleChange = () => {
      if (!categories.includes(category.id)) {
        this.handleInputChange({
          target: { name: 'categories', value: categories.concat(category.id) },
        });
      } else {
        this.handleInputChange({
          target: {
            name: 'categories',
            value: categories.filter(v => v !== category.id),
          },
        });
      }
    };

    return (
      <div key={category.id}>
        <label htmlFor={category.id}>{category.name}</label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          name="categories"
          id={category.id}
        />
      </div>
    );
  };

  render() {
    const { error, modifiedData } = this.state;

    
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
      <Container className="ContactContainer">
        <Form onSubmit={this.handleSubmit}>
          <Form.Label>
            Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              onChange={this.handleInputChange}
              value={modifiedData.name}
            />
          <Form.Label>
            Email: </Form.Label>
            <Form.Control
              type="Email" 
              name="email"
              onChange={this.handleInputChange}
              value={modifiedData.email}
            />
          <Form.Label>
            Message:</Form.Label>
            <Form.Control  as="textarea" rows={5}
              name="message"
              placeholder="Type your message here."
              onChange={this.handleInputChange}
              value={modifiedData.message}
            />
            <div className="centerButton">
             <Button type="submit">Submit</Button>
            </div>
        </Form>
        </Container>
    );
  }
}

export default ContactForm;