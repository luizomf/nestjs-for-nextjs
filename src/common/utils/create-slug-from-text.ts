import { generateRandomSuffix } from './generate-random-suffix';
import { slugify } from './slugify';

export function createSlugFromText(text: string) {
  const slug = slugify(text);
  return `${slug}-${generateRandomSuffix()}`;
}
