import { Card, Text, Input } from '@nextui-org/react';
import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import c001 from "../../c001.json";

export const CardBalance2 = ({ esgData }) => {
  if (!esgData || !esgData.environmental) {
    return <Text color="error">No ESG data available</Text>;
  }
  // Extract the overall rating as the value for the gauge
  const overallRating = esgData.social.overall_rating;

  // Map the rating to a numeric percentage value
  const ratingValue = overallRating === "High" ? 100 : overallRating === "Good" ? 66 : overallRating === "Low" ? 33 : 0;

  // Prepare data for the gauge chart
  const data = [
    { name: "Rating", value: ratingValue },
    { name: "Remaining", value: 100 - ratingValue },
  ];

  // Colors for High, Good, and Low ratings
  const COLORS = [
    overallRating === "High" ? "#007BFF" : overallRating === "Good" ? "#00C49F" : "#FF0000", // Blue for High, Green for Good, Red for Low
    "#E0E0E0"
  ];

  const comment = esgData.social.comment || "No comments available.";

  return (
    <Card
      css={{
        mw: '375px',
        bg: 'lightblue',
        borderRadius: '$xl',
        px: '$6',
        py: '$4', // Add padding for better spacing
      }}
    >
      <Text
        h4
        css={{
          textAlign: "center",
          fontSize: "20px", // Increase font size
          fontWeight: "bold", // Make it bold
          color: "#007BFF", // Change the color for better visibility
          marginBottom: "$4", // Add spacing below the title
        }}
      >
        Social Overall Rating
      </Text>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <text
          x={150}
          y={150}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: "16px", fontWeight: "bold" }}
        >
          {`${overallRating}`}
        </text>
      </PieChart>
      <Text
        css={{
          textAlign: "center",
          fontSize: "14px",
          color: "#333",
          marginTop: "$4",
        }}
      >
       <Input
        readOnly
        value={comment}
        css={{
          textAlign: "center",
          fontSize: "14px",
          color: "#333",
          marginTop: "$4",
          bg: "#f0f0f0",
          border: "1px solid #ddd",
          borderRadius: "$md",
          py: "$2",
          px: "$3",
        }}
      />
      </Text>
    </Card>
  );
};
