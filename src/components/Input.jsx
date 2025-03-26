const Input = ({ labelContent, inputType, placeholder }) => {
  return (
    <>
      <label className="text-sm md:text-base font-light text-purple-600 block mb-1">
        {labelContent}
      </label>
      <input
        type={`${inputType}`}
        disabled={"true"}
        placeholder={`${placeholder}`}
        className="border border-gray-300 rounded-md px-3 py-1 w-full placeholder:text-sm placeholder:font-light"
      />
    </>
  );
};

export default Input;
