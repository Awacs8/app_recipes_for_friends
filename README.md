# Friendly recipes

The web app for recipes and cooking tips sharing between users.
For the frontend development is used ReactJS and for the backend NodeJS.

https://friendlyrecipes.netlify.app/

.
├── private<br/>
│ ├── components<br/>
│ │ ├── AddTip.js<br/>
│ │ ├── LogOut.js<br/>
│ │ ├── Navbar.js<br/>
│ │ ├── recipe.css<br/>
│ │ ├── Recipe.js<br/>
│ │ ├── RecipeList.js<br/>
│ │ ├── SavedRecipes.js<br/>
│ │ ├── Search.js<br/>
│ │ ├── Select.js<br/>
│ │ ├── TipsList.js<br/>
│ │ └── UserChange.js<br/>
│ ├── containers<br/>
│ │ ├── AddRecipe.js<br/>
│ │ ├── Main.js<br/>
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
├── utils<br/>
│ ├── img<br/>
│ │ ├── chef.jpg<br/>
│ │ └── loading.gif<br/>
│ └── Pagination.js<br/>
├── App.css<br/>
├── App.js<br/>
├── App.test.js<br/>
├── index.css<br/>
├── index.js<br/>
└── logo.svg<br/>

## Functionalities

- Creating and signing in users
- Search recipes by name and filtering by category or difficulty
- Saving recipes, preview the list of saved and deleting recipes from it.
- Adding cooking tips on tips list that can be seen by all users
- Creating recipes
- Profile page with users informations
