/* eslint-disable react/prop-types */

export default function Card({ href, imgAlt, imgSrc, children }) {
  return (
    <div className="rounded-xl shadow-md hover:shadow-lg border border-gray-300 max-w-[350px]">
      <a href={href}>
        <div className="h-48 w-full overflow-hidden rounded-t-xl">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4">{children}</div>
      </a>
    </div>
  );
}
