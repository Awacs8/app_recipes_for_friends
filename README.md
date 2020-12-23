# Friendly recipes

The web app for recipes and cooking tips sharing between users.
For the frontend development is used ReactJS and for the backend NodeJS.

https://friendlyrecipes.netlify.app/

.
├── private
│ ├── components
│ │ ├── AddTip.js
│ │ ├── LogOut.js
│ │ ├── Navbar.js
│ │ ├── recipe.css
│ │ ├── Recipe.js
│ │ ├── RecipeList.js
│ │ ├── SavedRecipes.js
│ │ ├── Search.js
│ │ ├── Select.js
│ │ ├── TipsList.js
│ │ └── UserChange.js
│ ├── containers
│ │ ├── AddRecipe.js
│ │ ├── Main.js
│ │ ├── Profile.js
│ │ └── Tips.js
│ └── PrivateRoute.js
├── public
│ ├── components
│ │ ├── Footer.js
│ │ ├── Header.js
│ │ ├── Loader.js
│ │ ├── LogIn.js
│ │ └── Register.js
│ ├── containers
│ │ └── Welcome.js
│ └── PublicRoute.js
├── services
│ ├── api_service.js
│ └── auth_service.js
├── utils
│ ├── img
│ │ ├── chef.jpg
│ │ └── loading.gif
│ └── Pagination.js
├── App.css
├── App.js
├── App.test.js
├── index.css
├── index.js
└── logo.svg

## Functionalities

- Creating and signing in users
- Search recipes by name and filtering by category or difficulty
- Saving recipes, preview the list of saved and deleting recipes from it.
- Adding cooking tips on tips list that can be seen by all users
- Creating recipes
- Profile page with users informations
