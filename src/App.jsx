import './App.css';
import React from 'react'
import ImageOne from './components/ImageOne'
import ImageTwo from './components/ImageTwo'
import ImageThree from './components/ImageThree'
import TextBox from './components/TextBox'
import ImageSlider from './components/imageSlider';
import Header from './components/Header';
function App() {
  return (
    <>
    <Header/>
      <ImageOne />
      <ImageSlider/>
      <ImageTwo />
      <TextBox />
      <ImageThree />
    </>
  );
}
export default App