import './App.css';
import MapComponent from './MapComponent';
import TextBox from './TextBox';
import { Wrapper } from '@googlemaps/react-wrapper';

const App = () => (
  <Wrapper apiKey={'AIzaSyDnayUyvwBW4A4O34MkEQPqPeE-MegxnsA'}>
    <MapComponent />
    <TextBox />
  </Wrapper>
);

export default App;
