type HomeOptionCardProps = {
  title: string;
  image: string;
};

export default function HomeOptionCard({ title, image }: HomeOptionCardProps) {
  return (
    <div className="flex h-56 flex-col items-center justify-between rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md active:scale-95">
      <img src={image} alt={title} className="h-24 w-24 object-contain" />

      <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
        {title}
      </span>
    </div>
  );
}
