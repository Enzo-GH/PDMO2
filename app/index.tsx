import { useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [nome, setNome] = useState("");
  const [palpite, setPalpite] = useState("");

  const handleEnviar = () => {
    if (!nome.trim() || !palpite.trim()) {
      Alert.alert("Campos obrigatórios", "Por favor, preencha seu nome e seu palpite.");
      return;
    }

    Alert.alert("Palpite Enviado!", `Nome: ${nome}\nPalpite: ${palpite}`);
  };

  return(
    <View>
      <Image source={{ uri: 'https://www.meioemensagem.com.br/wp-content/uploads/2023/05/fifa-thumb.jpg'}} style={styles.imagem}/>
      <Text style={styles.label}>Seu Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome..."
        value={nome}
        onChangeText={setNome}
      />
      <Text style={styles.label}>Seu Palpite</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu palpite..."
        value={palpite}
        onChangeText={setPalpite}
      />
      <BotaoSimples onPress={handleEnviar} />
    </View>
  );
};

const BotaoSimples = ({ onPress }: { onPress: () => void }) => {
  return (
    <View style={styles.container}>
      <Button title="Enviar" color="#841584" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  imagem: { width: 350, height: 350, marginBottom: 30, resizeMode: 'contain' },
  label: { fontSize: 16, marginBottom: 8},
  input: { height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, marginBottom: 16, paddingHorizontal: 10,},
});