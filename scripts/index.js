'use strict'

// Getting attributes of the elements

const googleLink = document.querySelector("#google-link");
const h1 = document.querySelector('h1');

// console.log('googleLink', googleLink);

const linkHref = googleLink.getAttribute("href");
const headlineId = h1.getAttribute("id");
const headlineClass = h1.getAttribute("class");

// console.log('headlineId', headlineId);
// console.log('headlineClass', headlineClass);



// Setting the attributes of the elements
const contentDiv = document.querySelector("#content");

contentDiv.setAttribute('id', 'main-content');


// console.log('contentDiv', contentDiv);



// Removing the attribute of the element
const listOfItems = document.querySelector("#item-list");


listOfItems.removeAttribute('id');
// console.log('listOfItems', listOfItems);




// CREATING DOM ELEMENTS

// Create an element - (created outside of DOM tree (stand-by) )
const h2Tag = document.createElement("h2");

console.log('h2Tag', h2Tag);

// Add content to the element
h2Tag.textContent = "Sub Title";
// h2Tag.innerHTML = "Sub Title";


// Add the element to the DOM Tree
const body = document.querySelector('body');

body.appendChild(h2Tag);  // Add the element to the DOM tree by appedning it to the specific element



// Creating element and text node and appending all to the DOM

const articleBrief = document.createElement('h3');
const articleContent = document.createElement('p');


const textContent1 = document.createTextNode('Mumbai-based startup that has built a video creation and editing platform, has raised $15 million');
const textContent2 = document.createTextNode('The startup offers a freemium web-based editing tool that allows users to create videos that are fit to be published on popular social media platforms (such as Twitter, Facebook, YouTube). It has amassed over 800,000 users in a year since its launch who have created videos in over 75 languages.' );


// Append text nodes to the elements
articleBrief.appendChild(textContent1);
articleContent.appendChild(textContent2);


// Append new elements (with text nodes) to the DOM

body.appendChild(articleBrief);
body.appendChild(articleContent);




// EXERCISE
// 1. Create an image element


// 2. Add the src attribute with the link to an image


// 3. Add style.width and style.height to the image node


// 4. Append the image before the `articleBrief`