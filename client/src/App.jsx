import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import  Navigation  from "./components/Navigation";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home";
import Wallet from "./pages/Wallet";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/tasks-create" element={<TaskFormPage />} />
        <Route path="/tasks/:id" element={<TaskFormPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
      <Toaster/>
    </BrowserRouter>
  );
}

export default App;
