import React, { useState, useEffect } from 'react';

const Home = () => {
  const [state, setState] = useState({
    items: [],
  });

  const style = {
    width: '18rem',
    marginTop: '1%',
  };

  // get all items
  const getItems = async () => {
    fetch('http://localhost:5000/api/items/getItems')
      .then((response) => response.json())
      .then((responseJson) => {
        var itemsList = [];
        responseJson.forEach((element) => {
          itemsList.push(element);
        });

        setState({
          items: itemsList,
        });
        console.log(itemsList);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // delete item
  const handleDeleteItem = async (e) => {
    e.preventDefault();
    const inputs = Object.values(e.target)
      .filter(
        (c) =>
          typeof c.tagName === 'string' && c.tagName.toLowerCase() === 'input'
      )
      .reduce((acc, curr) => ({ ...acc, [curr.name]: curr.value }), {});
    const item_id = inputs.item_id;

    fetch(`http://localhost:5000/api/items/deleteItem/${item_id}`, {
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
      <div className='home'>
        <div class='container'>
          <div class='row align-items-center my-5'>
            <div class='col-lg-5'>
              <h1 class='font-weight-light'>Items</h1>
            </div>
          </div>
        </div>
      </div>
      {state.items.map((key, value) => {
        return (
          <center>
            <div class='card' style={style}>
              <div class='card-body'>
                <h5 class='card-title'>{key.name}</h5>
                <p class='card-text'>{key.description}</p>
                <p class='card-text'>Manufacturer ID: {key.manufacturer}</p>
                <a href={'/EditItem/' + key._id} class='card-link'>
                  Edit Item
                </a>
                <form onSubmit={handleDeleteItem} style={{}}>
                  <input type='hidden' value={key._id} name='item_id' />
                  <input
                    type='submit'
                    class='btn btn-primary'
                    value='Delete Item'
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

export default Home;
