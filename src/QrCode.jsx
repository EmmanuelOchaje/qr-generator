import { useState } from "react";
import QRCode from "react-qr-code";

const QrCode = () => {
  const [qrcode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleQrcode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div>
      <h1 className="text-center font-bold text-3xl my-5">QR Code Generator</h1>
      <div className="flex justify-center ">
        <input
          type="text"
          name=""
          className="p-1 border rounded-xl my-2"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Input text here"
          value={input}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleQrcode}
          className="bg-black text-white p-1 m-2 rounded-xl"
        >
          Generate
        </button>
      </div>
      <div className="flex justify-center ">
        <QRCode value={qrcode} size={300} bgColor="#fff" />
      </div>
    </div>
  );
};

export default QrCode;
