const gallery = document.querySelectorAll("main article"),
    previewBox = document.querySelector(".preview-box"),
    previewImg = previewBox.querySelector("article img"),
    previewTitle = previewBox.querySelector("article .caption .title"),
    previewDescription = previewBox.querySelector(
        "article .caption .description"
    ),
    closeIcon = previewBox.querySelector("article .close"),
    prevBtn = previewBox.querySelector("article .slide.prev"),
    nextBtn = previewBox.querySelector("article .slide.next"),
    shadow = document.querySelector(".shadow");

window.onload = () => {
    for (let imageIndex = 0; imageIndex < gallery.length; imageIndex++) {
        let clickImgIndex;

        gallery[imageIndex].onclick = () => {
            clickImgIndex = imageIndex;

            function preview() {
                previewImg.src = gallery[imageIndex].querySelector("img").src;
                previewTitle.innerText =
                    gallery[imageIndex].querySelector("h2").innerText;
                previewDescription.innerText =
                    gallery[imageIndex].querySelector("p").innerHTML;
            }
            preview();
            previewBox.classList.add("show");
            shadow.style.display = "block";
            document.querySelector("body").style.overflow = "hidden";

            //previous and next button functionality
            if (imageIndex == 0) {
                prevBtn.style.display = "none";
            }
            if (imageIndex >= gallery.length - 1) {
                nextBtn.style.display = "none";
            }

            prevBtn.onclick = () => {
                imageIndex--;

                if (imageIndex == 0) {
                    preview();
                    prevBtn.style.display = "none";
                } else {
                    preview(); //call to update image
                    nextBtn.style.display = "block";
                }
            };

            nextBtn.onclick = () => {
                imageIndex++;

                if (imageIndex >= gallery.length - 1) {
                    preview();
                    nextBtn.style.display = "none";
                } else {
                    preview(); //call to update image
                    prevBtn.style.display = "block";
                }
            };

            closeIcon.onclick = () => {
                imageIndex = clickImgIndex; //resetting the imageIndex to point to the image the user first clicked on
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "auto";
            };
        };
    }
};
