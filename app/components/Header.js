import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="bg-white border-b-2 border-solid border-b-[#e04b5f] shadow-lg w-full py-4 px-8">
        <div className="flex items-center justify-between w-full">
          <input
            type="text"
            placeholder="Search… Users, Events, Categories"
            className="form-control w-96"
          />
          <div className="flex items-center gap-5">
            <Image
              src="/info.png"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              alt=""
            />
            <Image
              src="/notification.png"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
