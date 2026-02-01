import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-14 max-w-md items-center justify-center px-4">
        <Logo />
      </div>
    </header>
  );
}
