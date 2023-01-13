
import './App.css';
import StyledButton , {FancyButton} from './components/Button/Button';

function App() {
  return (
    <div className="App">
      {/* <button>Button</button> */}
      <StyledButton>Styled Button</StyledButton>
      <div><br /></div>
      <StyledButton variant="outline">Styled Button</StyledButton>
      <div><br /></div>
      <FancyButton>Fancy Button</FancyButton>
    </div>
  );
}

export default App;
