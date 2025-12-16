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
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        style={{ border: 'none' }}
      />
    </div>
  );
}
<iframe
  src=""
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>;
