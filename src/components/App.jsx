
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import css from './App.module.css'
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "redux/selectors";



export const App = () => {
  
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
    return (
      <div className={css.appContainer}>
        <h1>PhoneBook</h1>
        <ContactForm/>
        <h2>Contacts:</h2>
        <Filter />
        {error && <p>{error.message }</p>}
        {isLoading ? <p>Loading...</p> :  <ContactList />}
    </div>
  );
};
