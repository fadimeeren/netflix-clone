import { Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-10 flex justify-between items-center backdrop-blur-sm bg-black/30 px-5 md:px-10 lg:px-lg:px-15 xl:px-20 py-4 border border-white/10 shadow-lg rounded-2xl">
      <Link
        to="/"
        className="transition-transform duration-300 hover:scale-105"
      >
        <img src="/logo.svg" className="max-w-[150px]" />
      </Link>

      <Link
        to="/watch-list"
        className="flex gap-3 items-center hover:text-white transition-all duration-300 px-4 py-2"
      >
        <div>
          <Bookmark />
        </div>
        İzleme Listesi
      </Link>
    </header>
  );
};

export default Header;
