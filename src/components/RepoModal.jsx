import { useState, useEffect } from 'react';
import { analyzeRepoWithAI } from '../services/gemini';

export default function RepoModal({ repo, onClose }) {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const analyze = async () => {
      setLoading(true);
      try {
        const result = await analyzeRepoWithAI(repo);
        setAnalysis(result);
      } catch (error) {
        setAnalysis({
          joke: "Why did the repo cross the road? It didn't - it's been dead for months! 💀",
          verdict: "Unknown",
          reason: "AI analysis failed, but this repo looks pretty dead to me..."
        });
      } finally {
        setLoading(false);
      }
    };
    
    analyze();
  }, [repo]);
  
  // Close modal with Spacebar or Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space' || event.code === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const monthsAbandoned = Math.floor(
    (Date.now() - new Date(repo.pushed_at)) / (1000 * 60 * 60 * 24 * 30)
  );

  return (
    <div className="modal">
      <button className="close-btn" onClick={onClose}>✕</button>
      
      <h2>🪦 {repo.name}</h2>
      
      <p style={{ fontSize: '0.85rem', color: '#999', marginTop: '-10px', marginBottom: '15px' }}>
        Press <kbd>Space</kbd> or <kbd>Esc</kbd> to close
      </p>
      
      <div style={{ marginBottom: '20px' }}>
        <p><strong>Last Activity:</strong> {new Date(repo.pushed_at).toLocaleDateString()}</p>
        <p><strong>Abandoned For:</strong> {monthsAbandoned} months</p>
        <p><strong>Language:</strong> {repo.language || 'Unknown'}</p>
        <p><strong>Stars:</strong> ⭐ {repo.stargazers_count}</p>
        {repo.description && <p><strong>Description:</strong> {repo.description}</p>}
      </div>
      
      {loading ? (
        <div className="loading">
          🔮 AI is examining the remains...
        </div>
      ) : (
        <div>
          <h3 style={{ color: '#ff4500', marginBottom: '10px' }}>🤖 AI Judgment</h3>
          
          <div style={{ 
            background: 'rgba(139, 0, 0, 0.3)', 
            padding: '15px', 
            borderRadius: '5px',
            marginBottom: '15px'
          }}>
            <p style={{ fontStyle: 'italic', marginBottom: '10px' }}>
              "{analysis.joke}"
            </p>
          </div>
          
          <div style={{
            background: analysis.verdict === 'RESURRECT' 
              ? 'rgba(0, 139, 0, 0.3)' 
              : 'rgba(139, 0, 0, 0.3)',
            padding: '15px',
            borderRadius: '5px',
            border: `2px solid ${analysis.verdict === 'RESURRECT' ? '#00ff00' : '#ff4500'}`
          }}>
            <h4 style={{ marginBottom: '10px' }}>
              Verdict: {analysis.verdict === 'RESURRECT' ? '✅ RESURRECT' : '⚰️ REST IN PEACE'}
            </h4>
            <p>{analysis.reason}</p>
          </div>
          
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '15px',
              padding: '10px 20px',
              background: '#8b0000',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '5px'
            }}
          >
            Visit Repository →
          </a>
        </div>
      )}
    </div>
  );
}
