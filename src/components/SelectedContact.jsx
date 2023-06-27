import { useState, useEffect } from "react";
import PropTypes from "prop-types";

SelectedContact.propTypes = {
  selectedContactId: PropTypes.number.isRequired,
  setSelectedContactId: PropTypes.func.isRequired,
};

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, [selectedContactId]);

  console.log(contact); // Check the fetched contact data in the console

  return (
    <div>
      {/* Display the contact information */}
      {contact && (
        <>
          <h2>Contact Details</h2>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
        </>
      )}

      {/* Add a button to go back to the contact list */}
      <button onClick={() => setSelectedContactId(null)}>Go Back</button>
    </div>
  );
}
