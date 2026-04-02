import React, { useState } from 'react';

/**
 * 📌 INSTRUCTIONS FOR STUDENTS
 * ------------------------------------
 * 1. Do NOT change:
 *    - Component name
 *    - Props name
 *    - JSX structure
 *    - Button text
 *
 * 2. You are allowed to:
 *    - Initialize useState hooks
 *    - Complete the event handler logic
 *
 * 3. Expected behavior:
 *    - Content should toggle ON/OFF when clicking "Content"
 *    - Like count should increase by 1 on every "Like" click
 */

function NewUseState({ para }) {
  // TODO 1: Initialize a state variable to control content visibility
  // HINT: Boolean value (true / false)
  const [showContent, setShowContent] = useState(false);

  // TODO 2: Initialize a state variable to store like count
  // HINT: Number starting from 0
  const [like, setLike] = useState(0);

  // TODO 3: Complete this function
  // This should toggle the content visibility
  function handleState() {
    setShowContent(!showContent);
    // TODO
  }

  // TODO 4: Complete this function
  // This should increase like count by 1
  function handleLike() {
    setLike(like + 1);
    // TODO
  }

  return (
    <div>
      {/* TODO 5: Show the paragraph ONLY when content is visible */}
      {/* para should be rendered inside a <p> tag */}
      {/* Example: <p>{para}</p> */}
      {showContent && <p>{para}</p>}
      <button onClick={handleState}>Content</button>

      {/* TODO 6: Display the like count */}
      <h4>{like}</h4>

      <button onClick={handleLike}>Like</button>
    </div>
  );
}

export default NewUseState;
