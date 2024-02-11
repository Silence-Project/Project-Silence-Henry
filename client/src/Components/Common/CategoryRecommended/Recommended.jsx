import PropTypes from 'prop-types';
import Button from "../../Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Categorias</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="Todos los Productos" />
          <Button onClickHandler={handleClick} value="Blusa" title="Blusa" />
          <Button onClickHandler={handleClick} value="Camisa" title="Camisas" />
          <Button onClickHandler={handleClick} value="Playeras" title="PLayeras" />
          <Button onClickHandler={handleClick} value="Coleccion" title="Coleccion" />
        </div>
      </div>
    </>
  );
};

Recommended.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Recommended;
