export function slugify(text: string): string {
  return text
    .normalize('NFKD') // separa acentos de letras (ex: á → a + ́)
    .toLocaleLowerCase() // tudo minúsculo
    .replace(/[\u0300-\u036f]/g, '') // remove acentos (marcadores Unicode)
    .replace(/[^a-z0-9]+/g, ' ') // troca tudo que não for letra/número por espaço
    .trim() // remove espaços no início/fim
    .replace(/\s+/g, '-'); // espaço → hífen
}
