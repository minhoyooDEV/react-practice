import { Link } from "react-router-dom";
import { routes } from "../router";

const MenusPage = () => {
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {routes.map((route) => (
          <li className="text-xl hover:underline" key={route.path}>
            <Link to={route.path}>{route.path}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenusPage;
