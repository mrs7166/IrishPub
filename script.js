const images = document.querySelectorAll('.menu-item img');

images.forEach(image => {
    image.addEventListener('click', () => {
        const enlargedImage = document.createElement('div');
        enlargedImage.classList.add('enlarged-image');

        const imgClone   
 = image.cloneNode(true);
        enlargedImage.appendChild(imgClone);

        const description = document.createElement('p');
		description.setAttribute("id", "p4")
        description.textContent = image.alt;
        enlargedImage.appendChild(description);

        document.body.classList.add('blurred');
        document.body.appendChild(enlargedImage);

        enlargedImage.addEventListener('click', () => {
            enlargedImage.remove();
            document.body.classList.remove('blurred');
        });
    });
});