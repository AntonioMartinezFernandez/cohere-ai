import * as dotenv from 'dotenv';
dotenv.config();
import { getResponseFromCohere } from '../src/cohere-ai';

describe('Cohere Test', () => {
  it('Response must be a string', async () => {
    const response = await getResponseFromCohere('hello', 5);
    expect(typeof response).toBe('string');
  });
  it('Response must have minimum 10 characters', async () => {
    const response = await getResponseFromCohere('hello', 5);
    expect(response.length > 10).toBeTruthy;
  });
});
