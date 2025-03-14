import { PiCompassRoseThin } from "react-icons/pi";
import Marquee from "./Marquee";

export default function PelicanMarquee() {
  return (
    <div>
      <Marquee className="bg-neutral-950 font-mono text-2xl text-white uppercase lg:text-3xl">
        <span className="mx-8">Safe</span>
        <PiCompassRoseThin />
        <span className="mx-8">Reliable</span>
        <PiCompassRoseThin />
        <span className="mx-8">Flexible</span>
        <PiCompassRoseThin />
        <span className="mx-8">Stable</span>
        <PiCompassRoseThin />
        <span className="mx-8">Professional</span>
        <PiCompassRoseThin />
      </Marquee>
    </div>
  );
}
