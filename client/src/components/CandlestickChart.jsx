import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const CandlestickChart = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // Crear el gráfico
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 400,
      layout: {
        background: { color: "#1e1e1e" },
        textColor: "#ffffff",
      },
      grid: {
        vertLines: { color: "#2c2c2c" },
        horzLines: { color: "#2c2c2c" },
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    });

    // Agregar serie de velas
    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderUpColor: "#26a69a",
      borderDownColor: "#ef5350",
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });

    // Simular datos de velas con tendencia y variaciones
    const generateCandleData = (count) => {
      let data = [];
      let price = 100;
      for (let i = 0; i < count; i++) {
        let open = price;
        let close = open + (Math.random() - 0.5) * 5;
        let high = Math.max(open, close) + Math.random() * 2;
        let low = Math.min(open, close) - Math.random() * 2;
        data.push({
          time: Date.now() / 1000 - (count - i) * 60, // Simula 1 minuto por vela
          open: parseFloat(open.toFixed(2)),
          high: parseFloat(high.toFixed(2)),
          low: parseFloat(low.toFixed(2)),
          close: parseFloat(close.toFixed(2)),
        });
        price = close;
      }
      return data;
    };

    const candleData = generateCandleData(50);
    candlestickSeries.setData(candleData);

    // Ajustar tamaño de la gráfica al redimensionar
    const resizeObserver = new ResizeObserver(() => {
      chart.applyOptions({
        width: chartContainerRef.current.clientWidth,
      });
    });
    resizeObserver.observe(chartContainerRef.current);

    return () => {
      resizeObserver.disconnect();
      chart.remove();
    };
  }, []);

  return (
    <div ref={chartContainerRef} className="w-full h-[400px] bg-gray-900 rounded-lg shadow-lg" />
  );
};

export default CandlestickChart;
