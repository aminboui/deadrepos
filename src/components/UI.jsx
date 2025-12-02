import RepoModal from './RepoModal';

export default function UI({
  username,
  setUsername,
  onFetch,
  loading,
  error,
  repos,
  selectedRepo,
  onCloseModal,
  soundEnabled,
  onToggleSound,
  firstPersonMode,
  onToggleFirstPerson
}) {
  return (
    <div className="ui-overlay">
      <div className="header">
        <h1>💀 DeadRepos 💀</h1>
      </div>
      
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && onFetch()}
          disabled={loading}
          autoComplete="off"
        />
        <button onClick={onFetch} disabled={loading}>
          {loading ? 'Summoning...' : 'Enter Graveyard'}
        </button>
      </div>
      
      {error && (
        <div style={{
          position: 'absolute',
          top: '200px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(139, 0, 0, 0.9)',
          padding: '15px',
          borderRadius: '5px',
          pointerEvents: 'auto'
        }}>
          {error}
        </div>
      )}
      
      {repos.length > 0 && (
        <div className="instructions">
          <h3>👻 Instructions</h3>
          {firstPersonMode ? (
            <>
              <p>⌨️ WASD or Arrows to walk</p>
              <p>🖱️ Mouse to look around</p>
              <p>🪦 Click graves to dig them up</p>
              <p>⎋ ESC to unlock mouse</p>
            </>
          ) : (
            <>
              <p>🖱️ Click and drag to explore</p>
              <p>🪦 Click graves to dig them up</p>
              <p>🤖 AI will judge resurrection</p>
            </>
          )}
          <p>📊 Found {repos.length} abandoned repos</p>
        </div>
      )}
      
      <div className="kiro-badge">
        <div className="badge-content">
          <span className="badge-icon">🎃</span>
          <div className="badge-text">
            <div className="badge-title">Built with Kiro</div>
            <div className="badge-subtitle">Kiroween Hackathon 2025</div>
          </div>
        </div>
      </div>
      
      <div className="controls-panel">
        <button 
          className="control-toggle"
          onClick={onToggleSound}
          title={soundEnabled ? 'Mute sounds' : 'Enable sounds'}
        >
          {soundEnabled ? '🔊' : '🔇'}
        </button>
        
        <button 
          className="control-toggle"
          onClick={onToggleFirstPerson}
          title={firstPersonMode ? 'Switch to Orbit View' : 'Switch to First Person (WASD)'}
        >
          {firstPersonMode ? '🎥' : '🚶'}
        </button>
      </div>
      
      {selectedRepo && (
        <RepoModal repo={selectedRepo} onClose={onCloseModal} />
      )}
    </div>
  );
}
