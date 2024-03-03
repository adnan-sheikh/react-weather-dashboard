import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

export function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
}
