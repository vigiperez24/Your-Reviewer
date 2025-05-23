// ScoreChart.jsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "4/28/2025", score: 2 },
  { date: "5/11/2025", score: 3 },
  { date: "5/13/2025", score: 3 },
  { date: "5/13/2025", score: 3 },
  { date: "5/20/2025", score: 5 },
  { date: "5/20/2025", score: 3 },
  { date: "5/23/2025", score: 3 },
];

export default function ScoreChart() {
  return (
    <div className="w-full h-[300px] bg-white p-4 rounded-lg shadow-md">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 30 }} // more space sa ilalim
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 10 }} // mas maliit na font size ng date
            tickMargin={10} // dagdag na spacing sa pagitan ng axis at tick text
          />
          <YAxis domain={[0, 5]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="score" fill="#f87171" name="Score" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
