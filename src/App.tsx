import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Outlet />
    </div>
  );
}
