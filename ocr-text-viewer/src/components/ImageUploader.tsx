type Props = {
  onImageUpload:(file:File) => void;
};

const ImageUploader: React.FC<Props> = ({onImageUpload}) =>(
<input type="file" accept="image/*" onChange={(e) =>{const file = e.target.files?.[0];
      if (file) onImageUpload(file);}} className="p-2 border rounded w-full" />
)

/*type Props = {
  onImageUpload: (file: File) => void;
};*/

/*const ImageUploader: React.FC<Props> = ({ onImageUpload }) => (
  <input
    type="file"
    accept="image/*"
    onChange={(e) => {
      const file = e.target.files?.[0];
      if (file) onImageUpload(file);
    }}
    className="p-2 border rounded w-full"
  />
);*/

export default ImageUploader;