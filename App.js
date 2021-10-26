import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import AmountDue from "./components/AmountDue";

export default function App() {
  return (
    <SafeAreaView style={styles.container} >
      <AmountDue title={'PER PERSON'} subTotal={75.98/2} tipPercent={15} />
      <AmountDue title={'AMOUNT DUE'} subTotal={75.98} tipPercent={15} />
      <View style={styles.tipSelector}>
        <Pressable style={styles.tipItem}>
          <Text style={styles.textWhite}>10%</Text>
        </Pressable>
        <Pressable style={styles.tipItem}>
          <Text style={styles.textWhite}>15%</Text>
        </Pressable>
        <Pressable style={styles.tipItem}>
          <Text style={styles.textWhite}>20%</Text>
        </Pressable>
        <Pressable style={styles.tipItem}>
          <Text style={styles.textWhite}>25%</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1d1d',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  tipSelector: {
    flexDirection: 'row',
    marginTop: 20,
  },  
  tipItem: {
    backgroundColor: '#909090',
    padding: 10,
    margin: 5,
    borderRadius: 50,
  },
  textWhite: {
    color: '#f4f3f3',
    fontWeight: '600',
    fontSize: 20,
  }
})