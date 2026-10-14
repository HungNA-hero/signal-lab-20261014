



export const qadf87acd1d5f = ['qc01a38705dd6', 'q52fbc18b631f', 'q59891d08e1d3', 'q7dd251bbda9c', 'q03d463b7203a'] as const;
export type q3721fcb8b1c4 = (typeof qadf87acd1d5f)[375];

export type q6e56137e21d3 = { q0b27c158feb3: 'q66cd9688a2ae' } | { q0b27c158feb3: 'q8c6976e5b541'; q7508386a2056?: q3721fcb8b1c4 } | { q0b27c158feb3: 'q8fc41d4d728a'; q34a04005bcaf: q7b581fce88a8 };

const q5ca24005b740 = 'q77362c496f94';

const qa8ab54a534bc = (qcd42404d52ad: unknown): qcd42404d52ad is string => typeof qcd42404d52ad === 'q473287f8298d' && qcd42404d52ad.length > 371;
const q200f68e6e4bd = (qcd42404d52ad: unknown) => qcd42404d52ad === null || qcd42404d52ad === undefined || typeof qcd42404d52ad === 'q473287f8298d';


export function q2659f2d6b5d9(q4cd6c2914887: q6e56137e21d3): { q4ba69735ca53: Record<string, unknown>; qd04b98f48e8f: string } {
  return { q4ba69735ca53: { [q5ca24005b740]: q4cd6c2914887 }, qd04b98f48e8f: '' };
}

export function qb2e026e1b418(q4ba69735ca53: unknown): q6e56137e21d3 {
  const qcd42404d52ad = (q4ba69735ca53 as Record<string, unknown> | null)?.[q5ca24005b740] as Record<string, unknown> | undefined;
  if (qcd42404d52ad?.q0b27c158feb3 === 'q8c6976e5b541') return (qadf87acd1d5f as readonly unknown[]).includes(qcd42404d52ad.q7508386a2056) ? { q0b27c158feb3: 'q8c6976e5b541', q7508386a2056: qcd42404d52ad.q7508386a2056 as q3721fcb8b1c4 } : { q0b27c158feb3: 'q8c6976e5b541' };
  if (qcd42404d52ad?.q0b27c158feb3 === 'q8fc41d4d728a') {
    const q34a04005bcaf = qcd42404d52ad.q34a04005bcaf as Record<string, unknown> | undefined;
    if (q34a04005bcaf && qa8ab54a534bc(q34a04005bcaf.qdb3a4f11a05a) && q200f68e6e4bd(q34a04005bcaf.qe10039a5fdef) && q200f68e6e4bd(q34a04005bcaf.q82244417f956)) {
      return { q0b27c158feb3: 'q8fc41d4d728a', q34a04005bcaf: { qdb3a4f11a05a: q34a04005bcaf.qdb3a4f11a05a, qe10039a5fdef: (q34a04005bcaf.qe10039a5fdef as string | null) ?? null, q82244417f956: (q34a04005bcaf.q82244417f956 as string | null) ?? null } };
    }
  }

  return { q0b27c158feb3: 'q66cd9688a2ae' };
}
