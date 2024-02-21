import { StyleSheet, FlatList } from 'react-native';

import { Text, View } from '@/components/Themed';
import StockListItem from '@/components/StockListItem';
import top5 from '@/assets/data/top5.json';

export default function TabOneScreen() {
  const stocks = Object.values(top5);
  return (
    <View style={styles.container}>
      <FlatList
        data={stocks}
        renderItem={({ item }) => (
          <StockListItem
            symbol={item.symbol}
            name={item.name}
            percent_change={item.percent_change}
            close={item.close}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
