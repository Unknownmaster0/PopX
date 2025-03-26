import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const CreateAccount = () => {
  const [triggerButton, setTriggerButton] = useState(false);

  function HandleClick() {
    setTriggerButton(true);
    setTimeout(() => {
      setTriggerButton(false);
    }, 100);
  }

  return (
    <div
      className="px-5 md:px-10 py-10 md:py-16 bg-[#f7f8f9] min-h-screen"
      onClick={HandleClick}
    >
      <div className="mb-5">
        <h1 className="text-3xl font-medium">Create your</h1>
        <h1 className="text-3xl font-medium">PopX account</h1>
      </div>

      {/* form section for the create account */}
      <form className="mb-8">
        <Input
          placeholder={"Marry Doe"}
          labelContent={"Full Name"}
          value="Marry Doe"
          IsMandatory={true}
        />
        <Input
          placeholder={"Marry Doe"}
          labelContent={"Phone number"}
          value="Marry Doe"
          IsMandatory={true}
        />
        <Input
          placeholder={"Marry Doe"}
          labelContent={"Email address"}
          value="Marry Doe"
          IsMandatory={true}
        />
        <Input
          placeholder={"Marry Doe"}
          labelContent={"Password"}
          value="Marry Doe"
          IsMandatory={true}
        />
        <Input
          placeholder={"Marry Doe"}
          labelContent={"Company Name"}
          value="Marry Doe"
        />

        <div className="mt-5">
          <label className="font-[350]">
            Are you an Agency?<span className="text-red-500 ml-1">*</span>
          </label>
          <div className="space-x-5 font-[350]">
            <span>
              <input type="radio" checked /> Yes
            </span>
            <span>
              <input type="radio" disabled /> No
            </span>
          </div>
        </div>
      </form>

      <div className="flex h-1/2 items-end">
        <Button
          content={"Create Account"}
          className={`${
            triggerButton
              ? "w-full py-3 bg-blue-400 text-white rounded-md font-medium"
              : "w-full border bg-[#6c25ff] text-[#efe7ff] py-3 md:py-4 rounded-md text-center"
          }`}
        />
      </div>
    </div>
  );
};

export default CreateAccount;
