export const RecipeResumeList = ({recipes, onAddRecipe, onAddRecipe2}) => (
    <div>
        {recipes.map(recipe =>
            <RecipeResume title={recipe.get('title')} category={recipe.get('category')} />
        )}
        <RecipeAddForm onAddRecipe2={onAddRecipe2} />
    </div>
)
