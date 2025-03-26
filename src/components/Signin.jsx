import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

const Signin = () => {
  const navigate = useNavigate();
  const [triggerButton, setTriggerButton] = useState(false);

  function HandleClick() {
    setTriggerButton(true);
    setTimeout(() => {
      setTriggerButton(false);
    }, 200);
  }

  return (
    <div
      className="px-5 md:px-10 py-10 md:py-16 bg-[#f7f8f9] min-h-screen"
      onClick={HandleClick}
    >
      {/* content */}
      <div className="mb-8">
        <h1 className="text-3xl font-medium">Signin to your</h1>
        <h1 className="text-3xl font-medium">PopX account</h1>
        <p className="text-gray-500 mt-2 text-pretty">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
      {/* form */}
      <form className="space-y-4 mb-5">
        <div>
          <Input
            labelContent={"Email Address"}
            placeholder={"Enter email address"}
          />
        </div>
        <div>
          <Input labelContent={"Password"} placeholder={"Enter password"} />
        </div>
      </form>
      <Button
        content={"Login"}
        className={`${
          triggerButton
            ? "bg-[#9ac1f7] text-white"
            : "bg-[#cbcbcb] text-[#fbfbfb]"
        } w-full py-2 md:py-3 font-medium rounded-md`}
        onClickHandler={() => navigate("/account")}
      />
    </div>
  );
};

export default Signin;
