import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Text, View } from './Themed';

type Stock = {
  name: string;
  symbol: string;
  close: number;
  percent_change: number;
};
type StockListItem = {
  stock: Stock;
};
const StockListItem = ({ stock }: StockListItem) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', gap: 10, paddingBottom: 5 }}>
        <Text style={styles.name}>{stock.symbol}</Text>
        <AntDesign name='staro' size={20} color={'white'} />
        <View style={{ flex: 1 }} />
        <Text style={styles.price}>${stock.close}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.brandName}>{stock.name}</Text>
        <View style={{ flex: 1 }} />
        <Text style={styles.percentage}>{stock.percent_change}%</Text>
      </View>
    </View>
  );
};

export default StockListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingBottom: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  price: {
    fontSize: 20,
    color: 'snow',
    paddingRight: 10,
  },
  brandName: {
    color: 'grey',
    fontSize: 15,
  },
  percentage: {
    color: 'green',
    fontSize: 20,
    paddingRight: 10,
  },
});
