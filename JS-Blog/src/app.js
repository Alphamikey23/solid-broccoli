class Blog {
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }

  addTitle() {
    /* TODO:
       1. Create an <h1> element using document.createElement()
       2. Set the id of the <h1> to "blog-title"
       3. Set the innerHTML of the <h1> to this.title
       4. Get the element with id "card-text"
       5. Append the <h1> element to the "card-text" container
    */
   let h1 = document.createElement(h1);
   
  }

  addDescription() {
    /* TODO:
       1. Create a <p> element using document.createElement()
       2. Set the id of the <p> to "blog-description"
       3. Set the innerHTML of the <p> to this.detail
       4. Get the element with id "card-text"
       5. Append the <p> element to the "card-text" container
    */
  }
}

let toggle;

function helperAddPost() {
  if (toggle == 1) {
    document.getElementById('popupContact').style.display = 'inline';
    return (toggle = 0);
  } else {
    document.getElementById('popupContact').style.display = 'none';
    return (toggle = 1);
  }
}


