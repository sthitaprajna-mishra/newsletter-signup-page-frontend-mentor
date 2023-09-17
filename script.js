function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

document
  .getElementById("submit-button")
  .addEventListener("click", function (event) {
    const emailInput = document.getElementById("email-input");
    const emailMessage = document.getElementById("message");
    const email = emailInput.value.trim();

    console.log(email);

    if (!isValidEmail(email)) {
      event.preventDefault();

      emailInput.classList.add("invalid-email");
      emailMessage.style.display = "inline";
    } else {
      emailInput.classList.contains("invalid-email") &&
        emailInput.classList.remove("invalid-email");

      emailMessage.style.display = "none";

      const modal = document.getElementsByClassName("wrapper")[0];
      const container = document.getElementsByClassName("container")[0];
      const emailDisplay = document.getElementById("input-email");

      container.style.display = "none";

      emailDisplay.innerText = email;

      modal.style.display = "flex";
    }
  });

document
  .getElementById("dismiss-button")
  .addEventListener("click", function (event) {
    const modal = document.getElementsByClassName("wrapper")[0];
    const container = document.getElementsByClassName("container")[0];

    modal.style.display = "none";
    container.style.display = "grid";
  });
