 const fetchRecipes = () => {
    console.log('Fetching recipes...');
     fetch('https://dummyjson.com/recipes')
        .then(response => response.json())
        .then(data => {
            console.log('Data fetched:', data);
            this.recipes = data;
                console.log(recipes);
            this.loading = false;
                console.log(loading);
    
        })
        .catch(error => {
            console.error('error fetching:', error);
            this.loading = false;
        });
}



