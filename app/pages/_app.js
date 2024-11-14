// pages/_app.js
import { useRouter } from 'next/navigation';
import Navbar from '../component/Navbar/page';// Make sure to import your Navbar component
import '../styles/globals.scss' // Your global styles file, if any

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isLoginPage = router.pathname === '/loginpage'; // Check if the current page is the login page

  return (
    <div>
      {/* Conditionally render Navbar on all pages except login */}
      {!isLoginPage && <Navbar />}
      
      {/* Render the current page */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
