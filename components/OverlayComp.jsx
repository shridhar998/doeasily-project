import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'

const OverlayComp = () => {
  return (
    <View style={styles.container}>
      <View style={{marginTop:31,marginLeft:46}}>
        <Image
        width={29}
        height={29}
        source={require("../assets/add.png")}
        />
        <Text style={{color:"#5A5A5A",fontFamily: "SFPro",fontSize: 12}}>Add Party</Text>
      </View>
      <View style={{flexDirection:"row",marginTop:61,marginLeft:46}}>
        <View >
            <Image
            width={29}
            height={29}
            source={require("../assets/transaction.png")}
            />
            <Text style={{color:"#5A5A5A",fontFamily: "SFPro",fontSize: 12}}>Transaction</Text>
        </View>
        <View style={{marginLeft:22}}>
            <Image
            width={29}
            height={29}
            source={require("../assets/metal.png")}
            />
            <Text style={{color:"#5A5A5A",fontFamily: "SFPro",fontSize: 12}}>Metal</Text></View>
        <View style={{marginLeft:22}}>
        <Image
        width={29}
        height={29}
        source={require("../assets/cash.png")}
        />
        <Text style={{color:"#5A5A5A",fontFamily: "SFPro",fontSize: 12}}>Cash</Text>
        </View>
        <View style={{marginLeft:22}}>
        <Image
        width={29}
        height={29}
        source={require("../assets/gold.png")}
        />
        <Text style={{color:"#5A5A5A",fontFamily: "SFPro",fontSize: 12}}>Bhavcut</Text>
        </View>

        
        
        
      </View>
    </View>
  )
}

const styles =StyleSheet.create({
    container:{
        width: 315,
        height: 302,
    }
})
export default OverlayComp