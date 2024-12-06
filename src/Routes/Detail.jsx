import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [char, setChar] = useState({});
  const params = useParams();
  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;

  useEffect(() => {
    axios(url).then((res) => {
      setChar(res.data);
    });
  }, []);
  return (
    <>
      <h1>Detail Dentist id </h1>
      <div>
        <h4>Name: {char.name}</h4>
        <h4>User Name: {char.username}</h4>
        <h4>Email: {char.email}</h4>
        <h4>Phone: {char.phone}</h4>
        <h4>Website: {char.website}</h4>
      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;
