import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[calc(100vh-5rem)]">
      <Image
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80"
        alt="Hero Portrait"
        fill
        priority
        className="object-cover filter grayscale"
      />
    </section>
  );
}