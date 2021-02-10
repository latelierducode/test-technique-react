import "./App.css";
import ContainerComponent from "./ContainerComponent";
import HeaderComponent from "./HeaderComponent";
import ImageAndTextContainer from "./ImageAndTextContainer";

function App() {
  return (
    <div className="">
      <ContainerComponent>
        <HeaderComponent />
        <ImageAndTextContainer />
      </ContainerComponent>
    </div>
  );
}

export default App;
