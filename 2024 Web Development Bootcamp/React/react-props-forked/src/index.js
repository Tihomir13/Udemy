import React from "react";
import ReactDOM from "react-dom";

function Card(props) { 
  return (
  <div> 
    <h2>{props.name}</h2>
    <img 
      src={props.img}
      alt="avatar_image"
    />
    <p>{props.tel}</p>
    <p>{props.email}</p>
  </div>
  );
};

ReactDOM.render(
  <div>
    <Card 
      name = "Megan Fox" 
      img="https://tse4.mm.bing.net/th?id=OIP.VFu-1IMSKV--hAPs1ckmnQHaJj&pid=Api&P=0&w=300&h=300" 
      tel="+123 456 789" 
      email="MeganFox@gmail.com"
    />

    <Card 
      name = "Lisa Manobal" 
      img="https://tse4.mm.bing.net/th?id=OIP.whSJWoFAmXAVHwuWzFVTPQHaJQ&pid=Api&P=0&w=300&h=300"
      tel = "+359 888 888"
      email = "LisaManobal@gmail.com"
    />

    <Card 
      name = "Dua Lipa" 
      img="https://tse1.mm.bing.net/th?id=OIP.LIaLQPVtq-7O9TZ5k8CFZwHaNK&pid=Api&P=0&w=300&h=300"
      tel = "+359 777 777"
      email = "DuaLipa@gmail.com"
    />

  </div>,
  document.getElementById("root"));
