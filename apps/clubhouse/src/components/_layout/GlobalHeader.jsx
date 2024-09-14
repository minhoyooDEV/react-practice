import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg?react";
import Hamburger from "../../assets/hamburger.svg?react";
import avatarImage from "../../assets/avatar.png";

export const GlobalHeader = () => {
  return (
    <header className="mx-6 h-[50px]">
      <div className="flex justify-between items-center h-full">
        <div>
          <Link to="/menus">
            <Hamburger />
          </Link>
        </div>
        <div>
          <Link to="/home">
            <Logo />
          </Link>
        </div>
        <div>
          <Link to="/profile">
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
              <img src={avatarImage} alt="avatar" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};
