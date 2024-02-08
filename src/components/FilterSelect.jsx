import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Select from "react-select";
import { products } from "../utils/products";

// const options = [
//   { value: "smartphones", label: "smartphones" },
//   { value: "chair", label: "Chair" },
//   { value: "watch", label: "Watch" },
//   // { value: "mobile", label: "Mobile" },
//   // { value: "wireless", label: "Wireless" },
// ];

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#0f3460",
    color: "white",
    borderRadius: "5px",
    border: "none",
    boxShadow: "none",
    width: "200px",
    height: "40px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#0f3460" : "white",
    color: state.isSelected ? "white" : "#0f3460",
    "&:hover": {
      backgroundColor: "#0f3460",
      color: "white",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
};

const FilterSelect = ({ handleCategorySelected }) => {
  const [options, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        const allCategories = res.data.products.map(
          (product) => product.category
        );
        const uniqueCategories = [...new Set(allCategories)];
        const options = uniqueCategories.map((category) => ({
          value: category,
          label: category.charAt(0).toUpperCase() + category.slice(1), // Capitalize the first letter of the category
        }));
        setCategories(options);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (selectedOption) => {
    handleCategorySelected(selectedOption.value);
  };
  return (
    <Select
      options={options}
      defaultValue={{ value: "", label: "SORT" }}
      styles={customStyles}
      onChange={handleChange}
    />
  );
};

export default FilterSelect;
