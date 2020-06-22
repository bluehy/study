import React from 'react';

// function Food(props){
//   /* JSX에서 지정한 props를 인자로 받아온다. */
//   console.log(props.fav)
//   return <h1>I like Potato</h1>;
// }

const placeILike = [
  {
    id: 1,
    name: "beach",
    image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80"
  },
  {
    id: 2,
    name: "cafe",
    image: "https://images.unsplash.com/photo-1541173109020-9c5d8a48e169?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=999&q=80"
  },
  {
    id: 3,
    name: "sweden",
    image: "https://images.unsplash.com/photo-1485123263479-f5ea30a2f92d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
  },
  {
    id: 4,
    name: "home",
    image: "https://images.unsplash.com/photo-1536349788264-1b816db3cc13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80"
  }
]/* dynamic component generation _ javascript_ map */


function Place({name , picture}){
  /* JSX에서 지정한 props를 인자로 받아오고, 그 안의 name값을 직접 인자로 적용하는 방법. */
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name} />
  </div>
}

function App() {
  return (
    <div>
      {placeILike.map(spot => <Place key={spot.id} name={spot.name} picture={spot.image} />)}
    </div>
  );
}

export default App;
