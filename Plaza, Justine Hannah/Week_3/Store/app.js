let fetchData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    console.log(data);

    let html = "";
    data.forEach((product) => {
      html += `
      <div class="col-6 col-md-3">
      <div class="card">
      <img class="card-img-top" src="${product.image}" alt="${product.title}">
      <div class="card-body">
      <h5 class="card-title">${product.title}</h5>
      <h6 class="card-subtitle text-muted">$${product.price}</h6>
      <p>${product.description}</p>
  
      </div>
      </div>
      </div>
      `;
    });

    const productContainer = document.getElementById("productContainer");
    productContainer.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
};

fetchData();
