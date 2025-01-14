/* eslint-disable react/prop-types */

export default function CustomCard({ href, imgAlt, imgSrc, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg shadow-md hover:shadow-lg border border-gray-400"
    >
      <img src={imgSrc} alt={imgAlt} className="rounded-t-lg" />
      <div className="p-4">{children}</div>
    </a>
  );
}
