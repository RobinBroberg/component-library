/* eslint-disable react/prop-types */

export default function CustomButton({
  size = "medium",
  color = "gray",
  disabled,
  children,
  className = "",
}) {
  let selectedColor;
  if (color === "red") {
    selectedColor = "bg-red-400 border-red-700";
  } else if (color === "blue") {
    selectedColor = "bg-blue-400 border-blue-700";
  } else if (color === "gray") {
    selectedColor = "bg-gray-400 border-gray-700";
  }

  let selectedSize;
  if (size === "large") {
    selectedSize = "py-3 px-5";
  } else if (size === "medium") {
    selectedSize = "py-2 px-4";
  } else if (size === "small") {
    selectedSize = "py-1 px-3";
  }

  const combinedClassName = `border rounded-lg ${selectedColor}  ${selectedSize} ${
    disabled ? "opacity-75 cursor-default" : ""
  } ${className}`;

  return <button className={combinedClassName}>{children}</button>;
}
