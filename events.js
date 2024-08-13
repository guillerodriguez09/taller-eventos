const parentDiv = document.getElementById('parentDiv');
const childButton = document.getElementById('childButton');

parentDiv.addEventListener('click', function() {
    console.log('Div clicked');
});

childButton.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log('Button clicked');
});
