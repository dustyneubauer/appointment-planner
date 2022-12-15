import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type='text' value={name} />
      </label>
      <label>
        Phone Number: 
        <input type='tel' value={phone}/>
      </label>
      <label>
        Email:
        <input type='email' value={email}/>
      </label>
      <input type='submit' value='Submit'/>
    </form>
  );
};
