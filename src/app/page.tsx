"use client";

import { useState } from "react";

interface MonthData {
  month: string;
  hydropackS: number;
  hydropack: number;
  hydropackX: number;
}

export default function Home() {
  const cities = ["Austin", "Dallas"];
  const [selectedCity, setSelectedCity] = useState("Austin");

  const data: Record<string, MonthData[]> = {
    Austin: [
      { month: "January", hydropackS: 514.1, hydropack: 1028.2, hydropackX: 2056.4 },
      { month: "February", hydropackS: 730.1, hydropack: 1463.2, hydropackX: 2923.4 },
      { month: "March", hydropackS: 1137.7, hydropack: 2278.5, hydropackX: 4553.9 },
      { month: "April", hydropackS: 1344.6, hydropack: 2686.1, hydropackX: 5375.2 },
      { month: "May", hydropackS: 1651.8, hydropack: 3300.6, hydropackX: 6604.2 },
      { month: "June", hydropackS: 1764.4, hydropack: 3531.8, hydropackX: 7060.5 },
      { month: "July", hydropackS: 1700.5, hydropack: 3401.0, hydropackX: 6805.0 },
      { month: "August", hydropackS: 1530.1, hydropack: 3060.3, hydropackX: 6120.5 },
      { month: "September", hydropackS: 1657.9, hydropack: 3312.7, hydropackX: 6628.5 },
      { month: "October", hydropackS: 1298.9, hydropack: 2594.8, hydropackX: 5189.7 },
      { month: "November", hydropackS: 1022.1, hydropack: 2044.2, hydropackX: 4088.4 },
      { month: "December", hydropackS: 465.4, hydropack: 930.9, hydropackX: 1864.7 },
      { month: "Yearly Avg", hydropackS: 1234.8, hydropack: 2469.4, hydropackX: 4939.2 },
    ],
    Dallas: [
      { month: "January", hydropackS: 322.5, hydropack: 641.9, hydropackX: 1286.8 },
      { month: "February", hydropackS: 565.8, hydropack: 1131.6, hydropackX: 2266.3 },
      { month: "March", hydropackS: 876.1, hydropack: 1752.2, hydropackX: 3504.4 },
      { month: "April", hydropackS: 1186.4, hydropack: 2369.7, hydropackX: 4742.5 },
      { month: "May", hydropackS: 1594.0, hydropack: 3191.1, hydropackX: 6382.1 },
      { month: "June", hydropackS: 1700.5, hydropack: 3404.0, hydropackX: 6808.0 },
      { month: "July", hydropackS: 1603.1, hydropack: 3206.3, hydropackX: 6412.5 },
      { month: "August", hydropackS: 1478.4, hydropack: 2956.8, hydropackX: 5913.6 },
      { month: "September", hydropackS: 1475.4, hydropack: 2953.8, hydropackX: 5907.6 },
      { month: "October", hydropackS: 1131.6, hydropack: 2263.2, hydropackX: 4523.5 },
      { month: "November", hydropackS: 748.3, hydropack: 1499.7, hydropackX: 2996.4 },
      { month: "December", hydropackS: 447.2, hydropack: 891.3, hydropackX: 1782.6 },
      { month: "Yearly Avg", hydropackS: 1094.1, hydropack: 2188.5, hydropackX: 4377.2 },
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
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Month</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">HYDROPACK S (gal)</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">HYDROPACK (gal)</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">HYDROPACK X (gal)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data[selectedCity].map((entry) => (
              <tr key={entry.month}>
                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{entry.month}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{entry.hydropackS}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{entry.hydropack}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{entry.hydropackX}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
