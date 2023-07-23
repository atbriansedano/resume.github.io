function scrollToDiv(sectionId) {
    var divElement = document.getElementById(sectionId);

    divElement.scrollIntoView({ behavior: 'smooth' });
  }