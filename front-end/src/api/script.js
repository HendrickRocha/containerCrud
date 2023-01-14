import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import { deleteContainer } from "../api/container";
import { deleteMove } from "../api/move";

export const changeThead = (page) => {
  switch (page) {
    case "container":
      return (
        <tr>
          <td>Cliente</td>
          <td>Número Container</td>
          <td>Tipo</td>
          <td>Status</td>
          <td>Categoria</td>
          <td>Editar</td>
          <td>Excluir</td>
        </tr>
      );
    case "move":
      return (
        <tr>
          <td>Número Container</td>
          <td>Tipo</td>
          <td>Data Inicio</td>
          <td>Hora Inicio</td>
          <td>Data Fim</td>
          <td>Hora Fim</td>
          <td>Editar</td>
          <td>Excluir</td>
        </tr>
      );
    case "report":
      return (
        <tr>
          <td>Cliente</td>
          <td>Número Container</td>
          <td>Tipo Container</td>
          <td>Status</td>
          <td>Categoria</td>
          <td>Tipo Movimetação</td>
          <td>Data Inicio</td>
          <td>Hora Inicio</td>
          <td>Data Fim</td>
          <td>Hora Fim</td>
        </tr>
      );
    default:
      console.log("erro no switch case tHead");
  }
};

export const changeTbody = (page, item, handleEdit) => {
  switch (page) {
    case "container":
      return item.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.clientName}</td>
            <td>{item.containerNum}</td>
            <td>{item.containerType}</td>
            <td>{item.containerStatus}</td>
            <td>{item.containerCat}</td>
            <td>
              <FaRegEdit className="edit" onClick={() => handleEdit(item)} />
            </td>
            <td>
              <FaTrashAlt
                className="trash"
                onClick={() => {
                  deleteContainer(item.containerID);
                }}
              />
            </td>
          </tr>
        );
      });
    case "move":
      return item.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.containerNum}</td>
            <td>{item.moveType}</td>
            <td>{item.dateStart}</td>
            <td>{item.hourStart}</td>
            <td>{item.dateEnd}</td>
            <td>{item.hourEnd}</td>
            <td>
              <FaRegEdit className="edit" onClick={() => handleEdit(item)} />
            </td>
            <td>
              <FaTrashAlt
                className="trash"
                onClick={() => {
                  deleteMove(item.moveID);
                }}
              />
            </td>
          </tr>
        );
      });
    case "report":
      return item.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.clientName}</td>
            <td>{item.containerNum}</td>
            <td>{item.containerType}</td>
            <td>{item.containerStatus}</td>
            <td>{item.containerCat}</td>
            <td>{item.moveType}</td>
            <td>{item.dateStart}</td>
            <td>{item.hourStart}</td>
            <td>{item.dateEnd}</td>
            <td>{item.hourEnd}</td>
          </tr>
        );
      });
    default:
      console.log("erro no switch case tBody");
  }
};
