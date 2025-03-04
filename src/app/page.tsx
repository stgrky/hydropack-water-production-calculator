"use client";

import { useState } from "react";

interface MonthData {
  month: string;
  humidity: number;
  temperature: number;
  awgEffectiveness: string;
  hydropackS: number;
  hydropack: number;
  hydropackX: number;
}

export default function Home() {
  const cities = ["Austin", "Dallas"];
  const [selectedCity, setSelectedCity] = useState("Austin");

  const data: Record<string, MonthData[]> = {
    Austin: [
      { month: "January", humidity: 66, temperature: 51, awgEffectiveness: "25.60%", hydropackS: 16.9, hydropack: 33.8, hydropackX: 67.6 },
      { month: "February", humidity: 70, temperature: 54.9, awgEffectiveness: "36.40%", hydropackS: 24, hydropack: 48.1, hydropackX: 96.1 },
      { month: "March", humidity: 73, temperature: 61.4, awgEffectiveness: "56.70%", hydropackS: 37.4, hydropack: 74.9, hydropackX: 149.7 },
      { month: "April", humidity: 72, temperature: 67.9, awgEffectiveness: "66.90%", hydropackS: 44.2, hydropack: 88.3, hydropackX: 176.7 },
      { month: "May", humidity: 75, temperature: 74.9, awgEffectiveness: "82.20%", hydropackS: 54.3, hydropack: 108.5, hydropackX: 217.1 },
      { month: "June", humidity: 71, temperature: 81.7, awgEffectiveness: "87.90%", hydropackS: 58, hydropack: 116.1, hydropackX: 232.1 },
      { month: "July", humidity: 65, temperature: 84.8, awgEffectiveness: "84.70%", hydropackS: 55.9, hydropack: 111.8, hydropackX: 223.7 },
      { month: "August", humidity: 59, temperature: 85.9, awgEffectiveness: "76.20%", hydropackS: 50.3, hydropack: 100.6, hydropackX: 201.2 },
      { month: "September", humidity: 68, temperature: 79.6, awgEffectiveness: "82.50%", hydropackS: 54.5, hydropack: 108.9, hydropackX: 217.9 },
      { month: "October", humidity: 67, temperature: 69.9, awgEffectiveness: "64.60%", hydropackS: 42.7, hydropack: 85.3, hydropackX: 170.6 },
      { month: "November", humidity: 70, temperature: 59.6, awgEffectiveness: "50.90%", hydropackS: 33.6, hydropack: 67.2, hydropackX: 134.4 },
      { month: "December", humidity: 70, temperature: 52.7, awgEffectiveness: "23.20%", hydropackS: 15.3, hydropack: 30.6, hydropackX: 61.3 },
      { month: "Yearly Avg", humidity: 68.83, temperature: 68.69, awgEffectiveness: "61.48%", hydropackS: 40.59, hydropack: 81.18, hydropackX: 162.37 },
    ],
    Dallas: [
      { month: "January", humidity: 64, temperature: 51, awgEffectiveness: "16.00%", hydropackS: 10.6, hydropack: 21.1, hydropackX: 42.3 },
      { month: "February", humidity: 70, temperature: 54.9, awgEffectiveness: "28.20%", hydropackS: 18.6, hydropack: 37.2, hydropackX: 74.5 },
      { month: "March", humidity: 70, temperature: 61.4, awgEffectiveness: "43.60%", hydropackS: 28.8, hydropack: 57.6, hydropackX: 115.2 },
      { month: "April", humidity: 69, temperature: 67.9, awgEffectiveness: "59.00%", hydropackS: 39, hydropack: 77.9, hydropackX: 155.9 },
      { month: "May", humidity: 72, temperature: 74.9, awgEffectiveness: "79.40%", hydropackS: 52.4, hydropack: 104.9, hydropackX: 209.8 },
      { month: "June", humidity: 66, temperature: 81.7, awgEffectiveness: "84.70%", hydropackS: 55.9, hydropack: 111.9, hydropackX: 223.8 },
      { month: "July", humidity: 60, temperature: 84.8, awgEffectiveness: "79.80%", hydropackS: 52.7, hydropack: 105.4, hydropackX: 210.8 },
      { month: "August", humidity: 55, temperature: 85.9, awgEffectiveness: "73.60%", hydropackS: 48.6, hydropack: 97.2, hydropackX: 194.4 },
      { month: "September", humidity: 62, temperature: 79.6, awgEffectiveness: "73.50%", hydropackS: 48.5, hydropack: 97.1, hydropackX: 194.2 },
      { month: "October", humidity: 64, temperature: 69.9, awgEffectiveness: "56.30%", hydropackS: 37.2, hydropack: 74.4, hydropackX: 148.7 },
      { month: "November", humidity: 68, temperature: 59.6, awgEffectiveness: "37.30%", hydropackS: 24.6, hydropack: 49.3, hydropackX: 98.5 },
      { month: "December", humidity: 68, temperature: 52.7, awgEffectiveness: "22.20%", hydropackS: 14.7, hydropack: 29.3, hydropackX: 58.6 },
      { month: "Yearly Avg", humidity: 65.67, temperature: 68.69, awgEffectiveness: "54.47%", hydropackS: 35.97, hydropack: 71.94, hydropackX: 143.89 },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 pb-20 sm:p-20">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Water Production Estimate Calculator</h1>
      <div className="mb-8 flex justify-center">
        <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className="border border-gray-300 rounded p-2 bg-white text-gray-900">
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>
      <div className="w-full max-w-4xl mx-auto overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-200 shadow-md">
          <thead className="bg-gray-50">
            <tr>
              {["Month", "Temperature (°F)", "Humidity (%)", "AWG Effectiveness", "HYDROPACK S (gal)", "HYDROPACK (gal)", "HYDROPACK X (gal)"].map((header) => (
                <th key={header} className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data[selectedCity].map((entry) => (
              <tr key={entry.month}>
                {Object.values(entry).map((value, index) => (
                  <td key={index} className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
