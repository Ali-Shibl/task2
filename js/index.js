
   //next ,prev ,close ,foucs  
   let images = Array.from(document.querySelectorAll("#Flip img"))
   let cartona = document.querySelector(".cartona")
   let box = document.querySelector(".box")
   let closeIcon = document.getElementById("close")
   let right = document.querySelector(".right")
   let left = document.querySelector(".left")
   let numberImage;

   for (let i = 0; i < images.length; i++) {
      images[i].addEventListener('click', function (e) {
         cartona.classList.remove("d-none")
         box.style.backgroundImage = `url(${e.target.getAttribute("src")})`
         numberImage = images.indexOf(e.target)

      })
   }

// close
  closeIcon.addEventListener("click", function () {
      cartona.classList.add("d-none")
   })
   cartona.addEventListener("click", function () {
      cartona.classList.add("d-none")      
   })
   box.addEventListener("click", function (e) {
      e.stopPropagation()
   })

// arrow right ,left
   function slider(num) {
       numberImage= numberImage + num     // 1 , -1
       if (numberImage == images.length) {
         numberImage = 0
      }
      if (numberImage < 0) {
         numberImage = images.length - 1
      }
       box.style.backgroundImage = `url(${images[numberImage].getAttribute("src")})`
   }

   left.addEventListener("click", function () {
      slider(1)
   })
   right.addEventListener("click", function () {
      slider(-1)
   })

   // تحكم بالكيبورد
   document.addEventListener("keydown", function (e) {
      console.log(e.key);
      
      if (e.key == 'Escape') {
         cartona.classList.add("d-none")

      }else if (e.key == 'ArrowRight'){
         slider(1)
      }else if (e.key == 'ArrowLeft') {
         slider(-1)
      }
      
   })



