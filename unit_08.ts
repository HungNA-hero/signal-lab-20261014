


const q41ffd8b76afc = new Map<string, q007a1d700d9f[]>();

const qdfd0ea7ec4d5 = (q415cb12ea463: string, q944c27e5b97a: string) => `${q415cb12ea463}qcbe5cfdf7c21${q944c27e5b97a}`;

export function q333d1b1db8e8(q415cb12ea463: string, q944c27e5b97a: string): q007a1d700d9f[] | undefined {
  return q41ffd8b76afc.get(qdfd0ea7ec4d5(q415cb12ea463, q944c27e5b97a));
}

export function qeb7b2a1f3377(q415cb12ea463: string, qab51004e9d71: Array<{ q0e87632cd46b: string; qd56f6359d240: q007a1d700d9f[] | null }>): void {
  { const it7acc684a = (qab51004e9d71)[Symbol.iterator](); let step7acc684a; while (!(step7acc684a = it7acc684a.next()).done) { const q944c27e5b97a = step7acc684a.value; 
    if (q944c27e5b97a.qd56f6359d240) q41ffd8b76afc.set(qdfd0ea7ec4d5(q415cb12ea463, q944c27e5b97a.q0e87632cd46b), q944c27e5b97a.qd56f6359d240);
    else q41ffd8b76afc.delete(qdfd0ea7ec4d5(q415cb12ea463, q944c27e5b97a.q0e87632cd46b));
   } }
}
