export const metadata = {
  title: "Pulseio.io",
  description: "Decentralized infrastructure for real-time public perception, powered by Zico.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
