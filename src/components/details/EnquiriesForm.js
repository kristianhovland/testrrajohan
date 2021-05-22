import React from 'react';
import axios from 'axios';


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
    const { error, allCategories, modifiedData } = this.state;

    
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
      <div className="App">
              <h3>Check-in!</h3>
        <form onSubmit={this.handleSubmit}>
          <br />
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={this.handleInputChange}
              value={modifiedData.name}
            />  
          </label>
          <label>
            Email:
            <input
              type="Email" 
              name="email"
              onChange={this.handleInputChange}
              value={modifiedData.email}
            />
          </label>
          <label>
            Date:
            <input
              type="date" 
              name="date"
              onChange={this.handleInputChange}
              value={modifiedData.date}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default EnquiriesForm;