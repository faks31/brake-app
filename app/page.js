"use client";

import Image from "next/image";
import { useState } from "react";
import categories from "./components/QuestionsData";

const Home = () => {
  const [selectedOptions, setSelectedOptions] = useState(
    categories.reduce((acc, category) => ({ ...acc, [category.name]: [] }), {})
  );

  const handleOptionSelection = (categoryName, option) => {
    setSelectedOptions((prevState) => {
      const prevSelectedOptions = prevState[categoryName];
      if (prevSelectedOptions.includes(option)) {
        // If the option is already selected, remove it
        return {
          ...prevState,
          [categoryName]: prevSelectedOptions.filter((item) => item !== option),
        };
      } else {
        // If the option is not selected, add it
        return {
          ...prevState,
          [categoryName]: [...prevSelectedOptions, option],
        };
      }
    });
  };

  const handleDone = () => {
    const categoryNames = categories.map((category) => category.name);
    const selectedOptionCounts = categoryNames.map(
      (category) => selectedOptions[category].length
    );
    const selectedSingleOptions = selectedOptionCounts.filter(
      (count) => count === 1
    );

    if (selectedSingleOptions.length === 1) {
      window.location.href = "/dashboard";
    } else {
      alert(
        "Please select exactly one option in one category before proceeding."
      );
    }
  };

  return (
    <div className="py-10 px-5 h-screen overflow-auto">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Image
            className="flex justify-center"
            src="/logo.png"
            width={200}
            height={200}
            alt="logo"
          />
        </div>
        <h1 className="text-center font-semibold">What are your Goals?</h1>
        <div className="flex justify-center">
          <div className="text-center">
            <h2 className="mb-10">I want to ..</h2>
            {categories.map((category) => (
              <div className="mb-8" key={category.name}>
                <h3 className="mb-5">{category.name}</h3>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                  {category.options.map((option) => (
                    <button
                      key={option}
                      onClick={() =>
                        handleOptionSelection(category.name, option)
                      }
                      className={
                        selectedOptions[category.name].includes(option)
                          ? "btn btn-primary"
                          : "btn btn-secondary"
                      }
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button
              className={`btn btn-primary mt-20 ${
                Object.keys(selectedOptions).filter(
                  (category) => selectedOptions[category].length >= 1
                ).length === 0
                  ? "disabled"
                  : ""
              }`}
              onClick={handleDone}
              disabled={
                Object.keys(selectedOptions).filter(
                  (category) => selectedOptions[category].length >= 1
                ).length === 0
              }
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
