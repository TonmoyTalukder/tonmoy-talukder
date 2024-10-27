import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "../components/dev-page/context/active-section-context";
import Header from "../components/dev-page/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dev | Tonmoy Talukder",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative`}
        key="root-layout"
      >
        <div>
          <div className="bg-[#e2f4fb] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
          <div className="bg-[#e8e6dd] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
          <ActiveSectionContextProvider>
            <Header />
            <div style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>{children}</div>
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  );
}
