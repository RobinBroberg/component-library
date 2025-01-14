/* eslint-disable react/prop-types */

function Modal({ show, onClose, size = "medium", children }) {
  const sizeClasses = {
    small: "max-w-md",
    medium: "max-w-lg",
    large: "max-w-2xl",
  };

  const selectedSize = sizeClasses[size];

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className={`bg-white border border-gray-700 rounded-lg p-4 w-full ${selectedSize}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

Modal.Header = function Header({ children }) {
  return <div className="text-lg font-bold mb-2">{children}</div>;
};

Modal.Body = function Body({ children }) {
  return <div className="mb-4">{children}</div>;
};

Modal.Footer = function Footer({ children }) {
  return <div className="flex justify-end">{children}</div>;
};

export default Modal;
