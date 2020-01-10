//capitalize the first character of the input name
function captializeFirstLetter(inputName) {
  return inputName.charAt(0).toUpperCase() + inputName.slice(1);
}

//check whether the name and message pass all validations
function doesNotPassAllValidation(name, msg) {
  if (!name && !msg) {
    alert("You forgot to fill in your name and message!");
    return true;
  } else if (msg.length > 280) {
    alert(
      `Your comment has ${msg.length} characters. The limit is 280 characters.`
    );
    return true;
  } else if (!msg) {
    alert("You forgot to fill your message!");
    return true;
  } else if (!name) {
    alert("You forgot to fill your name!");
    return true;
  }
  const profanity = ["fuck", "ass", "shit", "bitch"];
  for (let i = 0; i < profanity.length; i++) {
    if (msg.toLowerCase().includes(profanity[i].toLowerCase())) {
      alert("Warning: this comment has been flagged as offensive.");
      return true;
    }
  }
  return false;
}

// once 'post comment' button clicked, this function runs
function submitComment() {
  //input varibles
  const inputField = document.getElementById("name");
  let name = inputField.value;
  const textArea = document.getElementById("msg");
  const msg = textArea.value;

  //call the function to check all the validation
  if (doesNotPassAllValidation(name, msg)) {
    return null; //why return null is needed?
  }

  //call the function to captialize first letter
  name = captializeFirstLetter(name);

  //create elements on browser
  const comment = document.createElement("section");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  //attach the input to the created elements
  h3.innerHTML = `${name} said:`;
  p.innerHTML = msg;
  comment.classList.add("comment");
  comment.appendChild(h3);
  comment.appendChild(p);

  const commentSection = document.getElementById("comments");
  commentSection.appendChild(comment);

  //reset the name and comment field to empty
  inputField.value = null;
  textArea.value = null;
}
