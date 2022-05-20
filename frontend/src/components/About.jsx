// import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';

const About = () => {
  const [state, setState] = useState({
    manufacturers: [],
  });

  const style = {
    width: '18rem',
    marginTop: '1%',
  };

  // get all manufacturers
  const getItems = async () => {
    fetch('http://localhost:5000/api/manufacturers/')
      .then((response) => response.json())
      .then((responseJson) => {
        var manufacturersList = [];
        responseJson.forEach((element) => {
          manufacturersList.push(element);
        });

        setState({
          manufacturers: manufacturersList,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteItem = async (e) => {
    e.preventDefault();
    const inputs = Object.values(e.target)
      .filter(
        (c) =>
          typeof c.tagName === 'string' && c.tagName.toLowerCase() === 'input'
      )
      .reduce((acc, curr) => ({ ...acc, [curr.name]: curr.value }), {});
    const manufacturer_id = inputs.manufacturer_id;

    fetch(`http://localhost:5000/api/manufacturers/${manufacturer_id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          alert('Successully Removed Item');
          window.location.href = '/';
        } else {
          alert('Error in Deleting Item');
          window.location.href = '/';
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // Ensure state change happens only once
  useEffect(() => {
    getItems();
  }, []);
  return (
    <>
      <div className='about'>
        <div class='container'>
          <div class='row align-items-center my-5'>
            <div class='col-lg-5'>
              <h1 class='font-weight-light'>Manufacturers</h1>
            </div>
          </div>
        </div>
      </div>
      {state.manufacturers.map((key, value) => {
        return (
          <center>
            <div class='card' style={style}>
              <div class='card-body'>
                <h5 class='card-title'>{key.name}</h5>
                <a href={'/EditManufacturer/' + key._id} class='card-link'>
                  Edit Manufacturer
                </a>
                <form onSubmit={handleDeleteItem} style={{}}>
                  <input type='hidden' value={key._id} name='manufacturer_id' />
                  <input
                    type='submit'
                    class='btn btn-primary'
                    value='Delete Manufactuer'
                  />
                </form>
              </div>
            </div>
          </center>
        );
      })}
    </>
  );
};

export default About;
