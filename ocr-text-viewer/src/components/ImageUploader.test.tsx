import { render, screen, fireEvent } from "@testing-library/react";
import ImageUploader from "./ImageUploader";

describe('ImageUplaoder' ,() => {
  it('calls evnet on file upload', () => {
    const mockUpload = jest.fn();
    render (<ImageUploader onImageUpload={mockUpload}></ImageUploader>);

    const input = screen.getByTestId('file-input');
    const file = new File(['dummy'],'test.png',{type: 'image/png'});

    fireEvent.change(input, { target: { files: [file] } });

    expect(mockUpload).toHaveBeenCalledWith(file);
  })

})