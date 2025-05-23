import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const LastQuizTake = () => {
  const data = [
    { name: "Attempts", value: 6 },
    { name: "High Score", value: 30 },
    { name: "Remaining", value: 4 },
  ];

  const COLORS = ["#D32F2F", "#4CAF50", "#3F51B5"];

  return (
    <div className="bg-white md:max-w-lg  w-full p-4 rounded-md shadow-md">
      <h2 className="text-center text-xl font-bold mb-4">Last Quiz Take</h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <PieChart width={200} height={224}>
          <Pie
            data={data}
            innerRadius={40}
            outerRadius={80}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name) => [`${value}`, name]}
            contentStyle={{ backgroundColor: "white", borderColor: "#ccc" }}
          />
        </PieChart>
        <div className="ml-6">
          <h3 className="text-lg font-semibold">Filipino</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>
              <span className="inline-block w-3 h-3 bg-red-600 rounded-full mr-2" />
              Attempts: 6
            </li>
            <li>
              <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2" />
              High Score: 30
            </li>
            <li>
              <span className="inline-block w-3 h-3 bg-blue-600 rounded-full mr-2" />
              Percentage: 83%
            </li>
            <li>Quiz Items: 40</li>
            <li>Date: 05 - 23 - 2025</li>
            <li>Time: 7:30 PM</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LastQuizTake;
