const Button = ({ className, onClickHandler, content }) => {
  return (
    <button className={className} onClick={onClickHandler}>
      {content}
    </button>
  );
};

export default Button;
