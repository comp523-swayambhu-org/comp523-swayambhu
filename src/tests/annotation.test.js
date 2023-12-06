import { render, fireEvent, screen } from "@testing-library/react";
import Annotation from "../components/Annotation.js";

// npm run test
test("annotation renders", () => {

const mockHandleClick = jest.fn()
render(<Annotation 
    num="1" title="Title" 
    description="test annotation description"
    handleShowLocation={mockHandleClick} />)

const titleButton = screen.getByRole('button')

//assert the expected result
expect(titleButton).toHaveTextContent("1: Title")
expect(screen.getByText("test annotation description")).toBeInTheDocument()

fireEvent.click(screen.getByText("View"))

expect(mockHandleClick).toHaveBeenCalled()
});