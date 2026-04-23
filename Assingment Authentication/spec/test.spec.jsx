import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../src/App.jsx";

describe("Authentication System", () => {

  it("rejects invalid credentials", () => {
    render(<Login />);
    
    fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "user1@example.com" } });
    fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "wrongpass" } });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(screen.queryByText("Welcome")).not.toBeInTheDocument();
    expect(screen.getByText("Invalid Credentials ❌")).toBeInTheDocument();
  });

  it("displays the correct dashboard content based on role", () => {
    render(<Login />);
    
    fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "moderator@example.com" } });
    fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "mod123" } });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(screen.getByText("Welcome, MODERATOR 🎉")).toBeInTheDocument();
    expect(screen.getByText("You can moderate discussions ⚖️")).toBeInTheDocument();
  });

}); 