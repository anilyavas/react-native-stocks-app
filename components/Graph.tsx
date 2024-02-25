import { View, Text } from '@/components/Themed';
import { LineGraph, GraphPoint } from 'react-native-graph';
import { useState } from 'react';
import { MonoText } from './StyledText';
import { useQuery, gql } from '@apollo/client';
import { ActivityIndicator } from 'react-native';

const query = gql`
  query MyQuery($symbol: String!, $interval: String!) {
    time_series(interval: $interval, symbol: $symbol) {
      values {
        datetime
        close
      }
    }
  }
`;

const Graph = ({ symbol }: { symbol: string }) => {
  const [selectedPoint, setSelectedPoint] = useState<GraphPoint>();
  const { data, loading, error } = useQuery(query, {
    variables: { symbol, interval: '1day' },
  });

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Error</Text>;
  }
  const points: GraphPoint[] = data.time_series.values.map((value) => ({
    date: new Date(value.datetime),
    value: Number.parseFloat(value.close),
  }));

  const onPointSelected = (point: GraphPoint) => {
    setSelectedPoint(point);
  };
  return (
    <View>
      <Text>Graph</Text>
      <MonoText style={{ fontSize: 20, fontWeight: 'bold', color: '#017568' }}>
        ${selectedPoint?.value.toFixed(1)}
      </MonoText>
      <Text style={{ color: 'grey' }}>
        {selectedPoint?.date.toDateString()}
      </Text>

      <LineGraph
        style={{ width: '100%', height: 300 }}
        points={points}
        animated={true}
        color={'#017568'}
        gradientFillColors={['#0175605D', '#7476df00']}
        enablePanGesture
        onPointSelected={onPointSelected}
        indicatorPulsating
        enableFadeInMask
        enableIndicator
      />
    </View>
  );
};

export default Graph;
