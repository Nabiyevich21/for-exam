//* get Html content
const singUP = document.getElementById("singUP");
const SingIN = document.getElementById("SingIN");

// const inputUsername = document.querySelector("#input__username");
// const inputPassword = document.querySelector("#input__password");

//* get Html content with username and password
singUP.addEventListener("submit", async (e) => {
  e.preventDefault();
  let inputNumber = e.target[0];
  let inputPassword = e.target[1];
  //   console.log(inputNumber);
  //   console.log(inputPassword);

  try {
    const resEl = await fetch("https://bd.minimatch.uz/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: inputNumber.value,
        password: inputPassword.value,
      }),
    });
    console.log(resEl);
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
  let inputNumber = event.target[0];
  let inputPassword = event.target[1];
  try {
    const resELLogin = await fetch("https://bd.minimatch.uz/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: inputNumber.value,
        password: inputPassword.value,
      }),
    });
    console.log(resELLogin);
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
