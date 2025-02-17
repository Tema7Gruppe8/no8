// Fetch data

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

let url = `https://dummyjson.com/products/${productId}`;

const produkt = document.querySelector(".produkt");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // Check if there are reviews
    let reviewsHTML = "";
    if (data.reviews && data.reviews.length > 0) {
      reviewsHTML = data.reviews
        .map(
          (review) => `
        <div class="rating">
          <div class="star">
            <img src="./assets/star.svg" alt="star" />
            <img src="./assets/star.svg" alt="star" />
            <img src="./assets/star.svg" alt="star" />
            <img src="./assets/star.svg" alt="star" />
            <img src="./assets/star.svg" alt="star" />
          </div>
          <p><strong>${review.reviewerName}</strong></p>
          <em>${review.comment}</em>
          <p><strong>${review.date}</strong></p>
        </div>
      `
        )
        .join(""); // Join the mapped reviews into a single HTML string
    } else {
      reviewsHTML = `<p>No reviews available.</p>`;
    }

    produkt.innerHTML = `
      <div class="grid_1-1">
        <div>
          <img src="${data.images[0]}" alt="Product image" />
        </div>
        <div class="indhold">
          <div class="deal"><p>DEAL</p></div>
          <div class="like_button"></div>
          <div class="produkt_info">
            <h2>${data.title}</h2>
            <h3>${data.brand}</h3>
            <p>${data.description}</p>
            <div class="price">
              <p><strong>EUR ${data.price},-</strong></p>
              <p class="sale_price"><strong>EUR 9.99,-</strong></p>
            </div>
          </div>
          <div class="cart_button"><a href="">Add to cart</a></div>
        </div>
      </div>
      <div class="review"><h3>Reviews</h3></div>
      <div class="grid_1-1-1">${reviewsHTML}</div>
    `;
  })
  .catch((error) => console.error("Error fetching data:", error));

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
