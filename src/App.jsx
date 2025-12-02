import { useState } from 'react';
import Cemetery from './components/Cemetery';
import UI from './components/UI';
import SoundManager from './components/SoundManager';
import IntroScreen from './components/IntroScreen';
import { fetchGitHubRepos } from './services/github';

function App() {
  const [username, setUsername] = useState('');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [firstPersonMode, setFirstPersonMode] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  const [isWalking, setIsWalking] = useState(false);

  const handleFetchRepos = async () => {
    if (!username.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const abandonedRepos = await fetchGitHubRepos(username);
      setRepos(abandonedRepos);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showIntro && <IntroScreen onComplete={() => setShowIntro(false)} />}
      
      <Cemetery 
        repos={repos} 
        onGraveClick={setSelectedRepo}
        firstPersonMode={firstPersonMode}
        onWalkingChange={setIsWalking}
      />
      <SoundManager enabled={soundEnabled} isWalking={isWalking} />
      <UI
        username={username}
        setUsername={setUsername}
        onFetch={handleFetchRepos}
        loading={loading}
        error={error}
        repos={repos}
        selectedRepo={selectedRepo}
        onCloseModal={() => setSelectedRepo(null)}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
        firstPersonMode={firstPersonMode}
        onToggleFirstPerson={() => setFirstPersonMode(!firstPersonMode)}
      />
    </>
  );
}

export default App;
