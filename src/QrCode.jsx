import { useState } from "react";
import QRCode from "react-qr-code";
import qrImg from "../src/images/image.png";

const QrCode = () => {
  const [qrcode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  return (
    <div className="flex justify-center items-center bg-[#D5E1EF] h-screen">
      <div className="flex flex-col w-[300px] items-center bg-white p-4 rounded-lg">
        <a
          href="http://frontendmentor.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#2C7DF] rounded-lg w-fit">
            <img src={qrImg} alt="" className="rounded-lg" />
            {/* <QRCode value={qrcode} size={200} bgColor="#fff" /> */}
          </div>
        </a>
        <h2 className="text-black/80 text-xl my-3 text-balance text-center font-bold">
          Improve your front-end skills by building projects
        </h2>
        <p className="text-sm text-gray-500 text-center">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default QrCode;
