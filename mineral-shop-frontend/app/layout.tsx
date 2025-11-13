import '../assets/css/globals.css';
import { Montserrat } from "next/font/google";
import Header from './atoms/components/Header/Header';


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={montserrat.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};
