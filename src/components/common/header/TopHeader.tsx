import { Link } from "react-router-dom";

const pages = [
  {
    name: "blog",
    path: "/",
  },
  {
    name: "about us",
    path: "/about-us",
  },
  {
    name: "careers",
    path: "/",
  },
];

const TopHeader = () => {
  return (
    <div className="flex items-center justify-between border-b-2 py-3 ">
      <div className="flex items-center justify-center gap-5">
        <p className="text-lg font-semibold text-emerald-400">chat with us</p>
        <p>+20 000 000 000</p>
        <p>00000@gmail.com</p>
      </div>
      <nav>
        <ul className="flex items-center gap-5">
          {pages.map(({ name, path }, idx) => (
            <li
              key={idx}
              className="cursor-pointer text-xl font-semibold capitalize text-emerald-400 duration-300 hover:text-emerald-300"
            >
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TopHeader;
