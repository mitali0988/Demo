import React from 'react';
import logo from './logo.svg';
import './App.css';

import ImageUploader from './components/ImageUploader';
import TextInput from './components/TextInput';
import { useOCR } from './hooks/useOCR';
function App() {
  const {text, loading, extractText} = useOCR();
  return (
   <div className="max-w-xl mx-auto p-6">
     <ImageUploader onImageUpload={extractText}></ImageUploader>
     <TextInput text={text} loading={loading}></TextInput>
   </div>
  );
}

export default App;
