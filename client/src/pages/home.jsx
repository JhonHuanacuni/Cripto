import Navigation from "../components/Navigation";
import Features from "../components/Features";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Barra de navegación */}
      <Navigation />

      {/* Contenido Principal */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center px-6 max-w-2xl w-full mt-24"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
          Bienvenido a nuestra criptomoneda
        </h1>
        <p className="text-lg text-gray-300">
          Invierte y transfiere con total seguridad. Compra, vende y almacena tus criptos fácilmente.
        </p>
      </motion.div>

      {/* Sección de Funcionalidades */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full max-w-6xl px-4 mt-16"
      >
        <Features />
      </motion.div>

      {/* Espaciado Inferior */}
      <div className="h-32"></div>
    </div>
  );
}
