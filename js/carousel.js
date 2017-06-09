var slide = 1;
test(slide)

function toRight() {
  left = "left"
  slide = slide+1
  test(slide, left)
}

function toLeft() {
  right = "right"
  slide = slide-1
  test(slide, right)
}

function test(number, direction) {
  var carouselArray = $('.carousel-item').toArray() //makes an array of the elements
  if (number > carouselArray.length) {slide = 1}
  if (number < 1) {slide = carouselArray.length}
  for (var i = 0; i < carouselArray.length; i++) {
    $(carouselArray[i]).hide()
  }
  $(carouselArray[slide-1]).fadeIn("slow")
}
