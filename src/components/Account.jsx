import Image from "./Image";

const Account = () => {
  return (
    <>
      <h1 className="py-4 pl-4 text-lg font-normal">Account Setting</h1>
      <div className="bg-[#f7f8f9] min-h-screen flex flex-col">
        <div className="px-5 pt-6">
          <div className="flex space-x-10 mb-3">
            <Image />
            <div className="flex flex-col">
              <h3>Marry Doe</h3>
              <p className="font-light text-sm no-underline">Marry@Gmail.Com</p>
            </div>
          </div>

          <p className="pt-4 text-[#2b2c2e] font-light text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            distinctio saepe culpa quidem asperiores odio dolorum, incidunt
            voluptatibus placeat? Accusamus optio illum facere repudiandae atque
            quo alias cumque placeat voluptate!
          </p>
        </div>

        {/* for making the dashed border */}
        <div className="border-t border-b border-dashed border-gray-400 my-5 flex-1"></div>
      </div>
    </>
  );
};

export default Account;
