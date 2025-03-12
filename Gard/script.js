document.getElementById('upload').addEventListener('change', function(event) {
    const files = event.target.files;
    const photoGrid = document.getElementById('photoGrid');

    for (let file of files) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            photoGrid.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});
