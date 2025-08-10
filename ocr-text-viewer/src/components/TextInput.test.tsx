import { render, screen } from "@testing-library/react";
import TextInput from "./TextInput";

describe('TextInput', ()=>{
  it('shows text on loading', ()=>{
      render(<TextInput text="" loading={true} />);
      expect(screen.getByText(/Extracting text/i)).toBeInTheDocument();

  })
})
