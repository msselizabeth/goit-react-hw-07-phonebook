
import css from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectVisibleContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/operations';


export const ContactList = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);

   useEffect(() => {
    if (contacts.length === 0) dispatch(fetchContacts());
  }, [dispatch, contacts.length]);

  return (
    <ul className={css.list}>
          {visibleContacts && visibleContacts.map(
              ({ id, name, phone }) => {
                  return (
                      <li key={id} className={css.item}>
                          <p className={css.text}>{name}: {phone}</p>
                          <button className={css.deleteBtn} type='button' onClick={() => dispatch(deleteContact(id))}>Удалить</button>
                      </li>
                  )
              }
          )}
    </ul>
  );
};

