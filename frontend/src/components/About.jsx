// import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';

const About = () => {
  const [state, setState] = useState({
    items: [],
  });

  // get all items
  const getPages = () => {
    fetch(`http://localhost:5000/api/items/getItems`)
      .then((response) => response.json())
      .then((responseJson) => {
        var itemsList = [];
        responseJson.forEach((element) => {
          itemsList.push(element);
        });

        setState({
          items: itemsList,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='about'>
      <div class='container'>
        <div class='row align-items-center my-5'>
          <div class='col-lg-5'>
            <h1 class='font-weight-light'>Manufacturers</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
