/* eslint-disable react/prop-types */

import { CiCircleAlert } from "react-icons/ci";
import { CiSquareAlert } from "react-icons/ci";
import { TbAlertTriangle } from "react-icons/tb";

export default function CustomAlert({
  color,
  icon,
  children,
  className,
  iconSize = "medium",
  iconColor,
}) {
  const colorMapping = {
    red: "bg-red-400 border-red-700",
    blue: "bg-blue-400 border-blue-700",
    gray: "bg-gray-400 border-gray-700",
  };
  const selectedColor = colorMapping[color];

  const iconMapping = {
    circle: CiCircleAlert,
    square: CiSquareAlert,
    triangle: TbAlertTriangle,
  };

  const SelectedIcon = iconMapping[icon];

  const sizeMapping = {
    small: "text-3xl",
    medium: "text-4xl",
    large: "text-5xl",
  };
  const selectedSize = sizeMapping[iconSize];

  const combinedClassName = `border rounded-lg w-[600px] mx-auto p-1 ${selectedColor}
    ${className}`;

  return (
    <div className={`${combinedClassName}`}>
      <div className="flex items-center space-x-4">
        {SelectedIcon && (
          <SelectedIcon className={`${selectedSize} ${iconColor}`} />
        )}
        <span>{children}</span>
      </div>
    </div>
  );
}
