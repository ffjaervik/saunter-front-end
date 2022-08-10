import { render, screen } from "@testing-library/react";
import GetStarted from '../pages/get-started'
import Image from "../pages/get-started";
import "@testing-library/jest-dom";

describe("GetStarted", () => {

test("Testing Image", function () {
  //ARRANGE
  //render the component that we are testing
  render(<Image />);
  //ACT
  const img = screen.getByAltText("Second Input Image");
  //ASSERT
  expect(img).toBeInTheDocument();
});

});