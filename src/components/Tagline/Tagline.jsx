import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Tagline = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/tagline`);
        setItems(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);
  console.log("items", items);

  return (
    <div className="flex flex-col items-center my-4 justify-center bg-gradient-to-r from-red-500 to-red-600 p-6 text-white text-center">
      {items &&
        items
          .filter((item) => item.isActive === true)
          .map((item) => (
            <div key={item._id}>
              {item.isActive === true ? (
                <div>
                  <h1 className="text-2xl md:text-4xl font-bold mb-4 drop-shadow-lg">
                    {item.heading}
                  </h1>
                  <p className="text-base md:text-lg max-w-5xl text-white/90">
                    {item.paragraph}
                  </p>
                </div>
              ) : (
                <div>Loading....</div>
              )}
            </div>
          ))}
    </div>
  );
};

export default Tagline;
