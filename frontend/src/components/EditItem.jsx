import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import AddManufacturer from './AddManufacturer';

const EditItem = () => {
  const [inputs, setInputs] = useState({});
  const [manufacturers, setManufacturers] = useState([]);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getManufacturers();
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await fetch(
      `http://localhost:5000/api/items/updateItem/${id}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: inputs.item_name,
          description: inputs.description,
        }),
      }
    );
    if (response.status === 200) {
      alert('Item Updated');
      navigate('/');
    } else {
      response.text().then((result) => {
        alert(result);
        navigate('/');
      });
    }
  };

  const getManufacturers = async () => {
    let response = await fetch(`http://localhost:5000/api/manufacturers/`);
    const json = await response.json();
    setManufacturers(json);
  };

  const addManufacturer = async (event) => {
    const manufacturer_id = event.target.value;
    console.log(manufacturer_id);
    let response = await fetch(
      `http://localhost:5000/api/items/updateItem/${id}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          manufacturer: manufacturer_id,
        }),
      }
    );
    getManufacturers();
  };

  return (
    <>
      <center>
        <h3>Edit Item</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Item Name
            <input
              type='text'
              name='item_name'
              class='form-control'
              value={inputs.item_name || ''}
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
              value={inputs.description || ''}
              onChange={handleChange}
            />
          </label>
          <br />
          <input type='submit' class='btn btn-primary' />
        </form>
        <br />

        <input
          placeholder='Enter manufacturer name'
          onChange={(event) => setQuery(event.target.value)}
        />
        {manufacturers
          .filter((manufacturer) => {
            if (query === '') {
              return manufacturer;
            } else if (
              manufacturer.name.toLowerCase().includes(query.toLowerCase())
            ) {
              return manufacturer;
            }
          })
          .map((manufacturer, index) => (
            <div className='box' key={index}>
              <p>{manufacturer.name}</p>
              <button value={manufacturer._id} onClick={addManufacturer}>
                Add Manufacturer
              </button>
              <br />
            </div>
          ))}
      </center>
    </>
  );
};

export default EditItem;
