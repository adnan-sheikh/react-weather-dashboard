import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div className="flex-row h-screen">
      <header className="bg-slate-500 py-4 px-2 text-white">
        Weather Dashboard
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
