function print(message) {
    console.log(message)
}

function initialise() {
    console.log(window.innerHeight);
    document.getElementById("left").style.height = `${window.innerHeight}px`;
}

function display(id) {
    print(id);
    document.getElementById("image").src = `images/card_${id}.png`;
    document.getElementById("name").innerHTML = document.getElementById(`${id}a`).innerHTML;
    document.getElementById("description").innerHTML = document.getElementById(`${id}b`).innerHTML;
}
