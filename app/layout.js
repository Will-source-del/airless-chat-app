
import "./globals.css";

export const metadata = {
  title: "Airless",
  description: "Your space, your people.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
