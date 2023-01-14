import { Link } from "react-router-dom";

import '../styles/Header.css'

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Container</Link>
        </li>
        <li>
          <Link to={"/move"}>Movimentações</Link>
        </li>
        <li>
          <Link to={"/report"}>Relatório</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
