var form = document.querySelector(".hero__form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.querySelector(".hero__status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Oops! There was a problem logging in";
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem logging in";
    });
}
form.addEventListener("submit", handleSubmit);
