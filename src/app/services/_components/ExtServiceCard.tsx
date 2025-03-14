import Image from "next/image";

interface ServiceProps {
  title: string;
  imageSrc: string;
  className?: string;
}

export default function ExtServiceCard({
  title,
  imageSrc,
  className = "",
}: ServiceProps) {
  return (
    <div className={`card bg-base-100 w-full shadow-sm ${className}`}>
      <figure className="relative aspect-video w-full px-6 pt-6 md:px-10 md:pt-10">
        <Image
          src={imageSrc}
          alt={title}
          className="rounded object-cover"
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </figure>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
      </div>
    </div>
  );
}
