[Lightbox Gallery in JavaScript - by CodingNepal](https://youtu.be/rz_8NDyC6Xk)

## What I learned:

-   Technique for centering elements:

    ```CSS
    /*centering the preview box on the screen*/
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    ```

-   How to use JS for dynamically changing element state.

    -   Changing element attribute (src) values dynamically with JS:

        ```JS
        let selectedImgUrl = gallery[imageIndex].querySelector("img").src; //getting URL of image the user clicked on
        previewImg.src = selectedImgUrl //setting preview image source as the URL of image the user clicked on
        ```

    -   For loop accesses all children of the gallery element, which are all the images. Then we are listening for click event on any of the child element, that is, the user clicking on any image. On click, the preview box is shown.

        ```JS
        window.onload = () => {

            for(let imageIndex = 0; imageIndex < gallery.length; imageIndex++){

                //gallery holds all the images
                gallery[imageIndex].onclick = () => {
                    ...
                }
                ...
            }
        }
        ```

-   I am trying to get used to event based thinking and programming.

## Screenshots

![Gallery View](.\my-project-screenshots\Lightbox-Gallery-001.png)
![Preview View](.\my-project-screenshots\Lightbox-Gallery-002.png)
![Showing dynamic changes](.\my-project-screenshots\Lightbox-Gallery-003.png)
