import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext'; 
import BootstrapClient from './bootstrap-client';
export const metadata = {
  title: 'Online Store',
  description: 'Your online store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <BootstrapClient/>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
