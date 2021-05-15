{
    const onChangeHeaderText = () => {
        const body__header = document.querySelector(".body__header");
        body__header.innerText = "Witaj na mojej stronie";
    }

    const ChideMyPicture = () => {
        const image = document.querySelector(".image");
        image.classList.toggle("image--hidden");
        if (image.classList.contains("image--hidden")) {
            hideImageButton.innerText = "Pokaż zdjęcie";
        } else {
            hideImageButton.innerText = "Ukryj zdjęcie";
        }
    }

    const onChangeHeader = () => {
        const section__header = document.querySelector(".section__header");
        section__header.classList.toggle("section__headerSpecial")
    }

    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".body");

        body.classList.toggle("backgroundDark");
        if (body.classList.contains("backgroundDark")) {
            changeButtonDark.innerText = "Jasny motyw";
        } else {
            changeButtonDark.innerText = "Ciemny motyw";
        }
    }

    const init = () => {
        const changeHeaderButton = document.querySelector(".js-changeHeaderButton");
        const hideImageButton = document.querySelector(".js-hideImageButton");
        const changeImageButtonText = document.querySelector("js-changeImageButtonText");
        const container__buttonChange = document.querySelector(".container__buttonChange ");
        const changeButtonDark = document.querySelector(".js-changeButtonDark");

        changeHeaderButton.addEventListener("click", onChangeHeaderText);
        hideImageButton.addEventListener("click", ChideMyPicture);
        container__buttonChange.addEventListener("click", onChangeHeader);
        changeButtonDark.addEventListener("click", onChangeBackgroundClick);
    };

    init();

}