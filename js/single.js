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
              <button class="accordion-header">Details</button>

              <div class="accordion-content">
                <p>Brand:${data.brand}</p>
                <p>Sku: ${data.sku}</p>
                <p>Weight: ${data.weight}</p>
                <p>Dimensions: width: ${data.width}, height: ${data.height}, depth: ${data.depth}</p>
              </div>

              <button class="accordion-header">Stock</button>
              <div class="accordion-content">
                <p>${data.availabilityStatus}:</p>
                <p>${data.stock}</p>
              </div>

              <button class="accordion-header">Shipping & Returns</button>
              <div class="accordion-content">
                <p>Shipping: ${data.shippingInformation}</p>
                <p>Return:${data.returnPolicy} </p>
                <p>Warranty: ${data.warrantyInformation}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="review">
          <h3>Review</h3>
        </div>
        <div class="grid_1-1-1">
          <div class="rating1">
            <div class="star">
              <img src="./assets/star.svg" alt="star" />
              <img src="./assets/star.svg" alt="star" />
              <img src="./assets/star.svg" alt="star" />
              <img src="./assets/star.svg" alt="star" />
              <img src="./assets/star.svg" alt="star" />
            </div>
            <p><strong>${data.reviewerName}</strong></p>
            <em>${data.comment}</em>
            <p><strong>${data.date}</strong></p>
          </div>
          <div class="rating2">
            <div class="star">
              <img src="./assets/star.svg" alt="star" />
              <img src="./assets/star.svg" alt="star" />
              <img src="./assets/star.svg" alt="star" />
              <img src="./assets/star.svg" alt="star" />
              <img src="./assets/star.svg" alt="star" />
            </div>
            <p><strong>${data.reviewerName}</strong></p>
            <em>${data.comment}</em>
            <p><strong>${data.date}</strong></p>
          </div>
          <div class="rating3">
            <div class="star">
              <img src="./assets/star.svg" alt="star" />
              <img src="./assets/star.svg" alt="star" />
              <img src="./assets/star.svg" alt="star" />
              <img src="./assets/star.svg" alt="star" />
              <img src="./assets/star.svg" alt="star" />
            </div>
            <p><strong>${data.reviewerName}</strong></p>
            <em>${data.comment}</em>
            <p><strong>${data.date}</strong></p>
          </div>
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
