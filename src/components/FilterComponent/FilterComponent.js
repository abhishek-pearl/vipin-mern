"use client";
import React, { useState, useEffect } from "react";
import { State, City } from "country-state-city";
import Select from "react-select";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
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
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((name, term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set(name, term);
    } else {
      params.delete(name);
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);
  // useEffect(() => {
  //   const query = new URLSearchParams();

  //   if (category) query.set("category", category);
  //   if (state) query.set("state", state);
  //   if (city) query.set("city", city);
  //   if (bank) query.set("bank", bank);
  //   if (startDate) query.set("startDate", startDate);
  //   if (endDate) query.set("endDate", endDate);
  //   if (minPrice) query.set("minPrice", minPrice);
  //   if (maxPrice) query.set("maxPrice", maxPrice);

  //   router.push(`?${query.toString()}`, undefined, { shallow: true });
  // }, [category, state, city, bank, startDate, endDate, minPrice, maxPrice]);

  // const handleSearch = () => {
  //   console.log("filters:", {
  //     category,
  //     state,
  //     city,
  //     bank,
  //     startDate,
  //     endDate,
  //     minPrice,
  //     maxPrice,
  //   });
  // };

  // This block of code is used to set Indian states dropdown Values.
  useEffect(() => {
    const states = State.getStatesOfCountry("IN");
    if (states?.length > 0) {
      setStateLists(
        states.map((state) => {
          return {
            label: state?.name,
            value: state?.isoCode,
          };
        })
      );
    }
  }, []);

  const fetchCitiesList = (state) => {
    const citiesList = City.getCitiesOfState("IN", state?.value);
    setCityLists(
      citiesList.map((city) => {
        return {
          label: city?.name,
          value: city?.name,
        };
      })
    );
  };
  useEffect(() => {
    console.log(stateLists);
  }, [stateLists]);

  return (
    <div className="bg-red-800/10 p-6 rounded-md space-y-4 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <select
          className="p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          // value={category}
          onChange={(e) => handleSearch("category", e.target.value)}
        >
          <option value="">-- Category --</option>
          <option value="">Select property type</option>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
          <option value="industrial">Industrial</option>
          <option value="vehicle">Vehicle</option>
          <option value="agriculture">Agriculture</option>
        </select>

        <Select
          options={stateLists}
          placeholder="State"
          // value={value || null}
          onChange={(val) => {
            // resetField("City");
            // onChange(val);
            handleSearch("state", val.value.toLowerCase());
            console.log(val);
            fetchCitiesList(val);
          }}
          // getOptionLabel={(e) => e.label}
          // getOptionValue={(e) => e.value}
          // closeMenuOnSelect={true}
        />

        <Select
          // value={value || null}
          placeholder="City"
          options={cityList}
          onChange={(val) => {
            handleSearch("city", val.value.toLowerCase());
            console.log(val);
          }}
        />

        <input
          className="p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          type="text"
          placeholder="Bank"
          // value={bank}
          onChange={(e) => handleSearch("bank", e.target.value)}
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
            // value={startDate}
            onChange={(e) => handleSearch("auctionStart", e.target.value)}
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
            // value={endDate}
            onChange={(e) => handleSearch("auctionEnd", e.target.value)}
          />
        </div>

        <input
          className="p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          type="number"
          placeholder="Min Price"
          // value={minPrice}
          onChange={(e) => handleSearch("minPrice", e.target.value)}
        />

        <input
          className="p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          type="number"
          placeholder="Max Price"
          // value={maxPrice}

          onChange={(e) => handleSearch("maxPrice", e.target.value)}
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
