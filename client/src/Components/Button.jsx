const Button = ({ onClickHandler, value, title }) => {
  const handleClick = () => {
    if (onClickHandler) {
      onClickHandler(value);
    }
  };

  return (
    <button onClick={handleClick} className="btns">
      {title}
    </button>
  );
};

export default Button;
