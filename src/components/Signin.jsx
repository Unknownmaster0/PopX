import Input from "./Input";

const Signin = () => {
  return (
    <div className="px-5 md:px-10 py-10 md:py-16 bg-[#f7f8f9] min-h-screen">
      {/* content */}
      <div className="mb-8">
        <h1 className="text-3xl font-medium">Signin to your</h1>
        <h1 className="text-3xl font-medium">PopX account</h1>
        <p className="text-gray-500 mt-2 text-pretty">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
      {/* form */}
      <form action="/user" className="space-y-4">
        <div>
          <Input
            labelContent={"Email"}
            placeholder={"Enter email address"}
            inputType={"email"}
          />
        </div>
        <div>
          <Input
            labelContent={"Password"}
            placeholder={"Enter password"}
            inputType={"password"}
          />
        </div>
      </form>
    </div>
  );
};

export default Signin;
