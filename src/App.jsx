import { useState, useEffect } from 'react'

export default function App() {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [meals, setMeals] = useState([])

  // Load category list on page load
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((res) => res.json())
      .then((data) => setCategories(data.categories || []))
      .catch(() => setCategories([]))
  }, [])

  // Fetch meals when "View Meals" is clicked (API-2)
  const handleViewMeals = (categoryName) => {
    setSelectedCategory(categoryName)
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(
      categoryName
    )}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals || []))
      .catch(() => setMeals([]))
  }

  // If a category is clicked, display the meals list
  if (selectedCategory) {
    return (
      <div>
        <button onClick={() => setSelectedCategory(null)}>Back to Categories</button>
        <h1>Meals in {selectedCategory}</h1>
        {meals.map((meal) => (
          <div key={meal.idMeal}>
            {/* Meal Thumbnail */}
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            
            {/* Meal Name */}
            <h3>{meal.strMeal}</h3>
            
            {/* View Details Button */}
            <button onClick={() => alert(`View details for: ${meal.strMeal}`)}>
              View Details
            </button>
          </div>
        ))}
      </div>
    )
  }

  // Default view: Meal Categories list
  return (
    <div>
      <h1>Meal Categories</h1>
      {categories.map((cat) => (
        <div key={cat.idCategory}>
          <img src={cat.strCategoryThumb} alt={cat.strCategory} />
          <h3>{cat.strCategory}</h3>
          <button onClick={() => handleViewMeals(cat.strCategory)}>
            View Meals
          </button>
        </div>
      ))}
    </div>
  )
} 
