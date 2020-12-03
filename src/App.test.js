import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";
import userEvent from "@testing-library/user-event";

test("renders App without crashing", () => {
  render(<App />);
});

test("can fill out and submit form", () => {
  render(<ContactForm />);

  const firstName = screen.getByPlaceholderText(/Edd/i);
  const lastName = screen.getByPlaceholderText(/Burke/i);
  const email = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
  const msg = screen.getByTitle(/message/i);

  userEvent.type(firstName, "Justin");
});
