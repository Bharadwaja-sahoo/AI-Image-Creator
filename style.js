function generateImage() {
    const text = document.getElementById('textInput').value;
    const imageContainer = document.getElementById('imageContainer');
    
    // You can make an AJAX call here to fetch image based on text input
    // For demonstration purposes, let's just display a placeholder image
    const placeholderImageUrl = 'https://source.unsplash.com/featured/?' + text;
    
    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', placeholderImageUrl);
    imageElement.setAttribute('class', 'img-fluid');
    
    imageContainer.innerHTML = '';
    imageContainer.appendChild(imageElement);
}