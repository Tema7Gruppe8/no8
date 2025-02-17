// const categoryContainer = document.querySelector(".category_container");
// let url = `https://dummyjson.com/products/categories`;

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => showCategories(data));

// function showCategories(categories) {
//   console.log(categories);

//   // Filtrer kun de kategorier, du vil bruge
//   let filteredCategories = categories.filter((cat) => cat === "beauty" || cat === "fragrances" || cat === "nail couture");

//   // Generer HTML til hver kategori:
//   const markup = filteredCategories
//     .map(
//       (element) => `<div class="category_container">
//             <div class="category-box">
//             <a href="list.html?category=beauty"><img src="images/index-makeup.svg" alt="makeup" /></a>
//           </div>
//           <div class="category-box">
//             <a href="list.html?category=fragrances"><img src="images/index-frag-her.svg" alt="frag-her" /></a>
//           </div>
//           <div class="category-box">
//             <a href="list.html?category=fragrances"><img src="images/index-frag-men.svg" alt="frag-him" /></a>
//           </div>
//           <div class="category-box">
//             <a href="list.html?category=nailcouture"><img src="images/index-nailpolish.svg" alt="nails" /></a>
//           </div>`
//     )
//     .join("");

//   categoryContainer.innerHTML = ``;

//   // Indsæt den genererede HTML i containeren
//   categoryContainer.innerHTML = markup;
// }
