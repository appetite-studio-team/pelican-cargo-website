export default function HeroSection() {
  return (
    <div className="relative -my-8 flex min-h-screen items-center">
      <video
        preload="auto"
        loop
        muted
        autoPlay
        playsInline
        disablePictureInPicture
        className="absolute top-0 left-0 -z-1 h-full w-full object-cover"
      >
        <source src="/assets/bg-video.mp4" type="video/mp4" />
        <source src="/assets/bg-video.webm" type="video/webm" />
      </video>

      <div className="absolute top-0 left-0 z-0 h-full w-full bg-black opacity-50"></div>

      <div className="relative m-auto w-full max-w-5xl space-y-2 p-8 text-white">
        <p>Pelican Truck Cargo Transport L.L.C</p>
        <h1 className="max-w-3xl">
          Dubai&apos;s Trusted Cargo Partner.{" "}
          <span className="opacity-60">Experience the Difference.</span>
        </h1>
      </div>
    </div>
  );
}
