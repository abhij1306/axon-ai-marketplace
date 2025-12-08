// Username generator utility
const adjectives = [
    'swift', 'brave', 'clever', 'bright', 'calm', 'bold', 'cool', 'wise',
    'quick', 'sharp', 'smart', 'keen', 'agile', 'fierce', 'noble', 'proud'
];

const nouns = [
    'panda', 'tiger', 'eagle', 'wolf', 'lion', 'hawk', 'bear', 'fox',
    'dragon', 'phoenix', 'falcon', 'panther', 'leopard', 'jaguar', 'lynx', 'cobra'
];

export function generateUsername(): string {
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const number = Math.floor(Math.random() * 100);

    return `${adjective}-${noun}-${number}`;
}
