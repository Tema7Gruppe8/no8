const productList = document.querySelector("main");
let url = `https://dummyjson.com/products?limit=0`;
let selectedCategories = ["beauty", "fragrances", "skin-care"];

function hentData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Filter products by checking if their category is in the selectedCategories array
      const filteredProducts = data.products.filter((product) => selectedCategories.includes(product.category));
      show(filteredProducts);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function show(products) {
  const markup = products
    .map((product) => {
      const finalPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2);

      const discountLabel = product.discountPercentage ? `<p class="product_discount">Deal</p>` : "";

      const soldOutLabel = product.stock === 0 ? `<p class="product_soldout">Sold Out</p>` : "";

      const priceDisplay = product.discountPercentage
        ? `<p class="product_ice">
            <span class="original_price" style="text-decoration: line-through; color: red;">$${product.price}</span> 
            <span class="discounted_price">$${finalPrice}</span>
          </p>`
        : `<p class="product_price">$${product.price}</p>`;

      return `<article>
          ${discountLabel}
          ${soldOutLabel}
          <label>
          <input type="checkbox" id="fav-toggle">
          <span class="heart-container"></span>
          </label>
          <a href=""><img src="${product.thumbnail}" alt="" /></a>
          <h3 class="product_name">${product.title}</h3>
          <p class="product_brand">${product.brand}</p>
            <p class="product_tags">${product.tags.join(", ")}</p>
          <p class="product_price">${product.price}</p>
          ${priceDisplay}
        </article>`;
    })
    .join("");

  productList.innerHTML = markup;
}

hentData();
