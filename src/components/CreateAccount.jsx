import Button from "./Button";
import Input from "./Input";

const CreateAccount = () => {
  return (
    <div className="px-5 md:px-10 py-10 md:py-16 bg-[#f7f8f9] min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-medium">Create your</h1>
        <h1 className="text-3xl font-medium">PopX account</h1>
      </div>

      <form action={""} className="">
        <Input placeholder={"Marry Doe"} labelContent={"Full Name"} />
        <Input placeholder={"Marry Doe"} labelContent={"Phone number"} />
        <Input placeholder={"Marry Doe"} labelContent={"Email address"} />
        <Input placeholder={"Marry Doe"} labelContent={"Password"} />
        <Input placeholder={"Marry Doe"} labelContent={"Company Name"} />

        <Button
          content={"Create Account"}
          className={
            "border bg-[#6c25ff] text-[#efe7ff] py-3 md:py-4 rounded-md text-center"
          }
        />
      </form>
    </div>
  );
};

export default CreateAccount;
