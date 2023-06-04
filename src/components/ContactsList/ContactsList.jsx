import { nanoid } from 'nanoid';
import css from './ContactsList.module.css'
export const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.list}>
    {contacts.map(({ id = nanoid(), name, number }) => (
      <li className={css.list_item} key={id}>
        <p>
          {name}:<span> </span>
          {number}
        </p>
        <button className={css.button_delete} type="submit" onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);
