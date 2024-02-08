import { useEffect, useState } from "react";
import "./searchbar.css";
import axios from "axios";

const SearchBar = ({ setFilterList }) => {
  const [searchWord, setSearchWord] = useState("");

  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data.products);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setSearchWord(inputValue);
    if (setFilterList) {
      setFilterList(
        data.filter((item) =>
          item.title.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." value={searchWord} onChange={handleChange} />
      <ion-icon name="search-outline" className="search-icon"></ion-icon>
    </div>
  );
};

export default SearchBar;
