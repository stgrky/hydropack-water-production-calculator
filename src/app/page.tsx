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

type HydropackKey = "hydropackS" | "hydropack" | "hydropackX";

export default function Home() {
  const cities = ["Austin", "Dallas", "San Antonio", "Leakey", "Dripping Springs"];
  const unitOptions: { key: HydropackKey; label: string }[] = [
    { key: "hydropackS", label: "HYDROPACK S (gal)" },
    { key: "hydropack", label: "HYDROPACK (gal)" },
    { key: "hydropackX", label: "HYDROPACK X (gal)" },
  ];

  // Default state: Austin & Hydropack X.
  const [selectedCity, setSelectedCity] = useState("Austin");
  const [selectedUnit, setSelectedUnit] = useState<HydropackKey>("hydropackX");

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
      { month: "December", humidity: 60, temperature: 52.7, awgEffectiveness: "23.20%", hydropackS: 15.3, hydropack: 30.6, hydropackX: 61.3 },
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
    ],
    "San Antonio": [
      { month: "January", humidity: 64, temperature: 53, awgEffectiveness: "27.00%", hydropackS: 17.8, hydropack: 35.7, hydropackX: 71.3 },
      { month: "February", humidity: 69, temperature: 57, awgEffectiveness: "37.30%", hydropackS: 24.6, hydropack: 49.3, hydropackX: 98.5 },
      { month: "March", humidity: 71, temperature: 63.5, awgEffectiveness: "57.80%", hydropackS: 38.2, hydropack: 76.3, hydropackX: 152.6 },
      { month: "April", humidity: 70, temperature: 70.2, awgEffectiveness: "69.90%", hydropackS: 46.2, hydropack: 92.3, hydropackX: 184.6 },
      { month: "May", humidity: 73, temperature: 76.5, awgEffectiveness: "83.20%", hydropackS: 54.9, hydropack: 109.9, hydropackX: 219.7 },
      { month: "June", humidity: 70, temperature: 82.4, awgEffectiveness: "90.40%", hydropackS: 59.7, hydropack: 119.4, hydropackX: 238.7 },
      { month: "July", humidity: 64, temperature: 85.2, awgEffectiveness: "84.70%", hydropackS: 55.9, hydropack: 111.8, hydropackX: 223.7 },
      { month: "August", humidity: 59, temperature: 86.2, awgEffectiveness: "81.00%", hydropackS: 53.5, hydropack: 107, hydropackX: 213.9 },
      { month: "September", humidity: 66, temperature: 80.4, awgEffectiveness: "79.50%", hydropackS: 52.5, hydropack: 105, hydropackX: 210 },
      { month: "October", humidity: 66, temperature: 71.5, awgEffectiveness: "64.60%", hydropackS: 42.7, hydropack: 85.3, hydropackX: 170.6 },
      { month: "November", humidity: 69, temperature: 61.5, awgEffectiveness: "50.70%", hydropackS: 33.5, hydropack: 66.9, hydropackX: 133.9 },
      { month: "December", humidity: 69, temperature: 54.7, awgEffectiveness: "34.00%", hydropackS: 22.4, hydropack: 44.9, hydropackX: 89.8 },
    ],
    Leakey: [
      { month: "January", humidity: 61, temperature: 53, awgEffectiveness: "23.20%", hydropackS: 15.3, hydropack: 30.6, hydropackX: 61.3 },
      { month: "February", humidity: 64, temperature: 57.2, awgEffectiveness: "35.00%", hydropackS: 23.1, hydropack: 46.2, hydropackX: 92.4 },
      { month: "March", humidity: 68, temperature: 63.7, awgEffectiveness: "54.40%", hydropackS: 35.9, hydropack: 71.8, hydropackX: 143.7 },
      { month: "April", humidity: 65, temperature: 70, awgEffectiveness: "62.00%", hydropackS: 40.9, hydropack: 81.9, hydropackX: 163.7 },
      { month: "May", humidity: 69, temperature: 76.7, awgEffectiveness: "77.60%", hydropackS: 51.2, hydropack: 102.5, hydropackX: 204.9 },
      { month: "June", humidity: 65, temperature: 82.7, awgEffectiveness: "81.90%", hydropackS: 54.1, hydropack: 108.1, hydropackX: 216.3 },
      { month: "July", humidity: 60, temperature: 84.7, awgEffectiveness: "79.80%", hydropackS: 52.7, hydropack: 105.4, hydropackX: 210.8 },
      { month: "August", humidity: 55, temperature: 85.8, awgEffectiveness: "68.90%", hydropackS: 45.5, hydropack: 91, hydropackX: 182 },
      { month: "September", humidity: 64, temperature: 80.1, awgEffectiveness: "76.50%", hydropackS: 50.5, hydropack: 101, hydropackX: 202 },
      { month: "October", humidity: 64, temperature: 71.3, awgEffectiveness: "62.00%", hydropackS: 40.9, hydropack: 81.9, hydropackX: 163.7 },
      { month: "November", humidity: 67, temperature: 61.3, awgEffectiveness: "46.80%", hydropackS: 30.9, hydropack: 61.8, hydropackX: 123.6 },
      { month: "December", humidity: 66, temperature: 54.2, awgEffectiveness: "31.60%", hydropackS: 20.9, hydropack: 41.7, hydropackX: 83.5 },
    ],
    "Dripping Springs": [
      { month: "January", humidity: 66, temperature: 50.6, awgEffectiveness: "25.60%", hydropackS: 16.9, hydropack: 33.8, hydropackX: 67.6 },
      { month: "February", humidity: 70, temperature: 54.3, awgEffectiveness: "36.40%", hydropackS: 24.0, hydropack: 48.1, hydropackX: 96.1 },
      { month: "March", humidity: 73, temperature: 61.4, awgEffectiveness: "56.70%", hydropackS: 37.4, hydropack: 74.9, hydropackX: 149.7 },
      { month: "April", humidity: 72, temperature: 67.6, awgEffectiveness: "66.90%", hydropackS: 44.2, hydropack: 88.3, hydropackX: 176.7 },
      { month: "May", humidity: 76, temperature: 74.2, awgEffectiveness: "84.90%", hydropackS: 56.1, hydropack: 112.1, hydropackX: 224.2 },
      { month: "June", humidity: 72, temperature: 80.9, awgEffectiveness: "89.80%", hydropackS: 59.3, hydropack: 118.6, hydropackX: 237.2 },
      { month: "July", humidity: 66, temperature: 83.9, awgEffectiveness: "84.70%", hydropackS: 55.9, hydropack: 111.8, hydropackX: 223.7 },
      { month: "August", humidity: 60, temperature: 84.8, awgEffectiveness: "79.80%", hydropackS: 52.7, hydropack: 105.4, hydropackX: 210.8 },
      { month: "September", humidity: 69, temperature: 78.6, awgEffectiveness: "80.00%", hydropackS: 52.8, hydropack: 105.6, hydropackX: 211.3 },
      { month: "October", humidity: 68, temperature: 69, awgEffectiveness: "64.70%", hydropackS: 42.7, hydropack: 85.4, hydropackX: 170.9 },
      { month: "November", humidity: 71, temperature: 59, awgEffectiveness: "50.90%", hydropackS: 33.6, hydropack: 67.2, hydropackX: 134.4 },
      { month: "December", humidity: 71, temperature: 51.9, awgEffectiveness: "32.80%", hydropackS: 21.7, hydropack: 43.3, hydropackX: 86.6 },
    ],
  };

  // Get the data for the selected city.
  const cityData = data[selectedCity];
  const totalMonths = cityData.length;

  // Calculate averages for fixed columns.
  const avgTemperature = cityData.reduce((acc, curr) => acc + curr.temperature, 0) / totalMonths;
  const avgHumidity = cityData.reduce((acc, curr) => acc + curr.humidity, 0) / totalMonths;
  const avgAwdEffectivenessNum =
    cityData.reduce((acc, curr) => acc + parseFloat(curr.awgEffectiveness.replace("%", "")), 0) / totalMonths;

  // Calculate the average for the active unit.
  const avgUnit = cityData.reduce((acc, curr) => acc + curr[selectedUnit], 0) / totalMonths;

  // Get the label for the active unit and remove the unit measurement.
  const activeUnitLabel = unitOptions.find(option => option.key === selectedUnit)?.label || "";
  const unitName = activeUnitLabel.replace(" (gal)", "");

  // Define headers outside the JSX to avoid parser issues.
  const headers = [
    "Month",
    "Average Temperature (°F)",
    "Average Relative Humidity (°F)",
    "Relative Production (%)",
    `Estimated Monthly Production per ${unitName} (Gal)`,
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
        Water Production Estimate Calculator
      </h1>
      <div className="mb-8 flex justify-center space-x-4">
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="border border-gray-300 rounded p-2 bg-white text-gray-900"
        >
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <select
          value={selectedUnit}
          onChange={(e) => setSelectedUnit(e.target.value as HydropackKey)}
          className="border border-gray-300 rounded p-2 bg-white text-gray-900"
        >
          {unitOptions.map((option) => (
            <option key={option.key} value={option.key}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full max-w-4xl mx-auto overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-200 shadow-md">
          <thead className="bg-gray-50">
            <tr>
              {headers.map((header) => (
                <th key={header} className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cityData.map((entry) => (
              <tr key={entry.month}>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{entry.month}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{entry.temperature}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{entry.humidity}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{entry.awgEffectiveness}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{entry[selectedUnit]}</td>
              </tr>
            ))}
            <tr className="bg-gray-50 font-bold">
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">Average</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{avgTemperature.toFixed(1)}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{avgHumidity.toFixed(1)}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                {avgAwdEffectivenessNum.toFixed(2)}%
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{avgUnit.toFixed(1)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}