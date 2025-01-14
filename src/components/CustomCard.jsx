/* eslint-disable react/prop-types */

export default function CustomCard({ href, imgAlt, imgSrc, children }) {
  return (
    <div className="rounded-lg shadow-md hover:shadow-lg border border-gray-300">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} alt={imgAlt} className="rounded-t-lg mx-auto" />
        <div className="p-4">{children}</div>
      </a>
    </div>
  );
}
