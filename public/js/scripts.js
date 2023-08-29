let array = [1, 2];

function openMenu() {
    let links = document.getElementById("links");
    if (links.style.display == "flex") {
        links.style.display = "none";
    } else {
        links.style.display = "flex";
    }
}

let form__update = document.getElementById("form-finish");

form__update.addEventListener("submit", (e) => {
    e.preventDefault();

    let productName = document.getElementById("name").value;
    let name_prodRegex = /(^[A-Z 0-9])[ A-Za-z 0-9.']{0,30}$/;
    let productPrice = document.getElementById("price").value;
    let regexPrice = /^[0-9]+([.][0-9]+)?$/;
    let productStock = document.getElementById("stock").value;
    let stockRegex = /^[0-9]+$/;
    let productDescription = document.getElementById("description").value;
    let short_descriptionRegex = /^[A-Za-z0-9\s]{1,30}$/;
    let errorMessage = document.getElementById("error");

    if (productName.length <= 0 || productName.length > 30) {
        errorMessage.innerHTML = `<p>El nombre debe tener entre 1 y 30 caracteres</p>`;
        errorMessage.style.display = "flex";
    } else if (!name_prodRegex.test(productName)) {
        errorMessage.innerHTML = `<p>El nombre ' ${productName} ' no es válido. El nombre debe comenzar con mayuscula y solo se permiten caracteres de tipo letra</p>`;
        errorMessage.style.display = "flex";
    } else {
        errorMessage.innerHTML = "";
        errorMessage.style.display = "none";
    }

    if (productPrice.length <= 0 || productPrice.length > 30) {
        errorMessage.innerHTML = `<p>El precio debe tener entre 1 y 30 caracteres</p>`;
        errorMessage.style.display = "flex";
    } else if (!regexPrice.test(productPrice)) {
        errorMessage.innerHTML += `<p>El precio debe tener caracteres válidos</p>`;
        errorMessage.style.display = "flex";
        errorMessage.innerHTML += `<p>El precio ' ${productPrice} ' no es válido</p>`;
    } else {
        errorMessage.innerHTML = "";
        errorMessage.style.display = "none";
    }

    if (productStock.length <= 0 || productStock.length > 30) {
        errorMessage.innerHTML = `<p>El stock debe tener entre 1 y 30 caracteres</p>`;
        errorMessage.style.display = "flex";
    } else if (!stockRegex.test(productStock)) {
        errorMessage.innerHTML = `<p>El stock debe tener caracteres válidos</p>`;
        errorMessage.style.display = "flex";
        errorMessage.innerHTML += `<p>El stock ' ${productStock} ' no es válido</p>`;
    } else {
        errorMessage.innerHTML = "";
        errorMessage.style.display = "none";
    }

    if (productDescription.length < 2 || productDescription.length > 30) {
        errorMessage.innerHTML = `<p>La descripción larga debe tener entre 2 y 30 caracteres</p>`;
        errorMessage.style.display = "flex";
    } else if (!short_descriptionRegex.test(productDescription)) {
        errorMessage.innerHTML = `<p>La descripción debe tener caracteres válidos</p>`;
        errorMessage.style.display = "flex";
        errorMessage.innerHTML += `<p>La descripción ' ${productDescription} ' no es válido</p>`;
    } else {
        errorMessage.innerHTML = "";
        errorMessage.style.display = "none";
    }
});
