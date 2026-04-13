import { Helmet } from 'react-helmet-async';
import './App.css';
import Content from './Components/Content';

function App() {
  return (
    <>
    
          <Helmet>
            <title>ِApp Page</title>
          </Helmet>
      <Content title="Welcome to Our App" description="Discover amazing features!" />
    </>
  );
}

export default App;
