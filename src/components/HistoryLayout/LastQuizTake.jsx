import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const LastQuizTake = () => {
  const data = [
    { name: "Attempts", value: 6 },
    { name: "High Score", value: 30 },
    { name: "Remaining", value: 4 },
  ];

  const COLORS = ["#D32F2F", "#4CAF50", "#3F51B5"];

  // Custom label function (optional)
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x < cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-center  text-xl font-bold mb-4">Last Quiz Take</h2>

      {/* Responsive Flex Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        {/* Pie Chart Section */}
        <div className="w-[160px] sm:w-[200px] h-[180px] sm:h-[224px] flex-shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
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
          </ResponsiveContainer>
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left w-full sm:max-w-xs mt-4 sm:mt-0">
          <h3 className="text-lg text-ce font-semibold">Filipino</h3>
          <ul className="text-sm space-y-1 mt-2">
            <li className="flex items-center justify-center gap-2  md:justify-start ">
              <span className="w-3 h-3 bg-red-600 rounded-full"></span>
              Attempts: 6
            </li>
            <li className="flex items-center justify-center gap-2  md:justify-start  ">
              <span className=" w-3 h-3 bg-green-500 rounded-full"></span>
              High Score: 30
            </li>
            <li className="flex items-center justify-center gap-2  md:justify-start ">
              <span className=" w-3 h-3 bg-blue-600 rounded-full"></span>
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