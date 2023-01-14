import { useEffect } from "react";
import { useState } from "react";
import { postContainer, putContainer } from "../api/container";

import "../styles/Form.css";

const FormContainer = (props) => {
  const [clientName, setClientName] = useState("");
  const [containerNum, setContainerNum] = useState("");
  const [containerType, setContainerType] = useState("20");
  const [containerStatus, setContainerStatus] = useState("Cheio");
  const [containerCat, setContainerCat] = useState("Importação");
  const [fill, setFill] = useState("");
  const { onEdit, setOnEdit, setForm } = props;

  useEffect(() => {
    if (onEdit) {
      setClientName(onEdit.clientName);
      setContainerNum(onEdit.containerNum);
      setContainerType(onEdit.containerType);
      setContainerStatus(onEdit.containerStatus);
      setContainerCat(onEdit.containerCat);
    }
  }, [onEdit]);

  const handleSubmit = (e) => {
    const newObj = {
      clientName,
      containerNum,
      containerType,
      containerStatus,
      containerCat,
    };

    if (
      !clientName ||
      !containerNum ||
      !containerType ||
      !containerStatus ||
      !containerCat
    ) {
      return setFill("Preencha todos os campos!");
    }

    if (onEdit) {
      putContainer(onEdit.containerID, newObj);
    } else {
      postContainer(newObj);
    }

    setOnEdit(null);
    setForm(false);
  };

  return (
    <div className="div">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>{onEdit ? "Editar Movimentação" : "Adicionar Movimentação"}</h2>
        <label htmlFor="clientName">Cliente</label>
        <input
          className="campo"
          name="clientName"
          id="clientName"
          type="text"
          value={clientName}
          onChange={(e) => {
            setClientName(e.target.value);
          }}
          placeholder="Nome do Cliente"
        />

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

        <label htmlFor="containerType">Tipo</label>
        <select
          className="campo"
          name="containerType"
          id="containerType"
          value={containerType}
          onChange={(e) => {
            setContainerType(e.target.value);
          }}
        >
          <option value="20">20</option>
          <option value="40">40</option>
        </select>

        <label htmlFor="containerStatus">Status</label>
        <select
          className="campo"
          name="containerStatus"
          id="containerStatus"
          value={containerStatus}
          onChange={(e) => {
            setContainerStatus(e.target.value);
          }}
        >
          <option value="Cheio">Cheio</option>
          <option value="Vazio">Vazio</option>
        </select>

        <label htmlFor="containerCat">Categoria</label>
        <select
          className="campo"
          name="containerCat"
          id="containerCat"
          value={containerCat}
          onChange={(e) => {
            setContainerCat(e.target.value);
          }}
        >
          <option value="Importação">Importação</option>
          <option value="Exportação">Exportação</option>
        </select>
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
          <button className="btn">{onEdit ? "Editar" : "Adicionar"}</button>
        </div>
      </form>
    </div>
  );
};

export default FormContainer;
