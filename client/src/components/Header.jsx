import { RxGithubLogo } from "react-icons/rx";

const Header = () => {
  return (
    <div className="bg-white h-[10vh]  p-4 flex justify-between items-center">
      <div className="font-bold text-xl flex items-center justify-center gap-2">
        {" "}
        <RxGithubLogo size={34} />
        WebWizBivek
      </div>

      <div>
        <button className="bg-white  rounded-3xl text-black hover:bg-black hover:text-white border-black border transition-all  px-3 py-2 font-semibold">
          {" "}
          <a href="#contact" className="text-black hover:text-white text-base">
            Say Hello{" "}
          </a>{" "}
        </button>
      </div>
    </div>
  );
};

export default Header;
