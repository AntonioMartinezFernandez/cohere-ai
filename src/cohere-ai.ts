import co from 'cohere-ai';
const API_KEY = process.env.COHERE_APIKEY as string;
co.init(API_KEY);

export const getResponseFromCohere = async (
  prompt: string,
  max_tokens: number,
): Promise<string> => {
  const response = await co.generate({
    model: 'command-xlarge-beta',
    prompt: prompt,
    max_tokens: max_tokens,
    temperature: 0.8,
    k: 0,
    p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: ['--'],
    return_likelihoods: 'NONE',
  });
  return response.body.generations[0].text.slice(1);
};
