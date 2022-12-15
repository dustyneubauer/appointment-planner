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

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handlePhone = (e) => {
    setPhone(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Phone Number: 
        <input type='tel' value={phone} onChange={e => setPhone(e.target.value)}/>
      </label>
      <label>
        Email:
        <input type='email' value={email} onChange={e => setEmail(e.target.value) }/>
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
};
