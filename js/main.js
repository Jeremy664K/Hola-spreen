const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const optionsButtons = $$(".option");
const menuButton = $(".nav__menu");
const personalizedUserAwards = $("#option_user");

let awards = [
  `${Math.floor(Math.random() * 20 + 1)} subs`,
  `${Math.floor(Math.random() * 5000 + 1)} bits`,
  `SP`,
  `${Math.floor(Math.random() * 25 + 1)}$ paypal`,
  `RE`,
  `1 sub`,
  `${Math.floor(Math.random() * 100 + 1)} bits`,
  "EN",
  `${Math.floor(Math.random() * 5 + 1)} subs`,
  `1 sub`,
  "1k bits",
];

for (let i = 0; i < optionsButtons.length; i++) {
  optionsButtons[i].addEventListener("click", () => {
    const selectButton = optionsButtons[i];
    let awardsLength = awards.length - 1;
    
    if (selectButton.childElementCount != 0) {
      let randomAward = Math.round(Math.random() * awardsLength);

      selectButton.textContent = awards[randomAward];
      awards.splice(randomAward, 1);
      selectButton.classList.add("selected_button-animation");
    }
  });
}
menuButton.addEventListener("click", () => {
  $(".config").classList.toggle("config_active");

  menuButton.classList.toggle("config_active");

  menuButton.classList.contains("config_active")
    ? (menuButton.textContent = "×")
    : (menuButton.textContent = "≡");
});

$("#light_mode").addEventListener("click", () => {
  document.body.classList.toggle("light_mode");

  $(".config").classList.toggle("light_mode");
  $$("button").forEach((el) => el.classList.toggle("light_mode"));
});

$("#reset").addEventListener("click", () => {
  awards = [
    `${Math.floor(Math.random() * 20 + 1)}subs`,
    `${Math.floor(Math.random() * 5000 + 1)} bits`,
    `SP`,
    `${Math.floor(Math.random() * 25 + 1)}$ paypal`,
    `RE`,
    `1 sub`,
    `${Math.floor(Math.random() * 100 + 1)} bits`,
    "EN",
    `${Math.floor(Math.random() * 5 + 1)}subs`,
    `1 sub`,
    "1k bits",
  ];

  $("#option_user").value = "";

  for (let i = 0; i < optionsButtons.length; i++) {
    const imageDefault = document.createElement("img");

    imageDefault.src = `img/eleccion_${i + 1}.jpg`;
    imageDefault.alt = `eleccion ${i + 1}`;
    imageDefault.loading = "lazy";
    imageDefault.decoding = "async";

    optionsButtons[i].textContent = "";
    optionsButtons[i].classList.remove("selected_button-animation");
    optionsButtons[i].appendChild(imageDefault);
  }

  alert("Partida reiniciada correctamente");
});

personalizedUserAwards.addEventListener("keyup", () => {
  let userAwards = personalizedUserAwards.value.split("\n");
  awards = userAwards;
  awards = awards.filter((el) => el != "");
});