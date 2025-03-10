import { Wallet, ShoppingCart, TrendingUp, Shield, Send, Gift } from "lucide-react";

const features = [
  { title: "Cartera Digital", description: "Guarda y gestiona tus criptomonedas de forma segura.", icon: <Wallet size={40} /> },
  { title: "Compra de Criptomonedas", description: "Adquiere criptos con tarjeta o transferencia bancaria.", icon: <ShoppingCart size={40} /> },
  { title: "Venta de Criptomonedas", description: "Convierte tus activos en dinero fiat rápidamente.", icon: <TrendingUp size={40} /> },
  { title: "Staking de Criptos", description: "Gana recompensas manteniendo tus monedas en staking.", icon: <Gift size={40} /> },
  { title: "Transferencias Globales", description: "Envía criptos a cualquier parte del mundo sin intermediarios.", icon: <Send size={40} /> },
  { title: "Seguridad Avanzada", description: "Protección con autenticación multifactor y cifrado.", icon: <Shield size={40} /> },
];

export default function Features() {
  return (
    <section className="w-full flex flex-col items-center py-20 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-10">Descubre nuestras funcionalidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl px-6">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center p-6 bg-gray-800 rounded-2xl shadow-lg transition-transform hover:scale-105">
            <div className="text-blue-400 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-300 text-center mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
