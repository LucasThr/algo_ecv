// const len: number = 10000;
// const toto: Array<number> | number[] = Array(len);

// for (let index = 0; index < 10; index++) {
//   toto.push(Math.random());
// }

// const logiqueDeTri = (a: number, b: number) => {
//   if (a < b) return 1;
//   if (a > b) return -1;
//   return 0;
// };

// const bench = () => {
//   const debut: number = Date.now();
//   const ret: Array<number> = toto.sort(logiqueDeTri);
//   return Date.now() - debut;
// };
// console.log(bench());
// console.log('ok');

const problemesFaciles: {
  [objectifs: string]: Array<string>;
} = {
  '': ['bla', 'bl', 'a'],
  abcdef: ['ab', 'abc', 'cd', 'def', 'abcd'],
  skateboard: ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'],
  enterapotentpot: ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'],
};
const problemesDifficile: {
  [objectifs: string]: Array<string>;
} = {
  eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef: [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
    'eeeeeeee',
  ],
};

const constructionPossible = (objectif: string, alphabet: Array<string>) => {
  if (objectif === '') return true;
  for (let element of alphabet) {
    if (objectif.indexOf(element) === 0) {
      const reste = objectif.slice(element.length);
      if (constructionPossible(reste, alphabet)) {
        return true;
      }
    }
  }
  return false;
};

function bench(problemes: {[p: string]: Array<string>}) {
  for (const objectif in problemes) {
    const alphabet = problemes[objectif];
    console.log(`"${objectif}" -> ${constructionPossible(objectif, alphabet)}`);
  }
}

console.log(bench(problemesFaciles));
