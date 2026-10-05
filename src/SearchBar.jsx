import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  const getRecipes = (query = "chicken") => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.meals || []);
      });
  };
  

  useEffect(() => {
    getRecipes();
  }, []);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
  const handleSearch = () => {
    if (search.trim() === "") return;

    getRecipes(search);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex justify-center gap-2 mb-10">
        <input
          type="text"
          placeholder="Search recipe..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-3 border rounded-lg outline-none"
        />

        <button
          onClick={handleSearch}
          className="bg-orange-500 text-white px-6 py-3 rounded-lg"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {meals.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}

export default SearchBar;