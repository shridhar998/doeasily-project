import { View, Text } from 'react-native'
import React from 'react'
import styles from './card.style'

const Card = ({amount,gold,silver,title}) => {
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.indi}>
        <View style={styles.silverbox}>
          <Text>Silver</Text>
          <Text style={styles.silver}>{silver} Gms</Text>
        </View>
        <View style={styles.goldbox}>
          <Text>Gold</Text>
          <Text style={styles.gold}>{gold}</Text>
        </View>
        <View style={styles.amountbox}>
          <Text>Amount</Text>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </View>
  )
}

export default Card