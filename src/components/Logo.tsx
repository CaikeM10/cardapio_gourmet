import Image from "next/image";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/logo_espaco.jpg"
      alt="Espaço Gourmet"
      width={200}
      height={200}
      className={className}
      priority
    />
  );
}
