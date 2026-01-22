import { Outlet } from "react-router-dom";

function MainLayout2()
{
  return(<>
      <nav className="relative bg-gray-300">
          welcome in our shop!
      </nav>
 <Outlet />
 </>
  );
}
export default MainLayout2;