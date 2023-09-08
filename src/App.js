import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import ImageGallery from "./components/ImageGallery";

function App() {
  const [showGallery, setShowGallery] = useState(false)
  const [amount, setAmount] = useState(0)

  return (
    <div className="App">
      <Header props={{amount, setAmount}}/>
      <Body setShowGallery={setShowGallery} showGallery={showGallery} amount={amount} setAmount={setAmount}/>
      <ImageGallery setShowGallery={setShowGallery} showGallery={showGallery} />
    </div>
  );
}

export default App;
