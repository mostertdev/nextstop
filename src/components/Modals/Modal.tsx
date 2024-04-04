import { type FC } from "react";

interface ModalProps {
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-[#000000] bg-opacity-70">
      <div className="flex size-full items-center justify-center">
        <div className="max-h-[600px] w-[550px] overflow-x-hidden overflow-y-scroll rounded-3xl bg-[#FFFFFF]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
