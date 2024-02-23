import { View, Text } from '@/components/Themed';
import { useLocalSearchParams } from 'expo-router';

const StockDetails = () => {
  const { symbol } = useLocalSearchParams();
  return (
    <View>
      <Text>stock: {symbol}</Text>
    </View>
  );
};

export default StockDetails;
