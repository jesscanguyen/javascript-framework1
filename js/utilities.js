function clicked() {
    alert('haiii!');
}

window.onload = function() {
    const click = document.getElementById('click'); // set this variable to the document object that is identified by the id "click," lets you start an event listener //

    click.addEventListener("click", (event) => {
        clicked();
    }); // basically means when your button with the ID of 'click' has a "click" event happen to it, it calls the function //
}