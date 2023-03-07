import ContactListItem from 'components/ContactList/ContactListItem';

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(contact => {
      return <ContactListItem key={contact.id} contact={contact} />;
    })}
  </ul>
);

export default ContactList;
