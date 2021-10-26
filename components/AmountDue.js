import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const AmountDue = ({ title, subTotal, tipPercent}) => {
    return (
        <View style={styles.amountOutput}>
            <View style={styles.amountOutputElement}>
                <Text style={textStyles.accentedtext}>{ title }</Text>
                <View style={styles.totalDue}>
                    <Text style={[textStyles.textWhite, textStyles.dollarSign]}>$</Text>
                    <Text style={[textStyles.textWhite, textStyles.dollars]}>
                        {Math.floor(subTotal * (1 + tipPercent / 100 ))}
                    </Text>
                    <Text style={[textStyles.textWhite, textStyles.cents]}>
                        {( subTotal * (1 + tipPercent / 100 ) - Math.floor(subTotal * (1 + tipPercent / 100 )))
                        .toFixed(2)
                        .slice(1)}
                    </Text>
                </View>
                <Text style={textStyles.textWhite}>Total</Text>
            </View>
            <View style={styles.verticalLine}></View>
            <View style={styles.amountOutputElement}>
                <Text style={[textStyles.textWhite, textStyles.subtitle]}>SUBTOTAL</Text>
                <Text style={textStyles.textWhite}>${ subTotal }</Text>
                <Text style={[textStyles.textWhite, textStyles.subtitle]}>TIP</Text>
                <Text style={textStyles.textWhite}>$ { (subTotal * (tipPercent / 100)).toFixed(2) }</Text>
            </View>
        </View>
    )
}

export default AmountDue


const styles = StyleSheet.create({
    amountOutput: {
      backgroundColor: '#444',
      padding: 20,
      width: '90%',
      marginVertical: 10,
      borderRadius: 10,
      flexDirection: 'row',
    },
    amountOutputElement: {
        width: '50%',
    },
    verticalLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#909090',
        opacity: 0.5,
        marginHorizontal: 10,
    },
    totalDue: {
        flexDirection: 'row',
    }
  })

  const textStyles = StyleSheet.create({
      textWhite: {
          color: '#f4f3f3',
          fontWeight: '700',
          fontSize: 20,
      },
      dollarSign: {
          marginTop: 8,
      },
      dollars: {
          fontSize: 70,
          fontWeight: '700',
      },
      cents: {
          alignSelf: 'flex-end',
          marginBottom: 15,
          marginLeft: 5,
      },
      accentedtext: {
          color: '#ff007f',
          fontWeight: '800',
          fontSize: 20,
          marginBottom: 4,
      },
      subtitle: {
          fontSize: 14,
          marginTop: 16,
      }
  })