import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 15,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: 'red',
  },
  subtitulo: {
    textAlign: 'center',
    fontSize: 20,
    color: 'red',
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    marginTop: 10,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    marginTop: 5,
    fontSize: 18,
    padding: 10,
  },
  botao: {
    height: 50,
    marginTop: 20,
    backgroundColor: '#4a7bd0',
    justifyContent: 'center',
  },
  textoBotao: {
    textAlign: 'center',
    fontSize: 18,
    color: '#FFF',
  },
  resultadoTitulo: {
    textAlign: 'center',
    fontSize: 22,
    color: 'green',
    marginTop: 20,
  },
  resultado: {
    textAlign: 'center',
    fontSize: 24,
    color: 'green',
    marginTop: 5,
  },
});

export { styles };
