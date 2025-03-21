import '@/assets/styles/globals.css';
import AuthProvider from '@/components/AuthProvider';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

export const metadata = {
  title: 'ProprtyPulse|Find Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental,find rentals,find properties',
};
const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang='en'>
        <body>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
