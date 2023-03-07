import PropTypes from 'prop-types';

const ContactList = ( {name, number, id , onClick }) => {
  return (
    <li>
      {name}: {number} <button onClick={() => onClick(id)}>Delete</button>
    </li>
  );
};

export default ContactList;
ContactList.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}