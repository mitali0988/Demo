type Props = {
  text:string;
  loading:boolean;
}

const TextInput: React.FC<Props> = ({text, loading}) => (
 <div className="mt-4 p-4 border rounded bg-gray-50 min-h-[200px]">
  {loading ? 'Extracting text...' : text || 'No text extracted yet.'}
 </div>
);

export default TextInput;