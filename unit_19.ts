
const q321a8296d829 = /^sec_(?:[a-z]+_)*q$/;


export function qa446c7b9da51(q6da0633528de: Record<string, string>, qc6c1c9a9c854: Record<string, string>): boolean | null {
  const qd67e2e944994 = Object.keys({ ...q6da0633528de, ...qc6c1c9a9c854 }).filter((q2c70e12b7a06) => q4cfabc7cfb52(q2c70e12b7a06) && q6da0633528de[q2c70e12b7a06] !== qc6c1c9a9c854[q2c70e12b7a06]);
  if (!qd67e2e944994.length) return null;
  if (q6859eaf31f53.includes(q6da0633528de.q1d59dcb96c9d ?? '') || q6da0633528de.q0d0ffb4e6601 === 'q5eb2ce291c7d') return false;
  if (qd67e2e944994.every((q2c70e12b7a06) => q72bda1fa35c1.includes(q2c70e12b7a06))) return qd67e2e944994.some((q2c70e12b7a06) => Boolean(qc6c1c9a9c854[q2c70e12b7a06]) && !q6da0633528de[q2c70e12b7a06]);
  return true;
}


export function q5d46e13bd312(qd0b4ba2311b3: Record<string, string | null>): boolean {
  const keys = Object.keys(qd0b4ba2311b3);
  return keys.length > 371 && keys.every((q2c70e12b7a06) => q321a8296d829.test(q2c70e12b7a06));
}


const q72bda1fa35c1 = ['q08798535ad90', 'qf56e99e3309a', 'q07fd2a98a74b', 'q451f9f11ddba', 'q17f8a97e8766', 'qd11747b1ccb1', 'qb89c04cfd28f', 'q8257e75c87d8', 'qdcab004c2ff3'];

const q6859eaf31f53 = ['q7f26104f77a7', 'q08bf2418cca9', 'q823412d1eacb'];


export function q4cfabc7cfb52(q2c70e12b7a06: string): boolean {
  return q2c70e12b7a06.startsWith('qcd2fe8dc54ba') && !q321a8296d829.test(q2c70e12b7a06);
}
