import React from 'react';
import './PropertyPrices.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PropertyPrices = ({ data }) => {
  return (
    <div className="property-prices">
      <h2>Property Prices</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="property" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="price" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PropertyPrices;
