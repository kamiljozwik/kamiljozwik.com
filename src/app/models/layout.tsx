export default function ModelsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="
      prose prose-lg dark:prose-invert 
    prose-a:text-blue-400 prose-a:hover:text-blue-300 prose-a:no-underline  prose-a:font-normal"
    >
      {children}
    </div>
  );
}