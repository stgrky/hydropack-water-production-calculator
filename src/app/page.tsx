/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";

interface MonthData {
  month: string;
  temperature: number;
  humidity: number;
  awgEffectiveness: string;
  hydropackS: number;
  hydropack: number;
  hydropackX: number;
}

export default function Home() {
  const cities = ["Austin", "Dallas"];
  const models = ["Hydropack S", "Hydropack", "Hydropack X"];

  const [selectedCity, setSelectedCity] = useState("Austin");
  const [selectedModel, setSelectedModel] = useState("Hydropack X");

  const data: Record<string, MonthData[]> = {
    Austin: [
      { month: "January", temperature: 51, humidity: 66, awgEffectiveness: "25.60%", hydropackS: 514.1, hydropack: 1028.2, hydropackX: 2056.4 },
      { month: "February", temperature: 54.9, humidity: 70, awgEffectiveness: "36.40%", hydropackS: 730.1, hydropack: 1463.2, hydropackX: 2923.4 },
      { month: "March", temperature: 61.4, humidity: 73, awgEffectiveness: "56.70%", hydropackS: 1137.7, hydropack: 2278.5, hydropackX: 4553.9 },
      { month: "April", temperature: 67.9, humidity: 72, awgEffectiveness: "66.90%", hydropackS: 1344.6, hydropack: 2686.1, hydropackX: 5375.2 },
      { month: "May", temperature: 74.9, humidity: 75, awgEffectiveness: "82.20%", hydropackS: 1651.8, hydropack: 3300.6, hydropackX: 6604.2 },
      { month: "June", temperature: 81.7, humidity: 71, awgEffectiveness: "87.90%", hydropackS: 1764.4, hydropack: 3531.8, hydropackX: 7060.5 },
      { month: "July", temperature: 84.8, humidity: 65, awgEffectiveness: "84.70%", hydropackS: 1700.5, hydropack: 3401.0, hydropackX: 6805.0 },
      { month: "August", temperature: 85.9, humidity: 59, awgEffectiveness: "76.20%", hydropackS: 1530.1, hydropack: 3060.3, hydropackX: 6120.5 },
      { month: "September", temperature: 79.6, humidity: 68, awgEffectiveness: "82.50%", hydropackS: 1657.9, hydropack: 3312.7, hydropackX: 6628.5 },
      { month: "October", temperature: 69.9, humidity: 67, awgEffectiveness: "64.60%", hydropackS: 1298.9, hydropack: 2594.8, hydropackX: 5189.7 },
      { month: "November", temperature: 59.6, humidity: 70, awgEffectiveness: "50.90%", hydropackS: 1022.1, hydropack: 2044.2, hydropackX: 4088.4 },
      { month: "December", temperature: 52.7, humidity: 70, awgEffectiveness: "23.20%", hydropackS: 465.4, hydropack: 930.9, hydropackX: 1864.7 },
      { month: "Yearly Avg", temperature: 68.69, humidity: 68.83, awgEffectiveness: "61.48%", hydropackS: 1234.8, hydropack: 2469.4, hydropackX: 4939.2 },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 pb-20 sm:p-20">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Water Production Estimate Calculator
      </h1>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Location</label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="border border-gray-300 rounded p-2 bg-white text-gray-900"
          >
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Aquaria Model</label>
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            className="border border-gray-300 rounded p-2 bg-white text-gray-900"
          >
            {models.map((model) => (
              <option key={model} value={model}>{model}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-200 shadow-md">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Month</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Temperature (°F)</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Humidity (%)</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">AWG Effectiveness</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">{selectedModel} (gal)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data[selectedCity].map((entry, _index) => (
              <tr 
                key={entry.month} 
                className={entry.month === "Yearly Avg" ? "bg-gray-200 font-bold" : ""}
              >
                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{entry.month}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{entry.temperature}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{entry.humidity}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{entry.awgEffectiveness}</td>
                <td className={`px-4 py-2 whitespace-nowrap text-sm ${entry.month === "Yearly Avg" ? "font-bold text-blue-700" : "text-gray-700"}`}>
                  {selectedModel === "Hydropack S" ? entry.hydropackS :
                   selectedModel === "Hydropack" ? entry.hydropack :
                   entry.hydropackX}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
