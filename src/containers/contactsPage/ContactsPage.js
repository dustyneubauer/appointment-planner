import React, { useState, useEffect } from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';


export const ContactsPage = ({ updateContacts, contacts }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
const [duplicate, setDuplicate] = useState(false);

const clearState = () => {
  setName('');
  setPhone('');
  setEmail('');
};

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('form data --> ', name, phone, email)
    console.log('duplicate --> ', duplicate)
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicate) {
      updateContacts(name, phone, email);
      clearState();
    }

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
useEffect((name)=> {
for (let i=0; i<contacts.length; i ++ ){
  if (contacts.name === name) {
    setDuplicate(true)
  } else{
    setDuplicate(false)
  }
};

})

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
