import { StyleSheet, FlatList } from 'react-native';

import { View } from '@/components/Themed';
import StockListItem from '@/components/StockListItem';
import top5 from '@/assets/data/top5.json';

export default function TabOneScreen() {
  const stocks = Object.values(top5);
  return (
    <View style={styles.container}>
      <FlatList
        data={stocks}
        renderItem={({ item }) => <StockListItem stock={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
