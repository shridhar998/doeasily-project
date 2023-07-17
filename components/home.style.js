import { StyleSheet } from "react-native";

const styles =StyleSheet.create({
    image:{
        width:400,
        height:43,
        marginTop:11,
        right:30
    },
    container:{
        marginLeft:10,
        flexDirection:"row",
    },
    headerStyle:{
        color: "#4F617D",
        fontFamily: "SFPro",
        fontSize: 20,
        fontStyle: "normal",
    },
    textInput:{
        flexDirection:"row",
        borderColor:"#4F617D",
        borderWidth:1,
        borderRadius:5,
        height: 33,
        width: 304,
        marginLeft:46,
        marginTop:30
    },
    headerContainer:{
        width: 178,
        height:21,
        flexShrink:0,
        marginTop:5,
        marginLeft:5
    },
    tabs:{
        flexDirection:"row",
        marginLeft:46,
        marginTop:21,
    },
    both:{
        borderColor:"#7F90AB",
        borderWidth:1,
        width: 57,
        height: 21,
        flexShrink: 0,
        alignItems:"center",
        borderRadius:10,
        backgroundColor:"#7F90AB"
    },
    silver:{
        borderColor:"#7F90AB",
        marginLeft:5,
        borderWidth:1,
        width: 57,
        height: 21,
        flexShrink: 0,
        alignItems:"center",
        borderRadius:10
    },
    tabsText:{
        color: "#7F90AB",
        fontFamily: "SFPro",
        fontSize: 14,
        fontStyle: "normal"
    },
    tabsTextBoth:{
        color:"#FFF",
        fontFamily: "SFPro",
        fontSize: 14,
        fontStyle: "normal"
    },
    cards:{
        flexDirection:"column",
        marginLeft:46,
        marginTop:21,
    },
    plus:{
        marginLeft:348
    }
});

export default styles;