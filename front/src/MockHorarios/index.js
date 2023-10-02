import React, { useEffect, useState } from "react";
import axios from "axios";
import "./mock.css";

const MockHorarios = () => {
  const [mock, setMock] = useState([]);

  // useEffect(() => {
  //   try {
  //     axios.get("http://localhost:4000/getMock").then((res) => {
  //       setMock(res.data.mockHorarios);
  //       console.log(res.data);
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);
  // TODO: descomentar para ver mock en el front
  return (
    <div>
      {/* <pre className="font-mock">{JSON.stringify(mock, null, 2)}</pre> */}
    </div>
  );
};

export default MockHorarios;
