import 'bootstrap/dist/css/bootstrap.css';
import "bulma/css/bulma.css";
import NextApiHandler from '../../middlewares/session';


import { SSRProvider } from 'react-bootstrap';


export default function App({ Component, pageProps }) {
  return(
    <SSRProvider>
   <Component {...pageProps} />
   </SSRProvider>
   )
}
