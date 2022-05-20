import React, { useState, useEffect } from 'react';

const AddItem = (props) => {
  const [itemState, setItemState] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setItemState((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch(`http://localhost:5000/api/items/setItem`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: itemState.description,
        description: itemState.name,
      }),
    }).catch(console.log(itemState.description));
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
              value={itemState.name || ''}
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
              value={itemState.description || ''}
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
