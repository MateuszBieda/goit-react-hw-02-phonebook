import { Component } from 'react';
// import { Form } from './Form/Form.jsx';
// import { ContactsList } from './ContactsList/ContactsList.jsx';
import { nanoid } from 'nanoid';


const INITIAL_STATE = {
  name: '',
  number: '',
};

export class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = e => {
    // const value = e.target.value;
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    
    e.preventDefault();

    
      const contacts = [...this.state.contacts];
      const contact = {
        id: nanoid(),
        name: this.state.name,
        number: this.state.number,
      };
      contacts.push(contact);
      this.setState({
        contacts: contacts,
        name: '',
        number: '',
      });
    
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <p>Name:</p>
        <form >
          <label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              value={name}
            />
          </label>
          <label>
            <p>Number:</p>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
              value={number}
            />
          </label>
          <button onClick={this.handleSubmit} type="submit">Add contacts</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                {name}:<span> </span> 
                {number}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
