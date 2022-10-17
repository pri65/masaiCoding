import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import Slide from "../Components/Slide";

/**
 * DO NOT CHANGE ANYTHING HERE
 */

const data = [
  {
    id: 1,
    title: "Intro to React",
    description: "React is a Javascript UI library"
  },
  {
    id: 2,
    title: "Intro to Props",
    description: "Props are just properties"
  },
  {
    id: 3,
    title: "Sate management",
    description: "Learn how to manage state"
  }
];

test("the application has the required elements", () => {
  const { getByTestId } = render(<App />);
  let app_header = getByTestId("header");
  let slide = getByTestId("slide");
  let title = getByTestId("title");
  let description = getByTestId("description");
  let prev = getByTestId("prev");
  let next = getByTestId("next");

  expect(app_header.textContent).toBe("Slides");
  expect(slide).toBeDefined();
  expect(title).toBeDefined();
  expect(description).toBeDefined();
  expect(prev).toBeDefined();
  expect(prev.textContent).toBe("Prev");
  expect(next).toBeDefined();
  expect(next.textContent).toBe("Next");
});

test("prev button to be disabled", () => {
  const { getByTestId } = render(<App />);
  let prev = getByTestId("prev");

  expect(prev).toHaveAttribute("disabled");
  expect(prev).toBeDisabled();
});

test("slides to have correct information when moving from page to page", async () => {
  const { getByTestId } = render(<App />);
  let prev = getByTestId("prev");
  let next = getByTestId("next");
  let title = getByTestId("title");
  let description = getByTestId("description");

  expect(title.textContent).toBe(data[0].title);
  expect(description.textContent).toBe(data[0].description);

  fireEvent.click(next);
  expect(title.textContent).toBe(data[1].title);
  expect(description.textContent).toBe(data[1].description);

  fireEvent.click(next);
  expect(title.textContent).toBe(data[2].title);
  expect(description.textContent).toBe(data[2].description);
  expect(next).toHaveAttribute("disabled");
  expect(next).toBeDisabled();

  fireEvent.click(prev);
  expect(title.textContent).toBe(data[1].title);
  expect(description.textContent).toBe(data[1].description);

  fireEvent.click(prev);
  expect(title.textContent).toBe(data[0].title);
  expect(description.textContent).toBe(data[0].description);
  expect(prev).toHaveAttribute("disabled");
  expect(prev).toBeDisabled();
});

test("Slides unit testing", () => {
  const { getByTestId } = render(<Slide title="Hello" description="World" />);
  let title = getByTestId("title");
  let description = getByTestId("description");
  expect(title.textContent).toBe("Hello");
  expect(description.textContent).toBe("World");
});
