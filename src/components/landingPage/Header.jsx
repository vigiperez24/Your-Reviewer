import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-bgColor shadow-md py-3 px-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="hidden sm:block text-lg font-bold">Your Reviewer</h1>

        {/* Buttons login/signup */}
        <div className="ml-auto flex gap-4">
          <button className="lg:text-lg font-medium">
            <Link to="/register">Sign up</Link>
          </button>
          <button className="lg:text-lg bg-buttonBg px-3 py-2 rounded-md text-buttonText hover:bg-bgButtonHover text-sm font-medium">
          <Link to="/Login">Log In</Link>
          </button>
        </div>
      </div>
    </header>
  );
}