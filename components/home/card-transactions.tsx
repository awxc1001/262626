import { Avatar, Card, Text, Grid } from '@nextui-org/react';
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from 'recharts';

export const CardTransactions = ({ data }) => {
  if (!data) {
    return <Text>No data available</Text>;
  }

  // Prepare data for Bar Chart: Financial Overview
  const financialOverview = [
    { name: "Revenue", value: data.financial_data.annual_revenue },
    { name: "Net Profit", value: data.financial_data.net_profit },
    { name: "Assets", value: data.financial_data.total_assets },
    { name: "Liabilities", value: data.financial_data.total_liabilities },
    { name: "Equity", value: data.financial_data.equity },
  ];

  // Prepare data for Pie Chart: Cash Flow Breakdown
  const cashFlowData = [
    { name: "Operating", value: data.financial_data.cash_flow.operating_activities },
    { name: "Investing", value: data.financial_data.cash_flow.investing_activities },
    { name: "Financing", value: data.financial_data.cash_flow.financing_activities },
  ];
  const cashFlowColors = ["#0070f3", "#ff4081", "#36a2eb"];

  // Prepare data for Radar Chart: Financial Ratios
  const financialRatios = [
    { metric: "Current Ratio", value: data.financial_data.financial_ratios.current_ratio },
    { metric: "Debt-to-Equity", value: data.financial_data.financial_ratios.debt_to_equity_ratio },
    { metric: "Return on Equity", value: data.financial_data.financial_ratios.return_on_equity },
    { metric: "Gross Margin", value: data.financial_data.financial_ratios.gross_margin },
    { metric: "Net Profit Margin", value: data.financial_data.financial_ratios.net_profit_margin },
  ];

  return (
    <Card
      css={{
        mw: 'px',
        height: 'auto',
        bg: '$accents0',
        borderRadius: '$xl',
        justifyContent: 'start',
        px: '$6',
      }}
    >
      <Card.Body css={{ py: '$10' }}>

                {/* Bar Chart: Financial Overview */}
                <Flex css={{ mt: '$8' }} direction="column" justify="center">
          <Text h4 css={{ textAlign: 'center', mb: '$5' }}>Financial Overview</Text>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={financialOverview}>
              <XAxis dataKey="name" />
              <YAxis tick={false} />
              <Tooltip />
              <Bar dataKey="value" fill="#0070f3" />
            </BarChart>
          </ResponsiveContainer>
        </Flex>

         {/* Bar Chart: Cash Flow Breakdown */}
         <Flex css={{ mt: '$8' }} direction="column" justify="center">
          <Text h4 css={{ textAlign: 'center', mb: '$5' }}>Cash Flow Breakdown</Text>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={cashFlowData}>
              
              <XAxis dataKey="name" />
              <YAxis tick={false}/>
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8">
                {cashFlowData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={cashFlowColors[index]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Flex>

        {/* Radar Chart: Financial Ratios */}
        <Flex css={{ mt: '$8' }} direction="column" justify="center">
          <Text h4 css={{ textAlign: 'center', mb: '$5' }}>Financial Ratios</Text>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={financialRatios}>
              <PolarGrid />
              <PolarAngleAxis dataKey="metric" tick={false} />
              <Radar dataKey="value" stroke="#0070f3" fill="#0070f3" fillOpacity={0.6} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </Flex>

      </Card.Body>
    </Card>
  );
};
