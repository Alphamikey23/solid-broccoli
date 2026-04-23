**Assignment: Build Your Own Login System in React!**

### **Overview**
Your task is to build a simple login system using React’s `useState` hook. You'll create a login page where users enter their email and password, and based on their role, they'll see different content on the dashboard.

### **What You’ll Be Working On**
Your application will have:
1. A **Login Page** where users enter their credentials.
2. A **Dashboard** that displays different content based on the user’s role.
3. **Hardcoded user data**, including email-password pairs and roles. **Do not modify the hardcoded data.**

Here's the user data you’ll be working with:
```javascript
const users = {
  "user1@example.com": { password: "user123", role: "user" },
  "moderator@example.com": { password: "mod123", role: "moderator" },
  "admin@example.com": { password: "admin123", role: "admin" }
};
```
Each role has different permissions:
- **User**: Can view general content.
- **Moderator**: Can moderate discussions.
- **Admin**: Has full control over the application.

### **Your Tasks**
#### **1. Implement Login Logic**
- Write the `handleLogin` function to:
  - Check if the email exists in `users`.
  - Validate the entered password.
  - If correct, update the user’s role state and grant access.
  - If incorrect, display an error message (`"Invalid Credentials ❌"`).

#### **2. Display Role-Based Content**
- After login, show the **Dashboard** component.
- Modify the `Dashboard` so each role sees a unique message.

#### **3. Bonus Challenges (Optional)**
- Add a **Logout** button to reset the login state.
- Display a **welcome message** with the user’s role.
- Improve the UI with **CSS styling**.

### **What You’ll Learn**
By the end of this assignment, you'll:
- Understand how **authentication** works in React.
- Use `useState` to **manage login state**.
- Implement **role-based access control (RBAC)**.
- Learn **conditional rendering** for dynamic UI updates.

*PS:There are two test cases which will pass on completing the functionality*
**Happy Coding**