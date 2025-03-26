const Input = ({ labelContent, inputType, placeholder }) => {
  return (
    <div className="relative mt-6">
      <input
        type={`${inputType}`}
        disabled={"true"}
        placeholder={`${placeholder}`}
        className="border border-gray-300 rounded-md px-3 py-1 w-full placeholder:text-sm placeholder:font-light"
      />
      <label className="absolute -top-3 left-3 bg-[#f7f8f9] pl-2 pr-5 text-sm font-light text-[#6e2dfc] block mb-1">
        {labelContent}
      </label>
    </div>
  );
};

export default Input;
