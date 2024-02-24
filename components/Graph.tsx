import { View, Text } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { LineGraph, GraphPoint } from 'react-native-graph';
import timeseries from '@/assets/data/timeseries.json';
import { useState } from 'react';
import { MonoText } from './StyledText';

const Graph = () => {
  const points: GraphPoint[] = timeseries.values.map((value) => ({
    date: new Date(value.datetime),
    value: Number.parseFloat(value.close),
  }));
  const [selectedPoint, setSelectedPoint] = useState<GraphPoint>(
    points[points.length - 1]
  );

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
