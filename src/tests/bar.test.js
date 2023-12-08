import { render, fireEvent, screen } from "@testing-library/react";
import Bar from "../components/Bar.js";

// npm run test
test("bar clicks", () => {

    const mockHelpClick = jest.fn()
    const mockMenuClick = jest.fn()
    render(<Bar 
        openHelp={mockHelpClick}
        menuClick={mockMenuClick} />)
    
    const buttons = screen.getAllByRole('button')

    fireEvent.click(buttons[0])
    expect(mockHelpClick).toHaveBeenCalledTimes(1)

    fireEvent.click(buttons[1])
    expect(mockMenuClick).toHaveBeenCalledTimes(1)
});