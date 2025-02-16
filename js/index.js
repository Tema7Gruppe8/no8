// let category_container = document.querySelector(".category_container");

// fetch(`https://dummyjson.com/products/categories`)
//     .then(response => response.json())
//     .then((data) => showCategories(data));

// function showCategories(categories) { 
//     console.log(categories);

//     // Filtrer kun de kategorier, du vil bruge
//     let filteredCategories = categories.filter(cat => 
//         cat === "beauty" || 
//         cat === "fragrances" || 
//         cat === "nail couture"
//     );

//     // Generer HTML til hver kategori:
//     const markup = filteredCategories.map(
//         (category) => `
//             <div class="category-box">
//             <a href="list.html"><img src="images/index-makeup.svg" alt="makeup"></a>
//             </div>
//         `
//     ).join("");

//     // Indsæt den genererede HTML i containeren
//     category_container.innerHTML = markup;
// }



