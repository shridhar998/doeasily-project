import { useFonts } from 'expo-font';
import Home from './components/Home';
import { Image } from 'react-native';
export default function App() {
  const [loaded] =useFonts({
    SFPro:require("./assets/fonts/SF-Pro-Display-Medium.ttf")
  })
  if(!loaded){
    return null;
  }
  return (
    <>
    
      <Home/>
    </>

  );
}
