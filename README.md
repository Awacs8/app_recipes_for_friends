# Friendly recipes

The web app for recipes and cooking tips sharing between users.
Used frameworks/libraries:
ReactJS for the frontend, NodeJS for the backend.

https://friendlyrecipes.netlify.app/

├── private<br/>
│ ├── components<br/>
│ │ ├── AddTip.js<br/>
│ │ ├── LogOut.js<br/>
│ │ ├── Navbar.js<br/>
│ │ ├── NewRecipeForm.js<br/>
│ │ ├── NewRecipePreview.js<br/>
│ │ ├── Recipe.js<br/>
│ │ ├── RecipeList.js<br/>
│ │ ├── SavedRecipes.js<br/>
│ │ ├── Search.js<br/>
│ │ ├── Select.js<br/>
│ │ ├── SingleRecipe.js<br/>
│ │ ├── TipsList.js<br/>
│ │ └── UserChange.js<br/>
│ ├── containers<br/>
│ │ ├── AddRecipe.js<br/>
│ │ ├── Main.js<br/>
│ │ ├── NewRecipe.js<br/>
│ │ ├── Profile.js<br/>
│ │ └── Tips.js<br/>
│ └── PrivateRoute.js<br/>
├── public<br/>
│ ├── components<br/>
│ │ ├── Footer.js<br/>
│ │ ├── Header.js<br/>
│ │ ├── Loader.js<br/>
│ │ ├── LogIn.js<br/>
│ │ └── Register.js<br/>
│ ├── containers<br/>
│ │ └── Welcome.js<br/>
│ └── PublicRoute.js<br/>
├── services<br/>
│ ├── api_service.js<br/>
│ └── auth_service.js<br/>
├── utils&assets<br/>
│ ├── css<br/>
│ │ ├── App.css<br/>
│ │ ├── index.css<br/>
│ │ └── recipe.css<br/>
│ ├── img<br/>
│ │ ├── chef.jpg<br/>
│ │ ├── loading.gif<br/>
│ │ └── vegetables.jpg<br/>
│ └── Pagination.js<br/>
├── App.js<br/>
├── App.test.js<br/>
└── index.js<br/>

## Functionalities

- Creating user and signing in
- Search recipes by name and filtering by category or difficulty
- Saving recipes, preview the list of saved and deleting recipes from it.
- Adding cooking tips on tips list that can be seen by all users
- Creating recipes
- Profile page with users informations
