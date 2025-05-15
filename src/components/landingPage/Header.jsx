import { Link } from "react-router-dom";
import MyLogo from "../../assets/heroImg/Mylogo.png";

export default function Header() {
  return (
    <header className="bg-bgColor shadow-md py-3 px-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="hidden md:flex items-center h-14">
          <img src={MyLogo} alt="My Logo" className="h-14 mr-2" />
          <h1 className="text-xl">Your Reviewer</h1>
        </div>

        {/* Buttons login/signup */}
        <div className="ml-auto flex gap-4 items-center">
          <Link to="/SignUp">
            <button className="lg:text-lg font-medium"></button>
            Sign up
          </Link>
          <Link to="/Login">
            <button className="lg:text-lg bg-buttonBg px-3 py-2 rounded-md text-buttonText hover:bg-bgButtonHover text-sm font-medium">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
