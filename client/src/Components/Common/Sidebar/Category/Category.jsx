import "./Category.css";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Categoria</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>Todos
        </label>

        <select onChange={handleChange} name="test">
          <option value="blusa">Blusa</option>
          <option value="camisa">Camisa</option>
          <option value="pantalon">Pantalon</option>
        </select>
      </div>
    </div>
  );
}

export default Category;
