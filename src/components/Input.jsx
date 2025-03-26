const Input = ({
  labelContent,
  placeholder,
  value = "",
  type = "text",
  IsMandatory = false,
}) => {
  return (
    <div className="relative mt-6">
      <input
        type={type}
        disabled={"true"}
        placeholder={placeholder}
        value={value}
        className="border border-gray-300 rounded-md px-3 py-2 w-full placeholder:text-sm placeholder:font-light font-[350] text-sm"
      />
      <label className="absolute -top-3 left-3 bg-[#f7f8f9] pl-2 pr-5 text-[13px] font-light text-[#6e2dfc] block mb-1">
        {labelContent}
        {IsMandatory ? <span className="text-red-500 ml-1">*</span> : null}
      </label>
    </div>
  );
};

export default Input;
