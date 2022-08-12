import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Results from "../pages/results";


//Test fails 
//TypeError: Cannot read properties of null (reading 'query') in Results Component

describe("Results Page", () => {

    it("Testing the button", function () {
      //ARRANGE
      const buttonText = "See Day Plan";
      //render the component that we are testing
      render(<Results buttonText={buttonText} />);
      //ACT
      const button = screen.getByRole("button");
      //ASSERT
      expect(button).toBeInTheDocument();
    });
})