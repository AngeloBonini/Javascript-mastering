// getElementsbyTagName
const h1 = document.getElementById('title');
h1.textContent="Some new text";
h1.style.color="white";
h1.style.backgroundColor= "black"

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + "changed";
const listItemElements = document.getElementsByTagName('li');
for (const listItem of listItemElements ){
    console.dir(listItem);
}