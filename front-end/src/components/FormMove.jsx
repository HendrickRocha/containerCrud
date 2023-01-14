import { useEffect } from "react";
import { useState } from "react";
import { postMove, putMove } from "../api/move";

import "../styles/Form.css";

const FormMove = (props) => {
  const [moveType, setMoveType] = useState("Embarque");
  const [containerNum, setContainerNum] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [hourStart, setHourStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [hourEnd, setHourEnd] = useState("");
  const [fill, setFill] = useState("");

  const { setForm, onEdit, setOnEdit } = props;

  useEffect(() => {
    if (onEdit) {
      setMoveType(onEdit.moveType);
      setContainerNum(onEdit.containerNum);
      setDateStart(onEdit.dateStart);
      setHourStart(onEdit.hourStart);
      setDateEnd(onEdit.dateEnd);
      setHourEnd(onEdit.hourEnd);
    }
  }, [onEdit]);

  const handleSubmit = (e) => {
    const newObj = {
      moveType,
      dateStart,
      hourStart,
      dateEnd,
      hourEnd,
      containerNum,
    };

    if (
      !moveType ||
      !containerNum ||
      !dateStart ||
      !hourStart ||
      !dateEnd ||
      !hourEnd
    ) {
      return setFill("Preencha todos os campos!");
    }

    if (onEdit) {
      putMove(onEdit.moveID, newObj);
    } else {
      postMove(newObj, setFill);
    }

    setOnEdit(null);
    setForm(false);
  };

  return (
    <div className="div">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>{onEdit ? "Editar Movimentação" : "Adicionar Movimentação"}</h2>
        <label htmlFor="containerNum">Número Container</label>
        <input
          className="campo"
          name="containerNum"
          id="containerNum"
          type="text"
          minLength={11}
          maxLength={11}
          value={containerNum}
          onChange={(e) => {
            setContainerNum(e.target.value);
          }}
          placeholder="Ex: TEST1234567"
        />

        <label htmlFor="moveType">Tipo</label>
        <select
          className="campo"
          name="moveType"
          id="moveType"
          value={moveType}
          onChange={(e) => {
            setMoveType(e.target.value);
          }}
        >
          <option value="Embarque">Embarque</option>
          <option value="Descarga">Descarga</option>
          <option value="Gate In">Gate In</option>
          <option value="Gate Out">Gate Out</option>
          <option value="Reposicionamento">Reposicionamento</option>
          <option value="Pesagem">Pesagem</option>
          <option value="Scanner">Scanner</option>
        </select>

        <label htmlFor="dateStart">Data de Inicio</label>
        <input
          className="campo"
          name="dateStart"
          id="dateStart"
          type="date"
          value={dateStart}
          onChange={(e) => {
            setDateStart(e.target.value);
          }}
          placeholder="DD/MM/AAAA"
        />

        <label htmlFor="hourStart">Hora de Inicio</label>
        <input
          className="campo"
          name="hourStart"
          id="hourStart"
          type="time"
          value={hourStart}
          onChange={(e) => {
            setHourStart(e.target.value);
          }}
          placeholder="HH:MM"
        />

        <label htmlFor="dateEnd">Data do Fim</label>
        <input
          className="campo"
          name="dateEnd"
          id="dateEnd"
          type="date"
          value={dateEnd}
          onChange={(e) => {
            setDateEnd(e.target.value);
          }}
          placeholder="DD/MM/AAAA"
        />

        <label htmlFor="hourEnd">Hora do Fim</label>
        <input
          className="campo"
          name="hourEnd"
          id="hourEnd"
          type="time"
          value={hourEnd}
          onChange={(e) => {
            setHourEnd(e.target.value);
          }}
          placeholder="HH:MM"
        />

        <p>{fill}</p>
        <div className="divButton">
          <button
            className="btn"
            onClick={() => {
              setOnEdit(null);
              setForm(false);
            }}
          >
            Cancelar
          </button>
          <button className="btn">{onEdit?'Editar':'Adicionar'}</button>
        </div>
      </form>
    </div>
  );
};

export default FormMove;
