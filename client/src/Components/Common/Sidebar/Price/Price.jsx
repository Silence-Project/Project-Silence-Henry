import Input from '../../Input';
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Precio</h2>

        <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test2" />
        <span className="checkmark"></span>Todos
      </label>

      <Input 
      handleChange={handleChange}
      value={20000}
      title="$0 - $50"
      name="test2"
      />
      <Input 
      handleChange={handleChange}
      value={25000}
      title="$50 - $100"
      name="test2"
      />
      <Input 
      handleChange={handleChange}
      value={30000}
      title="$100 - $150"
      name="test2"
      />
      <Input 
      handleChange={handleChange}
      value={35000}
      title="Over $150"
      name="test2"
      />

      </div>
    </>
  );
};

export default Price;
