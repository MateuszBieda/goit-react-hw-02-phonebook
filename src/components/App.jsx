import { Component } from 'react';
// import { Form } from './Form/Form.jsx';
// import { ContactsList } from './ContactsList/ContactsList.jsx';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };
  handleSubmit = () => {
    if (this.state.name !== '') {
      const contacts = [...this.state.contacts];
      const contact = {
        id: nanoid(),
        name: this.state.name,
      };
      contacts.push(contact);
      this.setState({
        contacts: contacts,
        name: '',
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <p>Name:</p>
        <form>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
          value={this.state.name}
        />
        </form>
        <button onClick={this.handleSubmit}>Add contacts</button>
        <ul>
          {this.state.contacts.map(item => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    );
  }

  // render() {
  //   const { name } = this.state;
  //   return (
  //     <div
  //       style={{
  //         height: '100vh',
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         flexDirection: 'column',
  //         fontSize: 40,
  //         color: '#010101',
  //       }}
  //     >
  //       <Form />
  //       <ContactsList />
  //     </div>
  //   );
  // }
}
export default App;
