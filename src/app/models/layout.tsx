import { prose } from "../styles/prose";

export default function ModelsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={prose('max-w-none')}>
      {children}
    </div>
  );
}