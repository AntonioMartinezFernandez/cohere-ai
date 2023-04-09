import './config';

import { blue, bold } from 'colorette';
import prompts from 'prompts';

import { getResponseFromCohere } from './cohere-ai';

const main = () => {
  (async () => {
    const input = await prompts({
      type: 'text',
      initial: false,
      name: 'question',
      message: 'Q:',
    });

    const response = await getResponseFromCohere(input.question, 250);

    console.log(blue(bold(`A: ${response}`)));

    main();
  })();
};

main();
