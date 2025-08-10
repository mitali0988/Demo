import { useState } from "react";
import Tesseract from "tesseract.js";

export const useOCR = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const extractText = async (image: File) => {
    setLoading(true);
    const { data } = await Tesseract.recognize(image, "eng", {
      logger: (m) => console.log(m),
    });
    setLoading(false);
    setText(data.text);
  };

  return { text, loading, extractText };
};
