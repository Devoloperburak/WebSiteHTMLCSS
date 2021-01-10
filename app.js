let resimler = ['./pexels-photo-807598.jpeg','pexels-photo-2228578.jpeg','pexels-photo-4977562.jpeg','pexels-photo-5325940.jpeg',"./pexels-photo-5206142.jpeg"];

let backgroundImage = document.getElementById('animationbackground')

// console.log(resimler[0])
let i = -1;
function photoAuto() {
    console.log(i)
        if(i <= resimler.length-2) {
            i++;

        } 
        else {
            i=0;
        }
        // console.log(resimler[i]);

        // backgroundImage.style.backgroundImage
        backgroundImage.style.backgroundImage=`url(${resimler[i]})`
        // console.log(resimler[i]);
        // console.log(i)
}
 setInterval(() => {
     photoAuto()
 }, 2000);