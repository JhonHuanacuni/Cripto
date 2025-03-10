import CandlestickChart from "../components/CandlestickChart";

export default function Wallet() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-center text-white mb-6">
        Estado del Mercado
      </h1>
      <CandlestickChart />
    </div>
  );
}
