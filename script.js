let sliderObjects = [];
createSliderObjects();

function plusDivs(obj, n) {
  let parentDiv = $(obj).parent();
  let matchedDiv;
  $.each(sliderObjects, function(i, item) {
    if ($(parentDiv[0]).attr('id') == $(item).attr('id')) {
      matchedDiv = item;
      return false;
    }
  });
  matchedDiv.slideIndex=matchedDiv.slideIndex+n;
  showDivs(matchedDiv, matchedDiv.slideIndex);
}

function createSliderObjects() {
  let sliderDivs = $('.slider');
  $.each(sliderDivs, function(i, item) {
    let obj = {};
    obj.id = $(item).attr('id');
    obj.divContent = item;
    obj.slideIndex = 1;
    obj.slideContents = $(item).find('.mySlides');
    showDivs(obj, 1);
    sliderObjects.push(obj);
  });
}

function showDivs(divObject, n) {
  debugger;
  let i;
  if (n > divObject.slideContents.length) {
    divObject.slideIndex = 1
  }
  if (n < 1) {
    divObject.slideIndex = divObject.slideContents.length
  }
  for (i = 0; i < divObject.slideContents.length; i++) {
    divObject.slideContents[i].style.display = "none";
  }
  divObject.slideContents[divObject.slideIndex - 1].style.display = "block";
}


// let img = document.querySelectorAll('img');

// function changeImgWidth() {
//   img.forEach(image => {
//     if (window.innerWidth < 800) {
//       let project = document.querySelector('.project');
//       let imgWidth = project.clientWidth*0.85;
//       image.width = imgWidth
//       console.log(image.width, imgWidth)
//     }
//   })
// }

// let slideContainer = document.querySelectorAll('.slideshow-container')

// function changeSliderWidth() {
//   slideContainer.forEach(slider => {
//     if (window.innerWidth < 800) {
//       let project = document.querySelector('.project');
//       let imgWidth = project.clientWidth*0.85;
//       slider.width = imgWidth
//       console.log(slider.width, imgWidth)
//     }
//   })
// }

// document.querySelector('.project').addEventListener('change', changeImgWidth);
// window.onload = changeSliderWidth();