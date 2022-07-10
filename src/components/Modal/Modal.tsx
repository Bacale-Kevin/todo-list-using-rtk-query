import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { XIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";


type modalProps = {
  children: React.ReactNode;
  open: boolean;
  close: () => void;
};

const Modal: React.FC<modalProps> = ({ open, close, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  //this is to make it render on client side only
  useEffect(() => {
    setIsBrowser(true);
  }, [isBrowser]);

  const modalContent = open ? (
    <>
      {/* overlay */}
      <div
        className="fixed top-0 right-0 left-0 bottom-0  z-50"
        style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
      />
      {/* modal */}
      <motion.div className=" fixed  top-0 left-0 h-full w-full flex flex-col flex-nowrap items-center justify-center z-50 shadow-lg"
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <div className="bg-white w-1/4 rounded-md px-6 py-6">
          <div onClick={close} className="flex justify-end">
            <div className="hover:bg-gray-200 rounded-md p-1 cursor-pointer transition-all ease-in-out duration-200">
              <XIcon className="w-6" />
            </div>
          </div>
          <div className="px-11">{children}</div>
        </div>
      </motion.div>
    </>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById("modal-root"));
  } else {
    return null;
  }
};

export default Modal;
