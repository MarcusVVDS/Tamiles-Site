document.getElementById('toggleButton').addEventListener('click', function() {
    var div = document.getElementById('myDiv');
    var content = document.getElementById('content');

    if (div.classList.contains('hidden')) {
        div.classList.remove('hidden');
        div.classList.add('visible');
        content.classList.add('hidden-content');
    } else {
        div.classList.remove('visible');
        div.classList.add('hidden');
        content.classList.remove('hidden-content');
    }
});
