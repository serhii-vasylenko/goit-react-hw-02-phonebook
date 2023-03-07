import ContactListItem from 'components/ContactList/ContactListItem';

const ContactList = ({ contacts, onClick }) => (
  <ul>
    {contacts.map(contact => {
      return <ContactListItem key={contact.id} contact={contact} onClick={onClick}/>;
    })}
  </ul>
);

export default ContactList;
