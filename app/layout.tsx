import "./globals.css";
import Navbar from "@/components/nav-bar";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { ThemeProvider } from "@/components/theme-provider";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <html lang="en">
          <body className={`antialiased`}>
            <div className="mx-auto max-w-screen-lg h-screen flex flex-col">
              <Navbar />
              <div className="flex-grow">{children}</div>
            </div>
          </body>
        </html>
      </ThemeProvider>
    </SessionProvider>
  );
}
