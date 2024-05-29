import { useState } from "react";
import {
  handleClickCol1,
  handleClickCol2,
  handleClickCol3,
} from "./components/MicroComps";

function Semaforo() {
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");

  return (
    <>
      <div className="container-fluid bg-light p-5">
        <div className="semaforo">
          <div
            className={`bg-danger circle ${color1 ? color1 : ""}`}
            onClick={() => handleClickCol1(setColor1, setColor2, setColor3)}
          ></div>
          <div
            className={`bg-warning circle ${color2 ? color2 : ""}`}
            onClick={() => handleClickCol2(setColor1, setColor2, setColor3)}
          ></div>
          <div
            className={`bg-success circle ${color3 ? color3 : ""}`}
            onClick={() => handleClickCol3(setColor1, setColor2, setColor3)}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Semaforo;
