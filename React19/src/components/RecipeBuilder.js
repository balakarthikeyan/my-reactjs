import { useState, useEffect } from "react";
import { Activity } from "react";

const RecipeBuilder = () => {
    const [selectedRecipe, setSelectedRecipe] = useState("pasta");
    const recipes = ["pasta", "soup", "salad"];

    console.log("Active recipe:", selectedRecipe);

    return (
        <div className="recipe-app">
            <div className="recipe-tabs">
                {recipes.map((recipe) => (
                    <button
                        key={recipe}
                        onClick={() => setSelectedRecipe(recipe)}
                        className={selectedRecipe === recipe ? "active" : ""}
                    >
                        {recipe.toUpperCase()}
                    </button>
                ))}
            </div>

            <Activity mode={selectedRecipe === "pasta" ? "visible" : "hidden"}>
                <RecipeCustomizer
                    name="Creamy Pasta"
                    defaultIngredients={["pasta", "cream", "garlic", "parmesan"]}
                />
            </Activity>

            <Activity mode={selectedRecipe === "soup" ? "visible" : "hidden"}>
                <RecipeCustomizer
                    name="Tomato Soup"
                    defaultIngredients={["tomatoes", "onion", "basil", "stock"]}
                />
            </Activity>

            <Activity mode={selectedRecipe === "salad" ? "visible" : "hidden"}>
                <RecipeCustomizer
                    name="Caesar Salad"
                    defaultIngredients={["lettuce", "croutons", "caesar dressing"]}
                />
            </Activity>
        </div>
    );
};

const RecipeCustomizer = ({ name, defaultIngredients }) => {
    const [ingredients, setIngredients] = useState(defaultIngredients);
    const [servings, setServings] = useState(2);
    const [notes, setNotes] = useState("");

    useEffect(() => {
        console.log(`${name} mounted with ${ingredients.length} ingredients`);
        return () => console.log(`${name} hidden (Activity cleanup)`);
    }, []);

    const addIngredient = () => {
        const newItem = prompt("Add ingredient:");
        if (newItem) setIngredients([...ingredients, newItem]);
    };

    return (
        <div className="recipe-card">
            <h2>{name}</h2>
            <p>Servings: {servings}</p>
            <button onClick={addIngredient}>+ Add Ingredient</button>
            <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Notes..."
            />
            <ul>{ingredients.join(", ")}</ul>
        </div>
    );
};

export default RecipeBuilder;