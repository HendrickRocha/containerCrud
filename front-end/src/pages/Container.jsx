import { useEffect } from "react";
import { useState } from "react";
import { getContainer } from "../api/container";

import Header from "../components/Header";
import Table from "../components/Table";
import FormContainer from "../components/FormContainer";

const Container = () => {
  const [container, setContainer] = useState([]);
  const [form, setForm] = useState(false);
  const [onEdit, setOnEdit] = useState(null);

  useEffect(() => {
    getContainer(setContainer);
  }, [container]);

  return (
    <div>
      <Header />
      {form ? (
        <FormContainer
          onEdit={onEdit}
          setOnEdit={setOnEdit}
          setForm={setForm}
        />
      ) : (
        <>
          <button className="btn" onClick={() => setForm(true)}>
            Adicionar Container
          </button>
          <Table
            item={container}
            setOnEdit={setOnEdit}
            setForm={setForm}
            page={"container"}
          />
        </>
      )}
    </div>
  );
};

export default Container;
