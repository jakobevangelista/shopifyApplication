import React, { useState, useEffect } from 'react';

const AddItem = (props) => {
  const [pagesState, setPagesState] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPagesState((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch(`http://localhost:5000/api/items/setItem`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: pagesState.description,
        description: pagesState.name,
      }),
    }).catch(console.log(pagesState.description));
  };
  return (
    <>
      <center>
        <h3>Create Item</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Item Name
            <input
              type='text'
              name='name'
              class='form-control'
              value={pagesState.name || ''}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Description
            <input
              type='text'
              name='description'
              class='form-control'
              value={pagesState.description || ''}
              onChange={handleChange}
            />
          </label>
          <br />
          <input type='submit' class='btn btn-primary' />
        </form>
      </center>
    </>
  );
};

export default AddItem;
