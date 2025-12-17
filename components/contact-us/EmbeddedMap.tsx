interface GoogleMapEmbedProps {
  embedUrl: string;
}

export default function GoogleMapEmbed({ embedUrl }: GoogleMapEmbedProps) {
  return (
    <div
      className="
        w-full 
        h-56 
        rounded-xl 
        overflow-hidden 
        shadow-card-sm 
        border border-muted
        bg-white
      "
    >
      <iframe
        src={embedUrl}
        className="w-full h-full"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0 }}
      />
    </div>
  );
}
