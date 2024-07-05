import { Inter , Montserrat} from "next/font/google";
import "./globals.css";
import Navar from "@/Components/Navar";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({weight:['100','200','400'], subsets: ["vietnamese"] });
// const roboto = Roboto({weight:['500','400','700'], subsets: ["latin"] });

export const metadata = {
  title: {
    template:'%s | Next.js Class One',
    default:"Next JS Class One",
  },
  description: 'Home page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
      <Navar></Navar>
        {children}
       <Footer></Footer>
        </body>
    </html>
  );
}
