import { Link } from "react-router-dom";

import { useState } from "react";

export default function Navigation() {
  const [hovered, setHovered] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full flex justify-end p-5 bg-transparent">
      <button
        className="px-6 py-2 text-lg font-semibold bg-blue-600 hover:bg-blue-500 transition rounded-full shadow-lg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered ? "¡Únete ahora!" : "Unirse"}
      </button>
    </nav>
  );
}



/* export function Navigation() {
  return (
    <div className="flex justify-between py-3 items-center">
      <Link to="/tasks">
        <h1 className="font-bold text-3xl mb-4">Tasks App</h1>
      </Link>
      <button className="bg-indigo-500 p-3 rounded-lg">
        <Link to="/tasks-create">Create Task</Link>
      </button>
    </div>
  );
} */