//function to make a post request to the backend api
const fetchRoutes = () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const errorMessage = document.querySelector(".errors");
    const successMessage = document.querySelector(".success");

    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;

    const formData = {
      email,
      password,
    };

    try {
      const fetchedData = await fetch("/user/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await fetchedData.json();
      console.log(data);

      //attaching the responses from the db
      successMessage.textContent = data.success;
      errorMessage.textContent = data.error;
    } catch (error) {
      console.log(error);
    }
  });
};
fetchRoutes();

//function to view the password
const viewPassword = () => {
  const eye = document.querySelector(".eye");
  const seePassword = document.querySelector(".password");

  eye.addEventListener("click", () => {
    seePassword.type = "text";
  });
};
viewPassword();
