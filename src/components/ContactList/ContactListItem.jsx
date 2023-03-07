const ContactList = ({ contact: { name, number, id }, onClick }) => {
  return (
    <li>
      {name}: {number} <button onClick={() => onClick(id)}>Delete</button>
    </li>
  );
};

export default ContactList;
