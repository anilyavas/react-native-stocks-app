import { StyleSheet, FlatList, ActivityIndicator } from 'react-native';

import { View, Text } from '@/components/Themed';
import StockListItem from '@/components/StockListItem';
import { gql, useQuery } from '@apollo/client';
import { Stack } from 'expo-router';

const query = gql`
  query MyQuery($symbol: String) {
    quotes(symbol: $symbol) {
      value {
        name
        symbol
        percent_change
        close
      }
    }
  }
`;
export default function TabOneScreen() {
  const { data, loading, error } = useQuery(query, {
    variables: { symbol: 'AAPL,IBM,META,NVDA,TSLA,AMD' },
  });

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Failed to fetch stocks</Text>;
  }

  const stocks = data.quotes.map((q: any) => q.value);
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Stocks' }} />
      <FlatList
        data={stocks}
        renderItem={({ item }) => <StockListItem stock={item} />}
        contentContainerStyle={{ padding: 10, gap: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
