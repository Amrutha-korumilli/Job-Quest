import { Inter } from 'next/font/google';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

// You can customize the font as required
const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }) => {
  return (
    <>
      {/* Root Layout */}
      <html lang="en">
        <head />
        <body className={`${inter.className} bg-gray-100`}>
          <div className="flex h-screen overflow-hidden">
            {/* Sidebar - fixed on left side */}
            <Sidebar />

            <div className="flex-1 flex flex-col">
              {/* Header - fixed at the top */}
              <Header />

              <main className="flex-1 overflow-y-auto p-6">
                {children}
              </main>
            </div>
          </div>
        </body>
      </html>
    </>
  );
};

export default Layout;
