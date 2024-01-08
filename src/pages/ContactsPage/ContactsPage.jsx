import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';

const ContactsPage = () => {
  return (
    <>
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <p>Find contact by name</p>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};

export default ContactsPage;
