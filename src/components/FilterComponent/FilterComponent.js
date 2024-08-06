"use client";

// FilterComponent.jsx
import React, { useState } from "react";

const FilterComponent = () => {
  const [category, setCategory] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [bank, setBank] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () => {
    // Add search functionality here
    console.log({
      category,
      state,
      city,
      bank,
      startDate,
      endDate,
      minPrice,
      maxPrice,
    });
  };

  return (
    <div className="bg-red-800/10 p-6 rounded-md space-y-4 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <select
          className="p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">-- Category --</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
        </select>

        <select
          className="p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value="">-- State --</option>
          <option value="state1">State 1</option>
          <option value="state2">State 2</option>
        </select>

        <select
          className="p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="">-- City --</option>
          <option value="city1">City 1</option>
          <option value="city2">City 2</option>
        </select>

        <input
          className="p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Bank"
          value={bank}
          onChange={(e) => setBank(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <input
          className="p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="date"
          placeholder="Auction Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <input
          className="p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="date"
          placeholder="Auction End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <input
          className="p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <input
          className="p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div className="flex justify-end mt-4">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
