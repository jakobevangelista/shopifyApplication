import React from 'react';

function Home() {
  return (
    <div className='home'>
      <div class='container'>
        <div class='row align-items-center my-5'>
          <div class='col-lg-5'>
            <h1 class='font-weight-light'>Items</h1>
            {state.items.map((key, value) => {
              return (
                <>
                  <center>
                    <div class='card' style={style}>
                      <div class='card-body'>
                        <h5 class='card-title'>{key.name}</h5>
                        <p class='card-text'>{key.description}</p>
                        {/* need to figure out how to link to edit page */}
                        <a href={'/editpage/' + key.page_id} class='card-link'>
                          Edit Page
                        </a>
                        <a
                          href={'/pageevents/' + key.page_id}
                          class='card-link'
                        >
                          Page Events
                        </a>
                        <form onSubmit={handleDeletePage} style={{}}>
                          <input
                            type='hidden'
                            value={key.page_id}
                            name='page_id'
                          />
                          <input
                            type='submit'
                            class='btn btn-primary'
                            value='Delete Page'
                          />
                        </form>
                      </div>
                    </div>
                  </center>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
