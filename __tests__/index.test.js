import { render, screen } from "@testing-library/react";
import Image from "../pages/index";
import Home from '../pages/index'
import "@testing-library/jest-dom";

const testProps = {
  addToList: jest.fn(),
  buttonText: "Add to List",
};


describe("HomePage", () => {
  it("should render the heading", () => {
    const textToFind = "Welcome";

    render(<Home/>);
    const heading = screen.getByText(textToFind, { exact: false });

    expect(heading).toBeInTheDocument();
  });


it("Testing the button", function () {
  //ARRANGE
  const buttonText = "Start Here";
  //render the component that we are testing
  render(<Home buttonText={buttonText} />);
  //ACT
  const button = screen.getByRole("button");
  //ASSERT
  expect(button).toBeInTheDocument();
});

test("Testing Image", function () {
  //ARRANGE
  //render the component that we are testing
  render(<Image/>);
  //ACT
  const img = screen.getByAltText("homepage image");
  //ASSERT
  expect(img).toBeInTheDocument();
});

});
