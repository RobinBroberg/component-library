/* eslint-disable react/prop-types */

import { FaRegClock } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

export default function CustomBadge({
  color = "gray",
  icon,
  size = "medium",
  children,
  className = "",
}) {
  const colorMapping = {
    red: "bg-red-400",
    blue: "bg-blue-400",
    gray: "bg-gray-400",
  };
  const selectedColor = colorMapping[color];

  const iconMapping = {
    clock: FaRegClock,
    checkmark: IoMdCheckmark,
    search: FaSearch,
  };
  const SelectedIcon = iconMapping[icon];

  const sizeMapping = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };
  const selectedSize = sizeMapping[size] || sizeMapping["medium"];

  const combinedClassName = `rounded-xl inline-flex items-center space-x-2 ${selectedColor} ${selectedSize} ${className}`;

  return (
    <div className={`${combinedClassName} px-2 pb-[1px]`}>
      {SelectedIcon && <SelectedIcon className="text-base" />}

      <span>{children}</span>
    </div>
  );
}
