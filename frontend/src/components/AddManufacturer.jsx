import React, { useState, useEffect } from 'react';

const AddManufacturer = (props) => {
  const [manufacturerState, setManufacturerState] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setManufacturerState((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch(`http://localhost:5000/api/manufacturers/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: manufacturerState.name,
      }),
    }).catch(console.log(manufacturerState.name));
  };
  return (
    <>
      <center>
        <h3>Create Manufacturer</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Manufacturer Name
            <input
              type='text'
              name='name'
              class='form-control'
              value={manufacturerState.name || ''}
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

export default AddManufacturer;
