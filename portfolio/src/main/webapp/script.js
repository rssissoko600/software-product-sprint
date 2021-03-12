// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random fun fact to the page.
 */
// function addRandomFacts() {
//   const facts =
//       ['I was apart of a commercial for Black History Month! ', 
//       'I created my first app on Google Play at 12 years old! ', 
//       'I love to eat seafood: crab legs, mussels. shrimp, and clams. ', 
//       'I was born and raised in The Bronx, New York. '];

//   // Pick a random fact about Rokia.
//   const fact = facts[Math.floor(Math.random() * facts.length)];

//   // Add it to the page.
//   const factContainer = document.getElementById('fact-container');
//   factContainer.innerText = facts;
// }
async function addRandomFacts(){
    // const facts =
    //   ['I was apart of a commercial for Black History Month! ', 
    //   'I created my first app on Google Play at 12 years old! ', 
    //   'I love to eat seafood: crab legs, mussels. shrimp, and clams. ', 
    //   'I was born and raised in The Bronx, New York. '];

    // // Pick a random fact about Rokia.
    // const fact = facts[Math.floor(Math.random() * facts.length)];

    const responseFromServer = await fetch('/fact');
    const textFromResponse = await responseFromServer.json();

    const factContainer = document.getElementById('fact-container');
    factContainer.innerText = "You know have a random fact about me: " + textFromResponse;

    
    console.log(textFromResponse);
    console.log(factContainer);
}
$(document).ready(function() {
  if ( $("#email").prop("validity").valid ) {
    $("#email_error").addClass("hidden");
  } else {
    $("#email_error").removeClass("hidden");
    valid = false;
  }
//email message
  return valid;
  });
 
