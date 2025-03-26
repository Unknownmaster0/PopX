const Content = ({
  containerSytle,
  headingStyle,
  paraStyle,
  isPara,
  headingContent,
  paragraphContent,
}) => {
  return (
    <div className={`${containerSytle}`}>
      <h1 className={`${headingStyle}`}>{headingContent}</h1>
      <p className={`${paraStyle} ${isPara ? "block" : "hidden"}`}>
        {paragraphContent}
      </p>
    </div>
  );
};

export default Content;
