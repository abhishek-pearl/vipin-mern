"use client";
import React, { useState, useEffect } from "react";
import { State, City } from "country-state-city";
import Select from "react-select";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const FilterComponent = () => {
  const [category, setCategory] = useState("");
  const [state, setState] = useState("");
  const [stateLists, setStateLists] = useState([]);
  const [cityList, setCityLists] = useState([]);
  const [city, setCity] = useState("");
  const [bank, setBank] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Fetch states for dropdown
  useEffect(() => {
    const states = State.getStatesOfCountry("IN");
    if (states?.length > 0) {
      setStateLists(
        states.map((state) => ({
          label: state.name,
          value: state.isoCode,
        }))
      );
    }
  }, []);

  // Fetch cities based on selected state
  const fetchCitiesList = (state) => {
    const citiesList = City.getCitiesOfState("IN", state?.value);
    setCityLists(
      citiesList.map((city) => ({
        label: city.name,
        value: city.name,
      }))
    );
  };

  // Handle form submission to update URL parameters
  const handleSubmit = () => {
    const params = new URLSearchParams(searchParams);

    // Update params only if the value exists
    if (category) params.set("category", category);
    else params.delete("category");

    if (state) params.set("state", state);
    else params.delete("state");

    if (city) params.set("city", city);
    else params.delete("city");

    if (bank) params.set("bankName", bank);
    else params.delete("bankName");

    if (startDate) params.set("auctionStart", startDate);
    else params.delete("auctionStart");

    if (endDate) params.set("auctionEnd", endDate);
    else params.delete("auctionEnd");

    if (minPrice) params.set("minPrice", minPrice);
    else params.delete("minPrice");

    if (maxPrice) params.set("maxPrice", maxPrice);
    else params.delete("maxPrice");

    // Replace URL with updated parameters
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="bg-red-800/10 p-6 rounded-md space-y-4 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <select
          className="p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">-- Category --</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Industrials">Industrials</option>
          <option value="Vehicle">Vehicle</option>
          <option value="Agriculture">Agriculture</option>
        </select>

        <Select
          options={stateLists}
          placeholder="State"
          value={stateLists.find((s) => s.value === state) || null}
          onChange={(val) => {
            setState(val.value);
            fetchCitiesList(val);
          }}
        />

        <Select
          placeholder="City"
          options={cityList}
          value={cityList.find((c) => c.value === city) || null}
          onChange={(val) => setCity(val.value)}
        />

        <input
          className="p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          type="text"
          placeholder="Bank"
          value={bank}
          onChange={(e) => setBank(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col relative">
          <label className="md:absolute -bottom-7 left-2" htmlFor="">
            Start Date
          </label>
          <input
            className="p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            type="date"
            placeholder="Auction Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="flex flex-col relative">
          <label className="md:absolute -bottom-7 left-2" htmlFor="">
            End Date
          </label>
          <input
            className="p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            type="date"
            placeholder="Auction End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <input
          className="p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <input
          className="p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div className="flex justify-end mt-4">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
