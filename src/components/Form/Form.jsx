// import { Component } from 'react';
// import css from 'components/Form/Form.module.css';
// import { nanoid } from 'nanoid';

// export class Form extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: '' };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }
//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit} className={css.form}>
//           <label>
//             <p className={css.paragraph}>Name:</p>
//             <input
//               className={css.input}
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </label>
//           <input type="submit" value="Add contact" className={css.inputSubmit}/>
//         </form>
//       </div>
//     );
//   }
// }
