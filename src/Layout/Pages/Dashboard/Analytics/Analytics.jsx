import axios from "axios";
import { useEffect, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill=""
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

const Analytics = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios
      .get("https://hostel-management-server-six.vercel.app/payments")
      .then((res) => {
        setPlans(res.data);
      });
  }, []);

  const silver = plans.filter((item) => item.plan === "Silver");
  const gold = plans.filter((item) => item.plan === "Gold");
  const platinum = plans.filter((item) => item.plan === "Platinum");

  const data = [
    { name: "Group A", value: silver?.length },
    { name: "Group B", value: gold?.length },
    { name: "Group C", value: platinum?.length },
  ];

  const COLORS = ["#ffffff", "#42b0d1", "#b75cff"];

  return (
    <div className="">
      <h2 className="text-3xl lg:text-4xl  font-bold text-center">
        Membership analytics
      </h2>
      <h2 className="text-xl   font-bold text-center text-p1 my-2">
        __Statistics of meal plan__
      </h2>

      <div className="border-t-2 border-p1 mt-10 addFlexJustify">
        <PieChart width={500} height={500}>
          <Pie
            data={data}
            label={renderCustomizedLabel}
            fill="#8884d8"
            dataKey="value"
            animationBegin={0}
            animationDuration={1000}
            animationEasing="ease-out"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>

      <div className="addFlex">
        <div className="flex flex-col lg:flex-row md:flex-row md:gap-6 lg:gap-14 gap-6">
          <div className="addFlexItems gap-4">
            <h4 className=" text-lg font-semibold ">Silver </h4>
            <div className="w-[100px] h-[12px] bg-p5"> </div>
          </div>

          <div className="addFlexItems gap-4">
            <h4 className="  text-lg font-semibold ">Gold </h4>
            <div className="w-[100px] h-[12px] bg-p1"> </div>
          </div>
          <div className="addFlexItems gap-4">
            <h4 className="  text-lg font-semibold ">Platinum </h4>
            <div className="w-[100px] h-[12px] bg-b1"> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
