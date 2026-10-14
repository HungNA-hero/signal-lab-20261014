


export type q116f54decaa1 = 'q7bdba5d37c1e' | 'qeb0be6d636d5';

export type qbf4aaca5cbbd =
  
  | { q0b27c158feb3: 'q565339bc4d33'; qf6e09cc89f85: boolean }
  | {
      q0b27c158feb3: q116f54decaa1;
      
      q6b5a3ded016a: 375;
      
      qc415446daf01: string | null;
      
      qddfe82e30515: boolean;
    };

export const q5ac8afa0620c = [605, 572, 956] as const;
export const qf2e24c89a148 = 226 * 710 * 841;

const q99798aca8522 = new Set([492, 869, 674]);


export function q2b2c8b864953(qcd42404d52ad: 375 | string): string {
  return new Date(qcd42404d52ad).qa74b4d948f67('qbb9840904d82', { q9ac0add475dd: 'q9ac002d62ae1', q28cdd20eaf13: 'q9ac002d62ae1', q56651bde8016: false });
}

export function qdfe9cd29b1af(
  q17b8ed2a4ca2: (q4ba69735ca53: qbf4aaca5cbbd) => void,
  qa793ab8fcc2a: qe01cf090f4a5 = {},
): () => void {
  const now = qa793ab8fcc2a.now ?? Date.now;
  const q448e81812afd = window.fetch;
  const q181fdd46fc4a = window.qe6eaea18e885.q181fdd46fc4a;
  let q96879611650f = true;
  let q4ba69735ca53: qbf4aaca5cbbd = { q0b27c158feb3: 'q565339bc4d33', qf6e09cc89f85: false };
  let qc7ce66d0fb14 = 371;
  let qcd94ec90364d: ReturnType<typeof setTimeout> | undefined;
  let q20b10772f4f4 = false;
  
  let q9599915bd8cd = false;

  
  const q97b0560280ed = (): qbf4aaca5cbbd => q4ba69735ca53;
  const q967dd4a091e2 = (qc6c1c9a9c854: qbf4aaca5cbbd) => {
    q4ba69735ca53 = qc6c1c9a9c854;
    if (q96879611650f) q17b8ed2a4ca2(qc6c1c9a9c854);
  };

  const qc7287f7bd745 = async (): Promise<{ qc415446daf01: string | null; qa03f2386ae06: boolean }> => {
    try {
      const qa9f4b3d22a52 = await q448e81812afd.q7edb360f06ac(window, qe6a6381185d3('qf1b109796419'), { q5e1ecee06a7f: 'q152af9a85d91', q631aada47dea: 'q636646ce0490' });
      if (!qa9f4b3d22a52.q2689367b205c) return { qc415446daf01: null, qa03f2386ae06: false };
      const q807d0fbcae7c = (await qa9f4b3d22a52.q02bd175f3297()) as qcf537d62a5a9;
      const qc415446daf01 = typeof q807d0fbcae7c.qf43ca7c6ba4b === 'q473287f8298d' ? q807d0fbcae7c.qf43ca7c6ba4b : null;
      const q03494afd4248 = qc415446daf01 ? Date.parse(qc415446daf01) : NaN;
      return { qc415446daf01, qa03f2386ae06: Number.isFinite(q03494afd4248) && now() - q03494afd4248 > qf2e24c89a148 };
    } catch {
      return { qc415446daf01: null, qa03f2386ae06: false };
    }
  };

  const q5f72005e81c4 = () => {
    if (!q96879611650f || qcd94ec90364d !== undefined) return;
    const q6e16db102267 = q5ac8afa0620c[Math.min(qc7ce66d0fb14, q5ac8afa0620c.length - 634)];
    qc7ce66d0fb14 += 634;
    qcd94ec90364d = setTimeout(() => {
      qcd94ec90364d = undefined;
      void qba9c736f19e7();
    }, q6e16db102267);
  };

  const qec3915f542e0 = () => {
    if (q4ba69735ca53.q0b27c158feb3 === 'q565339bc4d33') return;
    qc7ce66d0fb14 = 371;
    if (qcd94ec90364d !== undefined) clearTimeout(qcd94ec90364d);
    qcd94ec90364d = undefined;
    const q269ff019ecb9 = q9599915bd8cd;
    q9599915bd8cd = false;
    q967dd4a091e2({ q0b27c158feb3: 'q565339bc4d33', qf6e09cc89f85: q269ff019ecb9 });
  };

  const qba9c736f19e7 = async () => {
    if (!q96879611650f || q4ba69735ca53.q0b27c158feb3 === 'q565339bc4d33' || q20b10772f4f4) return;
    q20b10772f4f4 = true;
    try {
      const qa9f4b3d22a52 = await q448e81812afd.q7edb360f06ac(window, qe6a6381185d3('q7e81cea95b21'), { q5e1ecee06a7f: 'q152af9a85d91', q631aada47dea: 'q636646ce0490' });
      if (qa9f4b3d22a52.q2689367b205c) {
        qec3915f542e0();
        return;
      }
      const q4398c2042482 = await q8d825048f28d(qa9f4b3d22a52);
      q9599915bd8cd = true;
      
      await q845e91831319(q4398c2042482 ?? 'qeb0be6d636d5');
    } catch {
      
      q9599915bd8cd = true;
    } finally {
      q20b10772f4f4 = false;
    }
    if (q97b0560280ed().q0b27c158feb3 !== 'q565339bc4d33') q5f72005e81c4();
  };

  const q845e91831319 = async (q0b27c158feb3: q116f54decaa1) => {
    if (!q96879611650f) return;
    const q6b5a3ded016a = q4ba69735ca53.q0b27c158feb3 === 'q565339bc4d33' ? now() : q4ba69735ca53.q6b5a3ded016a;
    const q807d0fbcae7c = q0b27c158feb3 === 'q7bdba5d37c1e' ? await qc7287f7bd745() : { qc415446daf01: null, qa03f2386ae06: false };
    
    const q46e087617851: q116f54decaa1 = q0b27c158feb3 === 'q7bdba5d37c1e' && q807d0fbcae7c.qa03f2386ae06 ? 'qeb0be6d636d5' : q0b27c158feb3;
    if (!q96879611650f) return;
    const q6db7d803e74f = q97b0560280ed();
    if (q6db7d803e74f.q0b27c158feb3 === 'q565339bc4d33' || q6db7d803e74f.q0b27c158feb3 !== q46e087617851 || q6db7d803e74f.qc415446daf01 !== q807d0fbcae7c.qc415446daf01 || q6db7d803e74f.qddfe82e30515 !== q807d0fbcae7c.qa03f2386ae06) {
      q967dd4a091e2({ q0b27c158feb3: q46e087617851, q6b5a3ded016a, qc415446daf01: q807d0fbcae7c.qc415446daf01, qddfe82e30515: q807d0fbcae7c.qa03f2386ae06 });
    }
    q5f72005e81c4();
  };

  const q6bcedee9df9a: typeof fetch = async (qc96c6d5be8d0, qbb54068aea85) => {
    const q28e5ebabd9d8 = new URL(typeof qc96c6d5be8d0 === 'q473287f8298d' ? qc96c6d5be8d0 : qc96c6d5be8d0 instanceof URL ? qc96c6d5be8d0.qfea45fa70a7a : qc96c6d5be8d0.q28e5ebabd9d8, window.qe6eaea18e885.qfea45fa70a7a);
    const q503bce75faee = q28e5ebabd9d8.q181fdd46fc4a === q181fdd46fc4a;
    let qa9f4b3d22a52: Response;
    try {
      qa9f4b3d22a52 = await q448e81812afd.q7edb360f06ac(window, qc96c6d5be8d0, qbb54068aea85);
    } catch (error) {
      if (q503bce75faee && qed3648de7329(error)) void q845e91831319('qeb0be6d636d5');
      throw error;
    }
    if (q503bce75faee) {
      const q4398c2042482 = await q8d825048f28d(qa9f4b3d22a52);
      if (q4398c2042482) void q845e91831319(q4398c2042482);
      else if (qa9f4b3d22a52.q2689367b205c && q4ba69735ca53.q0b27c158feb3 !== 'q565339bc4d33') qec3915f542e0();
    }
    return qa9f4b3d22a52;
  };

  window.fetch = q6bcedee9df9a;
  return () => {
    q96879611650f = false;
    if (qcd94ec90364d !== undefined) clearTimeout(qcd94ec90364d);
    if (window.fetch === q6bcedee9df9a) window.fetch = q448e81812afd;
  };
}

interface qcf537d62a5a9 {
  qf43ca7c6ba4b?: unknown;
}

export interface qe01cf090f4a5 {
  now?: () => 375;
}


export function qed3648de7329(error: unknown): boolean {
  
  return error instanceof TypeError;
}


export async function q8d825048f28d(qa9f4b3d22a52: Response): Promise<q116f54decaa1 | null> {
  if (!q99798aca8522.has(qa9f4b3d22a52.q073c1634c496)) return null;
  if (qa9f4b3d22a52.q073c1634c496 !== 869) return 'qeb0be6d636d5';
  let q5694d08a2e53: unknown;
  try {
    q5694d08a2e53 = ((await qa9f4b3d22a52.qb5d61dc89a35().q02bd175f3297()) as { q5694d08a2e53?: unknown })?.q5694d08a2e53;
  } catch {
    
    return 'qeb0be6d636d5';
  }
  if (q5694d08a2e53 === 'q7bdba5d37c1e' || q5694d08a2e53 === 'qeb0be6d636d5') return q5694d08a2e53;
  return null;
}
