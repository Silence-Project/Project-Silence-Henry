import Price from './Price/Price.jsx';
import Category from './Category/Category.jsx';
import Size from './Size/Size.jsx';
import Color from './Color/Color.jsx';


import "./Sidebar.css";

const Sidebar = ( { setFilterTerm } ) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h3>FILTRO</h3>
        </div>
        <Category setFilterTerm={setFilterTerm}/>
        <Price setFilterTerm={setFilterTerm} />
        <Size setFilterTerm={setFilterTerm} />
        <Color setFilterTerm={setFilterTerm} />
      </section>
    </>
  );
};

export default Sidebar;
