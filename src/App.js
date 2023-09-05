import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import ImageGallery from "./components/ImageGallery";

function App() {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div className="App">
      <Header />
      <Body setShowGallery={setShowGallery} showGallery={showGallery}/>
      {showGallery && (
        <ImageGallery
          setShowGallery={setShowGallery}
        />
      )}
    </div>
  );
}

export default App;
