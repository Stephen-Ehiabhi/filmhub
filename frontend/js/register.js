const registerUser = () => {
  const form = document.getElementById("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    //window.history.back

    const errorMessage = document.querySelector(".errors");
    const successMessage = document.querySelector(".success");

     
    const name = document.querySelector(".name").value;
    const username = document.querySelector(".username").value;
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;

    const formData = () => {
      email, name, username, password;
    };

    try {
      const res = await fetch("/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
       
      const data = await res.json();
       console.log(data);

       //attaching the responses from the db
       successMessage.textContent = data.success
       errorMessage.textContent = data.error
    } catch (error) {
       console.log(error);
    }
  });
};
registerUser();

const seePassword = () => {
  const eye = document.querySelector(".eye");
  const seePassword = document.querySelector(".password");

  eye.addEventListener("click", () => {
    seePassword.type = "text";
  });
};
seePassword();
