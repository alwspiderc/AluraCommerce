import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useContext } from "react";
import { estilos } from "./estilos";
import { TemaContext } from "../../contexts/TemaContext";


export default function Finalizar({ navigation }) {
  const { temaEscolhido } = useContext(TemaContext);
  const estilo = estilos(temaEscolhido);


  return (
    <View style={estilo.container}>
      <StatusBar />
      <TouchableOpacity style={estilo.botao} onPress={() => navigation.navigate("Principal")}>
        <Text style={estilo.botaoTexto}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}
