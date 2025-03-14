import Image from "next/image";

interface ServiceProps {
  title: string;
  imageSrc: string;
  className?: string;
}

export default function ServiceCard({
  title,
  imageSrc,
  className = "",
}: ServiceProps) {
  return (
    <div className={`flex items-center justify-between gap-2 ${className}`}>
      <h4 className="leading-6 font-normal">{title}</h4>
      <div className="relative h-20 w-full overflow-hidden rounded-full bg-neutral-900 lg:h-24">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-3xl"
        />
      </div>
    </div>
  );
}
