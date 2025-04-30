export function parseCorsWhitelist(raw: string): string[] {
  return raw
    .split(/\s+/g)
    .map(url => url.replace(/\/+$/, ''))
    .filter(Boolean); // remove strings vazias
}
