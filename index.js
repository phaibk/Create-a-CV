document.querySelector(".form").onsubmit = function (event) {
  event.preventDefault();
  let info = {
    name: document.getElementById("name").value,
    work: document.getElementById("work").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    birthday: document.getElementById("birthday").value,
    gender: document.querySelector("input[name=gender]:checked").value,
    address: document.getElementById("address").value,
    facebook: document.getElementById("facebook").value,
    words: document.getElementById("word").value,
    excel: document.getElementById("excel").value,
    power: document.getElementById("power-point").value,
    outlook: document.getElementById("outlook").value,
    listen: document.getElementById("listen").value,
    speak: document.getElementById("speak").value,
    read: document.getElementById("read").value,
    write: document.getElementById("write").value,
    target: document.getElementById("target").value,
    school: document.getElementById("school").value,
    startstudy: document.getElementById("start-study").value,
    endstudy: document.getElementById("end-study").value,
    education: document.getElementById("education").value,
    company: document.getElementById("company").value,
    startwork: document.getElementById("start-work").value,
    endwork: document.getElementById("end-work").value,
    expericence: document.getElementById("experience").value,
    activity: document.getElementById("activity").value,
  };

  renderItem(info);
};

function renderItem(info) {
  document.getElementById("cvo-profile-fullname").innerHTML = info.name;
  document.getElementById("cvo-profile-title").innerHTML = info.work;
  document.getElementById("cvo-profile-dob").innerHTML = info.birthday;
  document.getElementById("cvo-profile-gender").innerHTML = info.gender;
  document.getElementById("cvo-profile-phone").innerHTML = info.phone;
  document.getElementById("cvo-profile-email").innerHTML = info.email;
  document.getElementById("cvo-profile-address").innerHTML = info.address;

  //Process of MS skills
  let wordstar = info.words;
  let word = "";
  for (let i = 0; i < wordstar; i++) {
    document.getElementsByClassName("wordstar")[i].className =
      "fa-solid fa-star wordstar";
  }
  for (let i = wordstar; i < 5; i++) {
    document.getElementsByClassName("wordstar")[i].className =
      "fa-regular fa-star wordstar";
  }

  let exelstar = info.exel;
  let exel = "";
  for (let i = 0; i < exelstar; i++) {
    document.getElementsByClassName("exelstar")[i].className =
      "fa-solid fa-star exelstar";
  }
  for (let i = exelstar; i < 5; i++) {
    document.getElementsByClassName("exelstar")[i].className =
      "fa-regular fa-star exelstar";
  }

  let powerstar = info.power;
  let power = "";
  for (let i = 0; i < powerstar; i++) {
    document.getElementsByClassName("powerstar")[i].className =
      "fa-solid fa-star powerstar";
  }
  for (let i = powerstar; i < 5; i++) {
    document.getElementsByClassName("powerstar")[i].className =
      "fa-regular fa-star powerstar";
  }

  let outlookstar = info.outlook;
  let outlook = "";
  for (let i = 0; i < outlookstar; i++) {
    document.getElementsByClassName("outlookstar")[i].className =
      "fa-solid fa-star outlookstar";
  }
  for (let i = outlookstar; i < 5; i++) {
    document.getElementsByClassName("outlookstar")[i].className =
      "fa-regular fa-star outlookstar";
  }

  document.getElementById("english-listen").value = info.listen.toString();
  document.getElementById("english-speak").value = info.speak.toString();
  document.getElementById("english-read").value = info.read.toString();
  document.getElementById("english-write").value = info.write.toString();
  document.getElementById("cvo-objective-objective").innerHTML = info.target;
  document.getElementById("cvo-education-school").innerHTML = info.school;
  document.getElementById("cvo-education-start").innerHTML = info.startstudy;
  document.getElementById("cvo-education-end").innerHTML = info.endstudy;
  document.getElementById("cvo-education-des").innerHTML = info.education;
  document.getElementById("experience-company").innerHTML = info.company;
  document.getElementById("experience-start-work").innerHTML = info.startwork;
  document.getElementById("experience-end-work").innerHTML = info.endwork;
  document.getElementById("experience-end-des").innerHTML = info.expericence;
  document.getElementById("activity-des").innerHTML = info.activity;
}
