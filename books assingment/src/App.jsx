import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

/*
====================================================
BOOK LIST APP – STUDENT IMPLEMENTATION TASK
====================================================

INSTRUCTIONS:

You are building a simple Book List application.

Your tasks are:

1.  Fetch book data from an API using axios inside useEffect.
2️.  Store the fetched data in state.
3️.  Render:
      - Book title
      - Book thumbnail
      - Book description
      - Authors (each inside a <span> tag)
4️.  Handle API errors properly.

IMPORTANT:
- The API response structure is:
    response.data.books
- Each book object contains:
    id
    title
    description
    authors (array)
    imageLinks.smallThumbnail

====================================================
*/

function App() {

  // TODO 1: Create state to store books
  const [data, setData] = useState([]);

  useEffect(() => {
    // TODO 2: Make an axios GET request and handle the response
    axios.get("https://example.com/api/books")
      .then(function (response) {
        // Store response.data.books into state
        setData(response.data.books);
      })
      .catch(function (error) {
        // Handle errors
        if (error.response) {
          const status = error.response.status;
          console.log(status);
          if (status === 404) {
            console.log("Website not found");
          }
        } else {
          console.log(error);
        }
      });
  }, []);

  

  return (
    <div>
      {/* 
      TODO 3:
      Loop through the data array using map().
      For each book, render:
        - Title inside <h4>
        - Thumbnail inside <img>
        - Description inside <p>
        - Authors inside separate <span> tags
      */}

      {data.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>

          <div className="flex">
            <img src={item.imageLinks?.smallThumbnail} alt={item.title} />
            <p>{item.description}</p>
          </div>

          {item.authors && item.authors.map((author, index) => (
            <span key={index}>{author}</span>
          ))}

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;