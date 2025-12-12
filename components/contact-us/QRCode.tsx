import Image, { StaticImageData } from 'next/image';

interface QRCodeProps {
  imgSrc: string | StaticImageData;
  alt?: string;
}

export default function QRCode({
  imgSrc,
  alt = 'Krisha QR Code',
}: QRCodeProps) {
  return (
    <div
      className="
        bg-white 
        border border-muted 
        shadow-card-sm 
        rounded-xl 
        p-6 
        flex items-center justify-center
        w-full 
        h-56 
        sm:h-64 
      "
    >
      <Image
        src={imgSrc}
        alt={alt}
        width={200}
        height={200}
        className="border object-cover"
      />
    </div>
  );
}
