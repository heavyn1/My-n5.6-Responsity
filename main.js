let title = document.createElement("h1")



let text = document.createTextNode(prompt("Ismingni kirit...."))


title.appendChild(text)



let body = document.querySelector("body")



body.appendChild(text)




body.style.display = "flex";

body.style.height = "100vh";

body.style.background = "red"

body.style.justifyContent = "center";

body.style.alignItems = "center";

title.style.color = "aqua"

title.style.fontSize = "62px"
