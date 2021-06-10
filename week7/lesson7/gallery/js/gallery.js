// Progressive loading images
const imagesToLoad = document.querySelectorAll('img[data-src]');  //selects all elements with a data-src attribute
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));    //copies data-src value into src value
  image.onload = () => {
    image.removeAttribute('data-src');  //once loaded, removes redundant data-src attribute
  };
};
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px -50px 0px"  //loads images when they're 50px into the viewport
}


if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {  //Checks whether item is in the viewport
        loadImages(item.target);  //if it is, load current item
        observer.unobserve(item.target);  //once loaded, stop observing
      }
    });
  }, imgOptions);

  imagesToLoad.forEach((img) => { 
    observer.observe(img); 
  });
} else {
  imagesToLoad.forEach((img) => {  
    loadImages(img);
  });
}