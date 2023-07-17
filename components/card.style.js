import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width: 304,
        height: 85,
        flexShrink: 0,
        borderRadius: 10,
        background: "#FFF",
        borderWidth:3,
        borderColor:"rgba(0, 0, 0, 0.10)",
        padding:10,
        marginTop:8,
        
        // box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.10)
    },
    title:{
        color: "#4F617D",
        fontFamily: "SFPro",
        fontSize: 16,
        fontStyle: "normal",
    },
    indi:{
        marginTop:8.73,
        flexDirection:"row"
    },
    silver:{
        color: "#C54242",
        fontFamily: "SFPro",
        fontSize: 13,
        fontStyle: "normal"
    },
    gold:{
        color: "#72A701",
        fontFamily: "SFPro",
        fontSize: 13,
        fontStyle: "normal"
    },
    amount:{
        color: "#72A701",
        fontFamily: "SFPro",
        fontSize: 13,
        fontStyle: "normal"
    },
    silverbox:{
        width: 105,
        height: 26,
        flexShrink: 0
    },
    goldbox:{
        width: 95,
        height: 26,
        flexShrink: 0
    },
    amountbox:{
        width: 85.748,
        height: 26.292,
        flexShrink: 0
    }
})

export default styles;