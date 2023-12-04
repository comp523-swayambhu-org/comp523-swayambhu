import { render, fireEvent, screen } from "@testing-library/react";
import Annotation from "../components/Annotation.js";

//test block
test("annotation renders", () => {
// render the component on virtual dom
render(<Annotation 
    num="1" title="Title" 
    description="test annotation description"
    handleShowLocation={console.log('')} />);

//assert the expected result
expect(screen.getByRole('button')).toHaveTextContent("1: Title")

expect(screen.getByText("test annotation description")).toBeInTheDocument()

});