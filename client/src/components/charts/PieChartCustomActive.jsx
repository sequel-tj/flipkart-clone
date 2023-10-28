import { Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";

// const data = [
//     { name: "Kitchenware", value: 4 },
//     { name: "Smartphone", value: 1 },
//     { name: "Clothing", value: 2 },
//     { name: "Appliances", value: 1 }
// ];

const renderActiveShape = (props) => {

    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value
    } = props;

    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
        <g style={{ userSelect: "none" }}>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path
                d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                stroke={fill}
                fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                fill="#333"
            >{`Quantity: ${value}`}</text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={18}
                textAnchor={textAnchor}
                fill="#999"
            >
                {`(Rate: ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};


const PieChartCustomAcitve = ({ categories }) => {

    const data = [];

    for (const category in categories) {
        data.push({name: category, value: categories[category]});
    }

    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback((_, index) => {
        setActiveIndex(index);
    }, [setActiveIndex]);

    return (
        <PieChart width={600} height={340}>
            <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={data}
                cx={280}
                cy={170}
                innerRadius={100}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={onPieEnter}
            />
        </PieChart>
    );
}


export default PieChartCustomAcitve;