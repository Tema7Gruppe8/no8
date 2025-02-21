// Fetch data

const urlParams = new URLSearchParams(window.location.search);
let productId = urlParams.get("id");

let produkt = document.querySelector(".produkt");

fetch(`https://dummyjson.com/products/${productId}`)
  // linker til json fil - Med data for produkterne.
  .then((response) => response.json())
  .then((data) => {
    // Tager svaret og gør det til gyldig data.
    produkt.innerHTML = `
    <a href="list.html?category=fragrances&category=makeup&category=beauty">
      <img src="../assets/arrow_left.svg" class="arrow_left" alt="arrow" />
    </a>
    <div class="grid_1-1">
          <div>
            <img src="${data.images[0]}" alt="mascara" />
            
          </div>
        <div class="indhold">
          <div class="deal ${!data.discount && "skjul"}">
            <p>DEAL</p>
          </div>
            <div class="like_button"></div>
            <div class="produkt_info">
              <h2>${data.title}</h2>
              <h3>${data.brand}</h3>
              <p>${data.description}</p>
              <div class="price">
                <p><strong>EUR ${data.price},-</strong></p>
                <p class="sale_price ${data.discountPercentage && "vis"}"><strong>EUR ${Math.floor(data.price * (1 - data.discountPercentage / 100))},-</strong></p>
              </div>
            </div>
            <div class="cart_button">
              <a href="">Add to cart</a>
            </div>
            <div class="accordion">
            
      <details>
        <summary class="accordion-header">Details</summary>
        <div class="accordion-content">
          <p>Brand:${data.brand}</p>
          <p>Sku: ${data.sku}</p>
          <p>Weight: ${data.weight}</p>
          
        </div>
      </details>

      <details>
        <summary class="accordion-header">Stock</summary>
        <div class="accordion-content">
          <p>${data.availabilityStatus}: ${data.stock}</p>
          
        </div>
      </details>

      <details>
        <summary class="accordion-header">Shipping & Returns</summary>
        <div class="accordion-content">
          <p>Shipping: ${data.shippingInformation}</p>
          <p>Return:${data.returnPolicy}</p>
          <p>Warranty: ${data.warrantyInformation}</p>
        </div>
      </details>
    </div>
          </div>
        </div>
        <div class="review">
          <h3>Review</h3>
        </div>
        <div class="grid_1-1-1">


        ${data.reviews
          .map((data) => {
            console.log("data er: ", data);
            return `
            
          <div class="rating1">
            <p><strong>Rating:</strong> ${data.rating}/5</p>
            <em>${data.comment}</em>
            <p><strong>${data.reviewerName}</strong></p>
          </div>`;
          })
          .join("")}
          
        </div>
      `;
  });

// accordion
document.querySelectorAll(".accordion-header").forEach((button) => {
  button.addEventListener("click", function () {
    let content = this.nextElementSibling;

    // Luk andre åbne sektioner
    document.querySelectorAll(".accordion-content").forEach((item) => {
      if (item !== content) {
        item.style.maxHeight = null;
      }
    });

    // Toggle sektionen
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
