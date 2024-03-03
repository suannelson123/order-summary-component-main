
document.addEventListener('DOMContentLoaded', function () {
    const pageLimitSelect = document.getElementById('pageLimit');
    let currentPage = 1;
    let photosPerPage = 10;

    document.getElementById('prevPageBtn').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            loadPhotos();
        }
    });

    document.getElementById('nextPageBtn').addEventListener('click', () => {
        currentPage++;
        loadPhotos();
    });

    document.getElementById('setPageLimitBtn').addEventListener('click', setPhotosPerPage);

    function setPhotosPerPage() {
        const pageLimitSelect = document.getElementById('pageLimit');
        const newPageLimit = parseInt(pageLimitSelect.value, 10);

        console.log('Page Limit:', newPageLimit); //////////////////////////LOOOOOGOSSSSS ITSS ASS WELLLL

        if (!isNaN(newPageLimit) && newPageLimit > 0) {
            photosPerPage = newPageLimit;
            currentPage = 1;
            loadPhotos();
        }
    }

    function loadPhotos(albumId = null) {
        const startIndex = (currentPage - 1) * photosPerPage;
        let apiUrl = `https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=${photosPerPage}`;

        if (albumId) {
            apiUrl += `&_albumId=${albumId}`;
        }

        fetch(apiUrl)
            .then((res) => res.json())
            .then((photos) => {
                console.log('Fetched Data:', photos); /////CONSOLLOOOOEEEEEGG HAT LOOOOOOOOG SO COULD KNOW THE RESPONSESS

                const photoContainer = document.getElementById('photo-container');
                photoContainer.innerHTML = '';

                for (let i = 0; i < photos.length; i++) {
                    const photo = photos[i];

                    const photoElement = document.createElement('div');
                    photoElement.classList.add('photo-card');
                    photoElement.innerHTML = `
                        <p>ID: ${photo.id}</p> 
                        <img src="${photo.url}" alt="${photo.title}">
                        <p>${photo.title}</p>
                    `;

                    const image = photoElement.querySelector('img');
                    image.onclick = () => {
                        showPopup(image.src, photo.title);
                    };

                    photoContainer.appendChild(photoElement);
                }

                if (photos.length < photosPerPage) {
                    currentPage = 0;
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const searchBtn = document.querySelector('.searchbtn');
    searchBtn.addEventListener('click', searchByAlbumId);

    function searchByAlbumId() {
        const albumId = document.getElementById('album-id').value;

        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then((res) => res.json())
            .then((photos) => {
                const photoContainer = document.getElementById('photo-container');
                photoContainer.innerHTML = '';

                if (photos.length === 0) {
                    alert('Enter Valid Id');
                    return;
                }

                const firstPhotoId = photos[0].id;

                currentPage = Math.ceil((firstPhotoId + 1) / photosPerPage);

                loadPhotos(albumId);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    function showPopup(imgSrc, imgTitle) {
        const popupImage = document.querySelector('.popup-image');
        popupImage.style.display = 'block';
        popupImage.querySelector('.img-popup').src = imgSrc;

        const popupTitleElement = popupImage.querySelector('.img-title');
        popupTitleElement.innerText = imgTitle;

        const closeButton = document.querySelector('.close-button');
        closeButton.onclick = () => {
            popupImage.style.display = 'none';
        };
    }

    function pressKey(e) {
        const albumIdInput = document.getElementById('album-id');
        const albumIdValue = albumIdInput.value;
        if (e.key === 'Enter' && albumIdValue !== '') {
            searchByAlbumId();
        }
    }

    document.addEventListener('keyup', pressKey);

    
    setPhotosPerPage();
});


