let fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    console.log(data);

    let html = "";
    data.forEach((user) => {
      html += `
      <div class="col">
      <div class="card">
      <div class="card-body">
      <h5 class="card-title">${user.name}</h5>
      <h6 class="card-subtitle text-muted">${user.email}</h6>
      <p class="card-text">Username: ${user.username}</p>
      <p class="card-text">Phone Number: ${user.phone}</p>
      <a href="${user.website}" class="card-link"> Website </a>
      
      </div>

      </div>
      </div>
      `;
    });

    userContainer.innerHTML = html;
  } catch (error) {
    console.log(error);
  }
};

const userContainer = document.getElementById("userContainer");
