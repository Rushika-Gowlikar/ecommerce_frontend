
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartCountProvider } from './context/CartContext'; 
import BootstrapClient from './bootstrap-client';

export const metadata = {
  title: 'Online Store',
  description: 'Your online store',
  icons: {
    icon: 'https://cdn-icons-png.flaticon.com/512/1170/1170678.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <CartCountProvider> 
         <BootstrapClient /> 
          {children}
        </CartCountProvider>
      </body>
    </html>
  );
}

