'use strict';

const form = document.querySelector('#memeform');
const photo = document.querySelector("input[name='photourl']");
const topText = document.querySelector("input[name='toptext']");
const bottomText = document.querySelector("input[name='bottomtext']");
const memeList = document.querySelector('#memeList');
// declare consts for elements to be used

form.addEventListener('submit', function(event){
  event.preventDefault();
  const newMeme = makeMeme(photo.value, topText.value, bottomText.value);
  // preventDefault allows the page to continue running without refereshing and
  // losing previous memes
  memeList.prepend(newMeme);
  // add the new meme to the front of the div

  console.log('submitted');
  // testing functionality
  photo.value = '';
  topText.value = '';
  bottomText.value = '';
  // resetting values in form to blank after they have been used
});

// addEventListener for the submit functionality

function makeMeme(photo, top, bottom){
  const meme = document.createElement('div');
  const img = document.createElement('img');
  const text1 = document.createElement('h1');
  const text2 = document.createElement('h1');
  // create new elements from input, div, image, and two text elements

  text1.innerText = top;
  text2.innerText = bottom;
  img.src = photo;
  // give values to the elements being used

  const deletebtn = document.createElement('button');
  deletebtn.innerText = 'Delete Me!';
  // delete button
  deletebtn.addEventListener('click', function(){
    deletebtn.parentElement.remove();
    // delete the parent of the delete button which in this case will be the div
    // once appended
  })
  // event for delete button functionality

  text1.className = 'topText';
  text2.className = 'bottomText';
  img.className = 'memeImg';
  meme.className = 'memeDiv';
  deletebtn.className = 'deleteBtn';
  // create classes for the div and elements so they can be styled in css

  meme.appendChild(img);
  meme.appendChild(text2);
  meme.appendChild(text1);
  meme.appendChild(deletebtn);
  // add elements as child onto meme div

  return meme;
  // return out meme
}

// function to create meme, to be used within submit event
