import "./Category.css";
import Input from "../../Input.jsx"

function Category({ handleChange }) {
  return (
    <div>
      <h5 className="sidebar-title">Categoria</h5>
        <div>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test" />
        <span className="checkmark"></span>Todos
      </label>

    <Input 
    handleChange={handleChange}
    value="blusa"
    title="Blusa"
    name="test"
    />
    <Input 
    handleChange={handleChange}
    value="camisa"
    title="Camisa"
    name="test"
    />
    <Input 
    handleChange={handleChange}
    value="pantalon"
    title="Pantalon"
    name="test"
    />
    </div>
    </div>
  );
}

export default Category;
