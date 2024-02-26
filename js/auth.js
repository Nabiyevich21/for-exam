//* get Html content
const singUP = document.getElementById("singUP");
const SingIN = document.getElementById("SingIN");
// const inputUsername = document.querySelector("#input__username");
// const inputPassword = document.querySelector("#input__password");

//* get Html content with username and password
singUP.addEventListener("submit", async (e) => {
  e.preventDefault();
  let inputUsername = e.target[0];
  let inputPassword = e.target[1];

  try {
    const resEl = await fetch("https://todo-for-n92.cyclic.app/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: inputUsername.value,
        password: inputPassword.value,
      }),
    });
    if (!resEl.ok) {
      throw new Error("Error on registration request");
    }
    const users = await resEl.json();
    // console.log(users);
    alert("Registration successful");
    localStorage.setItem("token", users.token);
    window.location.href = "../index.html";
  } catch (error) {
    console.log(error.message + "error");
  }
});

//* get login
SingIN.addEventListener("submit", async (event) => {
  event.preventDefault();
  let inputUsername = event.target[0];
  let inputPassword = event.target[1];
  try {
    const resELLogin = await fetch(
      "https://todo-for-n92.cyclic.app/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: inputUsername.value,
          password: inputPassword.value,
        }),
      }
    );
    if (!resELLogin.ok) {
      throw new Error("Error on login request");
    }
    const user = await resELLogin.json();
    // console.log(users);
    alert("Login successful");
    localStorage.setItem("token", user.token);
    window.location.href = "../index.html";
  } catch (error) {
    console.log(error.message + "error");
  }
});
