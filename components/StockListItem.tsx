import { StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Text, View } from './Themed';
import Colors from '@/constants/Colors';
import { MonoText } from './StyledText';
import { Link } from 'expo-router';

type Stock = {
  name: string;
  symbol: string;
  close: string;
  percent_change: string;
};
type StockListItem = {
  stock: Stock;
};
const StockListItem = ({ stock }: StockListItem) => {
  const change = Number.parseFloat(stock.percent_change);
  const close = Number.parseFloat(stock.close);
  return (
    <Link href={`/${stock.symbol}`} asChild>
      <Pressable style={styles.container}>
        <View style={{ flexDirection: 'row', gap: 10, paddingBottom: 5 }}>
          <Text style={styles.symbol}>
            {stock.symbol} <AntDesign name='staro' size={18} color={'grey'} />
          </Text>
          <View style={{ flex: 1 }} />
          <MonoText style={{}}>${close.toFixed(1)}</MonoText>
        </View>
        <View style={{ flexDirection: 'row', gap: 10, paddingBottom: 5 }}>
          <Text style={styles.brandName}>{stock.name}</Text>
          <View style={{ flex: 1 }} />
          <MonoText style={{ color: change > 0 ? 'green' : 'red' }}>
            {change > 0 ? '+' : ''}
            {change.toFixed(1)}%
          </MonoText>
        </View>
      </Pressable>
    </Link>
  );
};

export default StockListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingBottom: 5,
  },
  symbol: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.tint,
  },

  brandName: {
    color: 'grey',
    fontSize: 15,
  },
});
