import '@/assets/styles/globals.css';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

export const metadata = {
  title: 'ProprtyPulse|Find Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental,find rentals,find properties',
};
const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
