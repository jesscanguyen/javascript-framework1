function clicked() {
    alert('bleh');
}

window.onload = function() {
    const click = document.getElementById('click'); // set this variable to the document object that is identified by the id "click," lets you start an event listener //

    click.addEventListener("click", (event) => {
        clicked();
    }); // basically means when your button with the ID of 'click' has a "click" event happen to it, it calls the function //
}

function randomName() {
    const names = ['jessica', 'danny', 'melody', 'luna', 'celine', 'diana', 'ciel', 'lily', 'violet', 'mina'];
    return names[Math.floor(Math.random() * names.length)];
}