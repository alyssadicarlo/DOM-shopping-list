'use strict';

const generateListButton = document.querySelector('#generateList');
const list = document.querySelector('#myList');

generateListButton.addEventListener('click', function () {

    const inputs = document.querySelectorAll('.input');

    list.innerHTML = "<h1>My List</h1>";

    inputs.forEach(function(item) {
        const listItem = document.createElement('p');
        listItem.innerText = item.value;
        list.append(listItem);
    });

});