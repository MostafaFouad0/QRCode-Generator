function validUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

function removePreviousImages() {
  const specificDiv = document.getElementById("qr-img");
  const images = specificDiv.getElementsByTagName("img");

  // removing all images inside of the qr-img div
  for (var i = 0; i < images.length; i++) {
    specificDiv.removeChild(images[i]);
  }
}
function generateQR(url) {
  const screenWidth = window.innerWidth;
  var imgwWidth;
  var imgwHeight;
  if (screenWidth > 763) {
    imgwWidth = 368;
    imgwHeight = 368;
  } else {
    imgwWidth = 200;
    imgwHeight = 200;
  }
  new QRCode(document.getElementById("qr-img"), {
    text: url,
    width: imgwWidth,
    height: imgwHeight,
  });
}

function downloadQR() {
  const imgURL = document.getElementById("qr-img").querySelector("img").src;
  const a = document.createElement("a");

  a.href = imgURL;
  a.download = "qr-code-image"; // file name
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function handleButtonClick() {
  const link = document.getElementById("inpt").value;
  if (!validUrl(link)) {
    document.getElementById("error").style.display = "block"; // show the error p tag
  } else {
    document.getElementById("error").style.display = "none"; // hide error p tag
    removePreviousImages();
    generateQR(link);
    document.getElementById("download-link").style.display = "block"; // show download button
  }
}

function handleImgClick() {
  document.getElementById("git").addEventListener("click", function () {
    window.location.href = "https://github.com/MostafaFouad0";
  });
  document.getElementById("linkedin").addEventListener("click", function () {
    window.location.href =
      "https://www.linkedin.com/in/mostafa-fouad-425a44259";
  });
}

function App() {
  handleImgClick();
  document.getElementById("btn").addEventListener("click", handleButtonClick);
  document
    .getElementById("download-link")
    .addEventListener("click", downloadQR);
}

App();
