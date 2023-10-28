import React from "react";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

// const barGraphData = [
//     {
//         name: "Jan",
//         MRP: 4800,
//         Cost: 2400,
//         Discount: 2400
//     },
//     {
//         name: "Feb",
//         MRP: 3608,
//         Cost: 1398,
//         Discount: 2210
//     },
//     {
//         name: "Mar",
//         MRP: 12090,
//         Cost: 9800,
//         Discount: 2290
//     },
//     {
//         name: "Apr",
//         MRP: 5908,
//         Cost: 3908,
//         Discount: 2000
//     },
//     {
//         name: "May",
//         MRP: 6981,
//         Cost: 4800,
//         Discount: 2181
//     },
//     {
//         name: "Jun",
//         MRP: 6300,
//         Cost: 3800,
//         Discount: 2500
//     },
//     {
//         name: "Jul",
//         MRP: 6400,
//         Cost: 4300,
//         Discount: 2100
//     },
//     {
//         name: "Aug",
//         MRP: 3608,
//         Cost: 1398,
//         Discount: 2210
//     },
//     {
//         name: "Sep",
//         MRP: 12090,
//         Cost: 9800,
//         Discount: 2290
//     },
//     {
//         name: "Oct",
//         MRP: 5908,
//         Cost: 3908,
//         Discount: 2000
//     },
//     {
//         name: "Nov",
//         MRP: 0,
//         Cost: 0,
//         Discount: 0
//     },
//     {
//         name: "Dec",
//         MRP: 0,
//         Cost: 0,
//         Discount: 0
//     },
// ];

const MixBarChart = ({ barGraphData }) => {

    return (
        <BarChart
            width={750}
            height={400}
            data={barGraphData}
            margin={{
                top: 20,
                right: 10,
                left: 0,
                // bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Cost" stackId="a" fill="rgb(255, 85, 85)" />
            <Bar dataKey="Discount" stackId="a" fill="rgb(56, 218, 115)" />
            <Bar dataKey="MRP" fill="#8884d8" />
            {/* <Bar dataKey="MRP" fill="rgb(93, 109, 126)" /> */}

        </BarChart>
    );
}


export default MixBarChart;