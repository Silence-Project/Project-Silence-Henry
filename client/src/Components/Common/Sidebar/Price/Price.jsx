import Input from "../../Input.jsx"
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h5 className="sidebar-title price-title">Precio</h5>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>Todos
        </label>

        <Input
          handleChange={handleChange}
          value={20000}
          title="$20000 - 250000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={25000}
          title="$25000 - $30000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={30000}
          title="$30000 - $35000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={35000}
          title="Mas de $35000"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
