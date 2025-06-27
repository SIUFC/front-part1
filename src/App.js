import React, { useState } from 'react';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Nivel from './pages/Nivel/Nivel';
import Ano from './pages/Nivel/Junior/Ano';
import Fase from './pages/Nivel/Junior/2021/Fase';
import Questao1 from './pages/Nivel/Junior/2021/Questões/Questao1';


function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  const navigateToCadastro = () => setCurrentScreen('cadastro');
  const navigateToLogin = () => setCurrentScreen('login');
  const navigateToNivel = () => setCurrentScreen('nivel');
  const navigateToAno = () => setCurrentScreen('ano');
  const navigateToFase = () => setCurrentScreen('fase');
  const navigateToQuestao1 = () => setCurrentScreen('questao1');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'cadastro':
        return <Cadastro onNavigateToLogin={navigateToLogin} />;

      case 'nivel':
        return (
          <Nivel
            onNavigateToLogin={navigateToLogin}
            onNavigateToAno={navigateToAno}
          />
        );

      case 'ano':
        return (
          <Ano
            onNavigateBack={() => setCurrentScreen('nivel')}
            onNavigateToFase={navigateToFase}
          />
        );

      case 'fase':
        return (
          <Fase
            onNavigateBack={() => setCurrentScreen('ano')}
            onNavigateToQuestao={navigateToQuestao1}
          />
        );
      
      case 'questao1':
        return (
          <Questao1 
            onNavigateBack={() => setCurrentScreen('fase')}
          />
        );

      case 'login':
      default:
        return (
          <Login
            onNavigateToCadastro={navigateToCadastro}
            onNavigateToNivel={navigateToNivel}
          />
        );
    }
  };

  return <div className="App">{renderScreen()}</div>;
}

export default App;