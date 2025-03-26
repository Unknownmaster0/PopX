import Button from "./Button";

const WelcomePage = () => {
  return (
    <div className="flex flex-col justify-end h-screen px-4 py-10 md:py-16 bg-[#f7f8f9]">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold">Welcome to PopX</h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Lorem ipsum dolor sit amet
        </p>
      </div>

      <div className="flex flex-col space-y-4">
        <Button
          className={
            "border bg-[#6c25ff] text-[#efe7ff] py-3 md:py-4 rounded-md text-center"
          }
          onClickHandler={() => alert("create btn is clicked")}
          content={"Create Account"}
        />
        <Button
          className={
            "bg-[#cebafb] text-[#31333e] py-3 md:py-4 rounded-md text-center"
          }
          onClickHandler={() => alert("login btn is clicked")}
          content={"Already Registered? Login"}
        />
      </div>
    </div>
  );
};

export default WelcomePage;
