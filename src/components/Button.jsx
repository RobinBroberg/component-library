/* eslint-disable react/prop-types */

export default function Button({
  size = "medium",
  color = "gray",
  disabled,
  children,
  className = "",
  onClick,
}) {
  const colorMapping = {
    red: `bg-red-400 border-red-700 ${!disabled ? "hover:bg-red-500" : ""}`,
    blue: `bg-blue-400 border-blue-700 ${!disabled ? "hover:bg-blue-500" : ""}`,
    gray: `bg-gray-400 border-gray-700 ${!disabled ? "hover:bg-gray-500" : ""}`,
  };
  const selectedColor = colorMapping[color];

  const sizeMapping = {
    large: "py-3 px-5",
    medium: "py-2 px-4",
    small: "py-1 px-3",
  };

  const selectedSize = sizeMapping[size];

  const combinedClassName = `border rounded-lg ${selectedColor}  ${selectedSize} ${
    disabled ? "opacity-75 cursor-default" : ""
  } ${className}`;

  return (
    <button onClick={onClick} className={combinedClassName} disabled={disabled}>
      {children}
    </button>
  );
}
