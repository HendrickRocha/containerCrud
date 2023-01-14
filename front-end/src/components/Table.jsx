
import { changeThead, changeTbody } from "../api/script";

import "../styles/Table.css";

const Table = (props) => {
  const { setForm, setOnEdit, page, item} = props;

  const handleEdit = (item) => {
    setForm(true);
    setOnEdit(item);
  };

  return (
    <div className="div">
      <table className="table">
        <thead className="thead">{changeThead(page)}</thead>
        <tbody>{changeTbody(page, item, handleEdit)}</tbody>
      </table>
    </div>
  );
};

export default Table;
