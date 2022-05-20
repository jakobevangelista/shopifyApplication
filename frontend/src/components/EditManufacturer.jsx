import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EditManufacturer = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await fetch(
      `http://localhost:5000/api/manufacturers/${id}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: inputs.page_name,
        }),
      }
    );
    if (response.status === 200) {
      alert('Manufacturer Updated');
      //   navigate('/yourpages');
    } else {
      response.text().then((result) => {
        alert(result);
        // navigate('/editpage');
      });
    }
  };

  return (
    <>
      <center>
        <h3>Edit Manufacturer</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Manufacturer Name
            <input
              type='text'
              name='page_name'
              class='form-control'
              value={inputs.page_name || ''}
              onChange={handleChange}
            />
          </label>
          <br />
          <input type='submit' class='btn btn-primary' />
        </form>
        <br />
      </center>
    </>
  );
};

export default EditManufacturer;
