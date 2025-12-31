
// Mobile Menu Navigation (your original code fixed)
// ---------------- MOBILE NAVIGATION ----------------
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const closeBtn = document.getElementById('close');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}


// ---------------- PRODUCT SEARCH ----------------
const searchInput = document.getElementById("productSearch");
const searchBtn = document.getElementById("searchBtn");
const products = document.querySelectorAll(".pro"); // all product cards

function searchProducts() {
  const query = searchInput.value.toLowerCase();

  // If search used on home page (where products are not available)
  if (products.length === 0) {
    window.location.href = "shop.html?search=" + query;
    return;
  }

  let found = false;
  products.forEach(product => {
    const productName = product.querySelector("h5").textContent.toLowerCase();
    if (productName.includes(query)) {
      product.style.display = "block";
      found = true;
    } else {
      product.style.display = "none";
    }
  });

  if (!found) {
    alert("❌ No matching products found");
  }
}

// Search button click
if (searchBtn) {
  searchBtn.addEventListener("click", searchProducts);
}

// Press Enter to search
if (searchInput) {
  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      searchProducts();
    }
  });
}


// -------------- AUTO SEARCH WHEN REDIRECTED FROM HOME TO SHOP --------------
const urlParams = new URLSearchParams(window.location.search);
const autoSearch = urlParams.get("search");

if (autoSearch) {
  searchInput.value = autoSearch;
  searchProducts();
}
