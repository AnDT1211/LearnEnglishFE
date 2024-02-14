import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Listen Together",
  description: "Created by Andt",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body className={inter.className}>

    <div className="container mx-auto my-4">
      {children}
    </div>

    </body>
    </html>
  )
    ;
}
