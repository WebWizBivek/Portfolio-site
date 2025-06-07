import { RxGithubLogo } from "react-icons/rx";

const Header = () => {
  return (
    <div className="bg-white h-[10vh]  p-4 flex justify-between items-center">
      <div className="font-bold text-xl flex items-center justify-center gap-2">
        {" "}
        <RxGithubLogo />
        WebWizBivek
      </div>

      <div>
        <button className="bg-black text-white rounded-3xl hover:bg-white hover:text-black hover:border-black border-2 transition-all  px-3 py-2 font-semibold">
          {" "}
          <a href="#about" className="text-white">
            Say Hello{" "}
          </a>{" "}
        </button>
      </div>
    </div>
  );
};

export default Header;
