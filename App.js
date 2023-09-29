import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

//import { Login } from './src/screens/Login';
//import { Cadastro } from './src/screens/Cadastro';
//import { Inicio } from './src/screens/Inicio';
//import { Link } from './src/components/LinkBtn';
//import { Contato } from './src/screens/Contato';
import { Router } from './src/routes/Router';
import { AuthProvider } from './src/context/AuthContext';
//import Comp from './src/components/Aula/CompF/comp';
//import Pai from './src/components/Aula/ComDireta/Pai'
//import Pai from './src/components/Aula/ComIndireta/Pai';

export default function App() {
  return (
    <>
      <AuthProvider>
        <Router />
      </AuthProvider>
      {/* 
      <Contato
        nome='Fábio Henrique'
        empr='IFB'
        tel='94853846'
        email='fabio.oliveira@ifb.com'
      />
     
      <Inicio />
      

      <Login />

      <Cadastro /> */}
      <StatusBar style='dark' />
    </>
  );
}

//<View style={styles.container}>

//    <Text>Hello World!</Text>

// {/* <Comp /> Aula componente */}

//{/* <Pai mensagem='Como vai?' /> Aula comDireta */}

//{/* <Pai /> Aula comIndireta */}

//{/* <Pai>
//      <Filho nome='Lucas' titulo='Pressione!' />
//</Pai> Aula comDirInd */}

//</View> 


/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
