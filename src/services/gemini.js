import { GoogleGenerativeAI } from '@google/generative-ai';

export async function analyzeRepoWithAI(repo) {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    if (!apiKey) {
      return generateFallbackAnalysis(repo);
    }
    
    const genAI = new GoogleGenerativeAI(apiKey);
    // FIX: Changed model ID from 'gemini-flash-2.5' to the correct 'gemini-2.5-flash'
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    
    const prompt = `You are a witty AI judge examining a dead GitHub repository in a spooky graveyard.

Repository: ${repo.name}
Language: ${repo.language || 'Unknown'}
Description: ${repo.description || 'No description'}
Stars: ${repo.stargazers_count}
Last updated: ${repo.pushed_at}
Months abandoned: ${Math.floor((Date.now() - new Date(repo.pushed_at)) / (1000 * 60 * 60 * 24 * 30))}

Your task:
1. Tell a SHORT, funny programming joke related to this repo (max 2 sentences)
2. Decide if it deserves to be RESURRECTED or should REST IN PEACE
3. Give a brief reason (1-2 sentences)

Respond in JSON format:
{
  "joke": "your joke here",
  "verdict": "RESURRECT" or "RIP",
  "reason": "your reason here"
}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    
    return generateFallbackAnalysis(repo);
  } catch (error) {
    console.error('AI analysis failed:', error);
    return generateFallbackAnalysis(repo);
  }
}

function generateFallbackAnalysis(repo) {
  const jokes = [
    `This repo is so old, it still uses ${repo.language || 'stone tablets'} from the ancient times! 🗿`,
    `Why did ${repo.name} die? Because nobody git pushed it! 💀`,
    `This code is like a zombie - technically dead but still haunting your profile! 🧟`,
    `${repo.name} has been ghosting you longer than your last relationship! 👻`,
    `This repo is more abandoned than a haunted house on Halloween! 🏚️`
  ];
  
  const shouldResurrect = repo.stargazers_count > 5 || 
                          (repo.language && ['JavaScript', 'Python', 'TypeScript', 'Go', 'Rust'].includes(repo.language));
  
  return {
    joke: jokes[Math.floor(Math.random() * jokes.length)],
    verdict: shouldResurrect ? 'RESURRECT' : 'RIP',
    reason: shouldResurrect 
      ? `With ${repo.stargazers_count} stars and ${repo.language || 'potential'}, this repo has unfinished business!`
      : `After ${Math.floor((Date.now() - new Date(repo.pushed_at)) / (1000 * 60 * 60 * 24 * 30))} months of silence, it's time to let go. RIP.`
  };
}