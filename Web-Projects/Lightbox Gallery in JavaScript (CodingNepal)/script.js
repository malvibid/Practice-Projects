//selecting required elements
const gallery = document.querySelectorAll(".gallery .image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow"),
prevBtn = document.querySelector(".prev"),
nextBtn = document.querySelector(".next");

window.onload = () => {
    //once window loaded
    for(let imageIndex = 0; imageIndex < gallery.length; imageIndex++){
        
        
        totalImg.textContent = gallery.length; //displays number of total images in the gallery in the preview.  
        
        
        let clickImgIndex
        
        // console.log(gallery[i]) //gallery holds all the children (.image) of .gallery 
        gallery[imageIndex].onclick = () => {
            
            //For each image in the gallery, imageIndex points to that images URL in preview section.
            clickImgIndex = imageIndex //storing clicked img index so that we can later reset imageIndex to point to the URL of image first clicked on 
            
            //now we can freely manipulate imageIndex when previous/next button is clicked 

            function preview(){

                currentImg.textContent = imageIndex + 1; //displays number of current image being previewed.

                let selectedImgUrl = gallery[imageIndex].querySelector("img").src; //getting URL of image the user clicked on 
                previewImg.src = selectedImgUrl //setting preview image source as the URL of image the user clicked on
                
            }
            
            preview(); 
            previewBox.classList.add("show")
            shadow.style.display = "block"
            document.querySelector("body").style.overflow = "hidden"


            //previous and next button functionality
        
            if(imageIndex == 0){
                prevBtn.style.display = "none"
            }
            if(imageIndex >= gallery.length - 1){
               nextBtn.style.display = "none"
            }

            prevBtn.onclick = () => {
                
                imageIndex--
                
                if(imageIndex == 0){
                    preview()
                    prevBtn.style.display = "none"
                }else{
                    preview() //call to update image
                    nextBtn.style.display = "block"
                }
            
            }

            nextBtn.onclick = () => {
                
                imageIndex++
                
                if(imageIndex >= gallery.length - 1){
                    preview()
                    nextBtn.style.display = "none"
                }else{
                    preview() //call to update image
                    prevBtn.style.display = "block"
                }
                
            }


            closeIcon.onclick = () => {
                imageIndex = clickImgIndex //resetting the imageIndex to point to the image the user first clicked on
                prevBtn.style.display = "block"
                nextBtn.style.display = "block"
                previewBox.classList.remove("show")
                shadow.style.display = "none"
                document.querySelector("body").style.overflow = "auto"
            }


        }
    }
}