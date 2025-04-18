const categoryElements = document.querySelectorAll('ul#categories > li');
console.log(`Number of categories: ${categoryElements.length}`);

categoryElements.forEach(element => {
    const title = element.querySelector('h2').textContent;
    const elementsLength = element.querySelectorAll('ul > li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsLength}`);      
});









