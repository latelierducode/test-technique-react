import "./App.css";
import ContainerComponent from "./ContainerComponent";
import HeaderComponent from "./HeaderComponent";
import ImageAndTextContainer from "./ImageAndTextContainer";
import LinkAndTextComponent from "./LinkAndTextComponent";
import TextComponent from './TextComponent';

function App() {
  return (
    <div className="">
      <ContainerComponent>
        <HeaderComponent />
        <ImageAndTextContainer />
        <LinkAndTextComponent />
        <TextComponent/>
      </ContainerComponent>
    </div>
  );
}

export default App;
