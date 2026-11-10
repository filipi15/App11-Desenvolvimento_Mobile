import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';

function App() {
  // Valor de cada moeda em Reais
  let initial_moedas = [
    { id: 1, nome: 'Real', valor: 1.00 },
    { id: 2, nome: 'Dólar', valor: 5.58 },
    { id: 3, nome: 'Euro', valor: 6.24 },
  ]

  const [moedas, setMoedas] = useState(initial_moedas)
  const [valor, setValor] = useState('')
  const [de, setDe] = useState(0)
  const [para, setPara] = useState(1)
  const [resultado, setResultado] = useState('')

  let moedasItem = moedas.map((item, chave) => {
    return <Picker.Item key={chave} value={chave} label={item.nome} />
  })

  function converter() {
    if (valor === '' || isNaN(parseFloat(valor))) {
      alert('Digite um valor válido!')
      return;
    }

    let valorEmReais = parseFloat(valor) * moedas[de].valor
    let convertido = valorEmReais / moedas[para].valor

    setResultado(convertido.toFixed(2) + ' (' + moedas[para].nome + ')')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversor de Moedas</Text>
      <Text style={styles.subtitulo}>Dólar, Real e Euro</Text>

      <Text style={styles.label}>Valor:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor"
        keyboardType="numeric"
        onChangeText={setValor}
      />

      <Text style={styles.label}>De:</Text>
      <Picker
        selectedValue={de}
        onValueChange={(itemValue, itemIndex) => setDe(itemValue)}
      >
        {moedasItem}
      </Picker>

      <Text style={styles.label}>Para:</Text>
      <Picker
        selectedValue={para}
        onValueChange={(itemValue, itemIndex) => setPara(itemValue)}
      >
        {moedasItem}
      </Picker>

      <Pressable style={styles.botao} onPress={converter}>
        <Text style={styles.textoBotao}>Converter</Text>
      </Pressable>

      <Text style={styles.resultadoTitulo}>Resultado</Text>
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}

export default App;
