let revBut = document.getElementById("revStri");
revBut.addEventListener("click", revStr);

function revStr() {
  let revTxt = document.getElementById("revString").textContent;


  let reversedText = '';
    for (let i = revTxt.length - 1; i >= 0; i--) {
      reversedText += revTxt[i];
    }

    document.getElementById("revString").textContent = reversedText;

}
    






