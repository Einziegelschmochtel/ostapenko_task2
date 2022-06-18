import React, { useState, useEffect } from 'react';

import {
  Appbar,
  Card,
  Paragraph,
  DefaultTheme,
  Provider as PaperProvider,
  TextInput,
} from 'react-native-paper';
import { ScrollView, Image, View } from 'react-native';

import Square from './components/Square';
import Circle from './components/Circle';
import Parallelogram from './components/Parallelogram';
import Triangle from './components/Triangle';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3e3e3e',
  },
};

function App() {
  const [inputs, setInputs] = useState({});
  const [results, setResults] = useState({});

  const handleSquareInput = (e) => {
    setInputs((prev) => ({ ...prev, square: { a: Number(e.target.value) } }));
  };

  const handleParallelogramInput = (e) => {
    setInputs((prev) => ({
      ...prev,
      parallelogram: { ...prev.parallelogram, b: Number(e.target.value) },
    }));
  };

  const handleParallelogramInput1 = (e) => {
    setInputs((prev) => ({
      ...prev,
      parallelogram: { ...prev.parallelogram, h: Number(e.target.value) },
    }));
  };

  const handleCircleInput = (e) => {
    setInputs((prev) => ({
      ...prev,
      circle: { r: Number(e.target.value) },
    }));
  };

  const handleTriangleInput = (e) => {
    setInputs((prev) => ({
      ...prev,
      triangle: { ...prev.triangle, a: Number(e.target.value) },
    }));
  };

  const handleTriangleInput1 = (e) => {
    setInputs((prev) => ({
      ...prev,
      triangle: { ...prev.triangle, b: Number(e.target.value) },
    }));
  };

  const handleTriangleInput2 = (e) => {
    setInputs((prev) => ({
      ...prev,
      triangle: { ...prev.triangle, c: Number(e.target.value) },
    }));
  };

  useEffect(() => {
    const square = {
      diagonal: Math.sqrt(2) * inputs.square?.a,
      area: inputs.square?.a ** 2,
      perimeter: 4 * inputs.square?.a,
    };
    const parallelogram = {
      area: inputs.parallelogram?.b * inputs.parallelogram?.h,
    };
    const circle = {
      area: Math.PI * inputs.circle?.r ** 2,
      circumference: Math.PI * 2 * inputs.circle?.r,
    };
    const triangle = {
      area: (inputs.triangle?.a * inputs.triangle?.b) / 2,
      p: inputs.triangle?.a + inputs.triangle?.b + inputs.triangle?.c,
    };
    setResults({ square, parallelogram, circle, triangle });
  }, [inputs]);
  return (
    <PaperProvider theme={theme}>
      <Appbar.Header>
        <Appbar.Content title="Task 2"></Appbar.Content>
        <View style={{ paddingRight: '.5rem' }}>
          <Image
            style={{ height: '48px', width: '48px' }}
            source={{
              uri: 'https://i.gifer.com/origin/56/562c0b23768e898a801985692a7f6c74.gif',
            }}
          />
        </View>
      </Appbar.Header>
      <ScrollView style={{ width: '100%' }}>
        <Card style={{ margin: '1.5rem' }} elevation={3}>
          <Card.Title title="Квадрат" />
          <Card.Content>
            <View style={{ alignItems: 'center' }}>
              <Square
                width="200px"
                height="200px"
                style={{ marginBottom: '1rem' }}
              />
            </View>
            <TextInput label="a" dense onChange={handleSquareInput} />
            <Paragraph style={{ marginTop: '1rem', marginBottom: '.25rem' }}>
              Діагональ
            </Paragraph>
            <TextInput dense disabled value={results.square?.diagonal || ''} />
            <Paragraph style={{ marginTop: '.5rem', marginBottom: '.25rem' }}>
              Площа
            </Paragraph>

            <TextInput dense disabled value={results.square?.diagonal || ''} />
            <Paragraph style={{ marginTop: '.5rem', marginBottom: '.25rem' }}>
              Периметр
            </Paragraph>
            <TextInput dense disabled value={results.square?.perimeter || ''} />
          </Card.Content>
        </Card>
        <Card style={{ margin: '1.5rem', marginTop: 0 }} elevation={3}>
          <Card.Title title="Паралелограм" />
          <Card.Content>
            <View style={{ alignItems: 'center' }}>
              <Parallelogram
                width="200px"
                height="200px"
                style={{ marginBottom: '-1rem', marginTop: '-2rem' }}
              />
            </View>
            <TextInput
              label="b"
              dense
              onChange={handleParallelogramInput}
              style={{ marginBottom: '.5rem' }}
            />
            <TextInput label="h" dense onChange={handleParallelogramInput1} />
            <Paragraph style={{ marginTop: '1rem', marginBottom: '.25rem' }}>
              Площа
            </Paragraph>
            <TextInput
              dense
              disabled
              value={results.parallelogram?.area || ''}
            />
          </Card.Content>
        </Card>
        <Card style={{ margin: '1.5rem', marginTop: 0 }} elevation={3}>
          <Card.Title title="Круг" />
          <Card.Content>
            <View style={{ alignItems: 'center' }}>
              <Circle
                width="200px"
                height="200px"
                style={{ marginBottom: '1rem' }}
              />
            </View>
            <TextInput label="r" dense onChange={handleCircleInput} />
            <Paragraph style={{ marginTop: '1rem', marginBottom: '.25rem' }}>
              Площа
            </Paragraph>
            <TextInput dense disabled value={results.circle?.area || ''} />

            <Paragraph style={{ marginTop: '.5rem', marginBottom: '.25rem' }}>
              Довжина окружності
            </Paragraph>
            <TextInput
              dense
              disabled
              value={results.circle?.circumference || ''}
            />
          </Card.Content>
        </Card>
        <Card style={{ margin: '1.5rem', marginTop: 0 }} elevation={3}>
          <Card.Title title="Прямокутний трикутник" />
          <Card.Content>
            <View style={{ alignItems: 'center' }}>
              <Triangle
                width="200px"
                height="200px"
                style={{ marginBottom: '1rem' }}
              />
            </View>

            <TextInput
              label="a"
              dense
              onChange={handleTriangleInput}
              style={{ marginBottom: '.5rem' }}
            />
            <TextInput
              label="b"
              dense
              onChange={handleTriangleInput1}
              style={{ marginBottom: '.5rem' }}
            />
            <TextInput label="c" dense onChange={handleTriangleInput2} />

            <Paragraph style={{ marginTop: '1rem', marginBottom: '.25rem' }}>
              Площа
            </Paragraph>
            <TextInput dense disabled value={results.triangle?.area || ''} />

            <Paragraph style={{ marginTop: '.5rem', marginBottom: '.25rem' }}>
              Периметр
            </Paragraph>
            <TextInput dense disabled value={results.triangle?.p || ''} />
          </Card.Content>
        </Card>
      </ScrollView>
    </PaperProvider>
  );
}

export default App;
