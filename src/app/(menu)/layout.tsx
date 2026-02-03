import Header from "@/components/Header";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main className="pt-20">{children}</main>
    </div>
  );
}
