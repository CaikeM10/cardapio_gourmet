export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img
        src="/logo.png"
        alt="Espaço Gourmet"
        className="h-8 w-8 object-contain"
      />
      <span className="font-bold text-lg">Espaço Gourmet</span>
    </div>
  );
}
