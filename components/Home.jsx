import { View, Text, TextInput,Image, TouchableOpacity } from "react-native";
import React,{useState} from "react";
import { Button, Overlay } from 'react-native-elements';
import { SafeAreaView } from "react-native";
import { SvgXml } from "react-native-svg";
import Card from "./Card";
import styles from "./home.style";
import OverlayComp from "./OverlayComp";
const Home = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const handleClick = () => {
    toggleOverlay()
  }


  const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 6C15.9012 5.99962 13.8389 6.54973 12.0191 7.59544C10.1993 8.64115 8.68557 10.1459 7.62904 11.9594C6.57251 13.773 6.01013 15.8319 5.99802 17.9308C5.98591 20.0296 6.52449 22.0949 7.56002 23.9205C8.25993 23.0109 9.15966 22.2744 10.1896 21.768C11.2196 21.2616 12.3523 20.9988 13.5 21H22.5C23.6478 20.9988 24.7804 21.2616 25.8104 21.768C26.8404 22.2744 27.7401 23.0109 28.44 23.9205C29.4755 22.0949 30.0141 20.0296 30.002 17.9308C29.9899 15.8319 29.4275 13.773 28.371 11.9594C27.3145 10.1459 25.8008 8.64115 23.9809 7.59544C22.1611 6.54973 20.0989 5.99962 18 6ZM29.9145 27.114C31.9201 24.4995 33.0049 21.2952 33 18C33 9.7155 26.2845 3 18 3C9.71552 3 3.00002 9.7155 3.00002 18C2.99506 21.2952 4.07988 24.4995 6.08552 27.114L6.07802 27.141L6.61052 27.7605C8.01734 29.4053 9.76409 30.7254 11.7304 31.63C13.6966 32.5345 15.8357 33.0019 18 33C21.041 33.0056 24.0111 32.0819 26.5125 30.3525C27.5789 29.6157 28.5459 28.7445 29.3895 27.7605L29.922 27.141L29.9145 27.114ZM18 9C16.8065 9 15.662 9.47411 14.818 10.318C13.9741 11.1619 13.5 12.3065 13.5 13.5C13.5 14.6935 13.9741 15.8381 14.818 16.682C15.662 17.5259 16.8065 18 18 18C19.1935 18 20.3381 17.5259 21.182 16.682C22.0259 15.8381 22.5 14.6935 22.5 13.5C22.5 12.3065 22.0259 11.1619 21.182 10.318C20.3381 9.47411 19.1935 9 18 9Z" fill="#4F617D"/>
</svg>
`;
  const xml2 = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
<path d="M12.375 13.25L8.4375 9.3125C8.125 9.5625 7.76562 9.76042 7.35938 9.90625C6.95312 10.0521 6.52083 10.125 6.0625 10.125C4.92708 10.125 3.96625 9.73167 3.18 8.945C2.39375 8.15833 2.00042 7.1975 2 6.0625C2 4.92708 2.39333 3.96625 3.18 3.18C3.96667 2.39375 4.9275 2.00042 6.0625 2C7.19792 2 8.15875 2.39333 8.945 3.18C9.73125 3.96667 10.1246 4.9275 10.125 6.0625C10.125 6.52083 10.0521 6.95312 9.90625 7.35938C9.76042 7.76562 9.5625 8.125 9.3125 8.4375L13.25 12.375L12.375 13.25ZM6.0625 8.875C6.84375 8.875 7.50792 8.60146 8.055 8.05438C8.60208 7.50729 8.87542 6.84333 8.875 6.0625C8.875 5.28125 8.60146 4.61708 8.05438 4.07C7.50729 3.52292 6.84333 3.24958 6.0625 3.25C5.28125 3.25 4.61708 3.52354 4.07 4.07063C3.52292 4.61771 3.24958 5.28167 3.25 6.0625C3.25 6.84375 3.52354 7.50792 4.07063 8.055C4.61771 8.60208 5.28167 8.87542 6.0625 8.875Z" fill="#ACACAC"/>
</svg>`;

  const dummyData = [
    {
      title: "Total",
      Silver: "-14500.00",
      Gold: "+133.500",
      Amount: "₹6,76,000",
    },
    {
      title: "Stock",
      Silver: "-14500.00",
      Gold: "+133.500",
      Amount: "₹6,76,000",
    },
    {
      title: "Karigar",
      Silver: "-14500.00",
      Gold: "+133.500",
      Amount: "₹6,76,000",
    },
    {
      title: "Supplier",
      Silver: "-14500.00",
      Gold: "+133.500",
      Amount: "₹6,76,000",
    },
    {
      title: "Bullion",
      Silver: "-14500.00",
      Gold: "+133.500",
      Amount: "₹6,76,000",
    },
    {
      title: "Customer",
      Silver: "-14500.00",
      Gold: "+133.500",
      Amount: "₹6,76,000",
    },
  ];
  return (
    <SafeAreaView>
      <View style={styles.image}>
      <Image
        source={require("../assets/battery.png")}
      />
      </View>
      
      <View style={styles.container}>
        <SvgXml xml={xml} width={36} height={36} />
        <View style={styles.headerContainer}>
          <Text style={styles.headerStyle}>Mannalal Manaklal</Text>
        </View>
      </View>
      <View style={styles.textInput}>
        <SvgXml xml={xml2} width={25} height={25} />
        <TextInput
          style={styles.inputField}
          onChangeText={() => {}}
          placeholder="Search Party"
        />
      </View>
      <View style={styles.tabs}>
        <View style={styles.both}>
          <Text style={styles.tabsTextBoth}>Both</Text>
        </View>
        <View style={styles.silver}>
          <Text style={styles.tabsText}>Silver</Text>
        </View>
        <View style={styles.silver}>
          <Text style={styles.tabsText}>Gold</Text>
        </View>
      </View>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <OverlayComp/>
      </Overlay>
      <View style={styles.cards}>
        {
          dummyData.map((item,index)=>{
            return(
            <Card
              key={index}
              amount={item.Amount}
              gold={item.Gold}
              silver={item.Silver}
              title={item.title}
            />
            )
          })
        }
      </View>
      <View style={styles.plus}>
        <TouchableOpacity onPress={()=>handleClick()}>
          <Image source={!visible?require("../assets/flat-plus.png"):require("../assets/Collapse-Icon.png")} width={46} height={46} />
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
};

export default Home;
