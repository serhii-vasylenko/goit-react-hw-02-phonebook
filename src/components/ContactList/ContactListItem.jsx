const ContactList = ({ contact: { name, number } }) => {
  return (
    <li>
      {name}: {number}
    </li>
  );
};

export default ContactList;
