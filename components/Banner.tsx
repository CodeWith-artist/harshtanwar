"use client";

import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
  image: string;
};

export default function Banner({ title , subtitle, image }: Props) {
  return (
    <div className="relative w-full h-40  rounded-2xl overflow-hidden shadow-md">
        <div className="py-5 px-4 relative z-10 flex flex-col justify-center h-full text-white">
      {/* Background Image */}
      <Image
        src={image}
        alt="banner"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}

      {/* Content */}
      {/* <div className="absolute inset-0 flex flex-col justify-center px-4 text-white">
        <h2 className="text-lg font-bold">{ title }</h2>
        <p className="text-sm opacity-90">{subtitle}</p>
      </div> */}
      </div>
    </div>
  );
}