const checks = document.querySelectorAll(".room");
const sName = document.getElementById("sendName");

let room = '0';

//LocalStorage
//Recuperación de tema actual
let tema = localStorage.getItem('tema')
if(tema !== null){
    document.body.style.backgroundImage="url('/themes/" + tema + "/" + tema + ".gif')";
}else{
    localStorage.setItem('tema', 'Forest-Gray')
}

sName.addEventListener('click', function () {
  console.log("Click!");
  let uname = document.getElementById("username").value;
  if(uname !== "" && room !== '0'){
    console.log(uname);
    window.location.href = 'versus.html';
  }
});

// plus.addEventListener('click', function () {
//   console.log("Click!")
//   asyncfunc();
// });

checks.forEach(check => {
  check.addEventListener('click', function handleClick(event) {
    if (this.checked) {
      console.log("Checkbox is checked.");
      room = this.value;
    } else {
      console.log("Checkbox is not checked.");
      room = '0';
    }
    console.log(room)
    //check.setAttribute('style', 'background-color: yellow;');
  });
});
