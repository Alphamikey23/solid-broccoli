import { Link } from 'react-router-dom';

/*
  ===========================
  STUDENT INSTRUCTIONS
  ===========================

  This component represents the navigation bar of the application.

  Your tasks:
  1. Create a link that navigates to the Home page ("/")
     - The link text must be: Kavlium ❤️
  2. Create a link that navigates to the Contacts page ("/contacts")
     - The link text must be: Contacts
  3. Create a link that navigates to the About page ("/about")
     - The link text must be: About

  ⚠️ Rules:
  - Use ONLY the Link component from react-router-dom
  - Do NOT use anchor (<a>) tags
  - Do NOT change the link text
  - Do NOT change the existing structure
*/

function Navbar() {
  return (
    <nav className="nav">
      <ul>
      <Link to="/" end>Kavlium ❤️</Link>
      <Link to="/contacts" end>Contacts</Link>
      <Link to="/about" end>About</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
