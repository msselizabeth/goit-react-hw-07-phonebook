
import css from './ContactForm.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';



export const ContactForm = ({onSubmit}) => {


    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;

    const isInContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isInContacts)
      return alert('This contact is already in your contacts.');

    dispatch(addContact({ name, phone }));
    form.reset();
  };


        return (
            <form onSubmit={handleSubmit}>
                <h2 className={css.nameTitle}>Name</h2>
                <input
                    className={css.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <h2 className={css.numberTitle}>Number</h2>
                <input
                    className={css.input}
                    type="tel"
                    name="phone"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <button type='submit' className={css.addButton}>Добавить контакт</button>

            </form>
        )
}