import { FaFacebook, FaInstagram } from "react-icons/fa6";

export default function Socials() {
  return (
    <div className="m-auto grid w-fit grid-flow-col gap-4 text-2xl lg:m-0">
      <a target="_blank" href="https://www.instagram.com/pelican_transport">
        <FaInstagram />
      </a>
      <a target="_blank" href="https://www.facebook.com/Pelicancargotransport">
        <FaFacebook />
      </a>
    </div>
  );
}
