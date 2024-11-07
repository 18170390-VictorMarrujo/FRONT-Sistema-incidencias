document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
  
    // Credenciales predefinidas para pruebas
    const validUsername = "admin";
    const validPassword = "1234";
  
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      clearErrors();
  
      let hasErrors = false;
  
      // Validación de campos vacíos
      if (usernameInput.value.trim() === "") {
        showError(usernameInput, "El campo Usuario es obligatorio.");
        hasErrors = true;
      }
  
      if (passwordInput.value.trim() === "") {
        showError(passwordInput, "El campo Contraseña es obligatorio.");
        hasErrors = true;
      }
  
      // Validación de credenciales
      if (!hasErrors) {
        if (usernameInput.value === validUsername && passwordInput.value === validPassword) {
          // Redirige al dashboard si las credenciales son correctas
          window.location.href = "../views/dashboard.html";
        } else {
          // Muestra un mensaje de error si las credenciales no coinciden
          showError(passwordInput, "Usuario o contraseña incorrectos.");
        }
      }
    });
  
    function showError(input, message) {
      const formGroup = input.parentElement;
      const error = document.createElement("small");
      error.className = "text-danger";
      error.innerText = message;
      formGroup.appendChild(error);
      input.classList.add("is-invalid");
    }
  
    function clearErrors() {
      const errors = document.querySelectorAll(".text-danger");
      errors.forEach((error) => error.remove());
  
      usernameInput.classList.remove("is-invalid");
      passwordInput.classList.remove("is-invalid");
    }
  });
  