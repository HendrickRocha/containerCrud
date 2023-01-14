import { useEffect } from "react";
import { useState } from "react";

import Header from "../components/Header";
import Table from "../components/Table";
import FormMove from "../components/FormMove";
import { getMove } from "../api/move";

const Move = () => {
  const [move, setMove] = useState([]);
  const [form, setForm] = useState(false);
  const [onEdit, setOnEdit] = useState(null);

  useEffect(()=>{
    getMove(setMove)
  },[move])

  return (
    <div>
      <Header />
      {form ? (
        <FormMove
          onEdit={onEdit}
          setOnEdit={setOnEdit}
          setForm={setForm}
        />
      ) : (
        <>
          <button className="btn" onClick={() => setForm(true)}>
            Adicionar Movimentação
          </button>
          <Table
            item={move}
            setOnEdit={setOnEdit}
            setForm={setForm}
            page={'move'}
          />
        </>
      )}
    </div>
  );
};

export default Move;
