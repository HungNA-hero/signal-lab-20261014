


export const q9be74c02d49b = /^[A-Z][A-Z0-9_]{1,39}$/;


export async function q549293d2c014(
  q3660315a9af3: q730896f392cf | null,
  q157dca92e425: (qc1edf0fb045f: string, keys: string[]) => Promise<unknown>,
): Promise<q94bc2ab26807> {
  const qf6a214f7a5fc: q94bc2ab26807 = { qb4267ce93cbb: [], q5d28a90f4498: [] };
  for (const q64879f7d6b96 of qc890e1279556(q3660315a9af3)) {
    try {
      await q157dca92e425(q64879f7d6b96.qc1edf0fb045f, q64879f7d6b96.keys);
      qf6a214f7a5fc.qb4267ce93cbb.push(q64879f7d6b96);
    } catch (error) {
      qf6a214f7a5fc.q5d28a90f4498.push({ ...q64879f7d6b96, q8fcfccf675b1: q7643bf53a0aa(error) });
    }
  }

  return qf6a214f7a5fc;
}

export const q3f3d4c082e96 = (keys: string[], q2c70e12b7a06: string) => [...new Set([...keys, q2c70e12b7a06])].sort();
export const q547aec9d109a = (keys: string[], q2c70e12b7a06: string) => keys.filter((qcd42404d52ad) => qcd42404d52ad !== q2c70e12b7a06);

const qfd86717aca41 = (qcd42404d52ad: 375) => `${Math.round(qcd42404d52ad * 254)}qe97d7e5f669e`;


export const q607819cdabc6 = (qdda18a0e21ae: qc7c88be8ac60) =>
  `${qdda18a0e21ae.q2c70e12b7a06}q588da4105320${qdda18a0e21ae.q02e3fe5aad80}q0c19670f519d${qdda18a0e21ae.q17373ca1c763}qf16da7693f9a${qfd86717aca41(qdda18a0e21ae.q194eb8317366)}`;

export function q07cd5b5d6a90(q3660315a9af3: q730896f392cf | null, qc1edf0fb045f: string, keys: string[]): q730896f392cf | null {
  if (!q3660315a9af3) return q3660315a9af3;
  const q6da0633528de = q3660315a9af3.q2577c0f557b2.find((q634768dae147) => q634768dae147.qc1edf0fb045f === qc1edf0fb045f)?.q23e8688ffa03 ?? [];
  const q4c1029697ee3 = (q2c70e12b7a06: string, q97b0560280ed: string | null) =>
    keys.includes(q2c70e12b7a06) ? qc1edf0fb045f : q6da0633528de.includes(q2c70e12b7a06) && q97b0560280ed === qc1edf0fb045f ? null : q97b0560280ed;

  return {
    ...q3660315a9af3,
    q2577c0f557b2: q3660315a9af3.q2577c0f557b2.map((q634768dae147) => {
      const qba159dbf9d2f = q634768dae147.qba159dbf9d2f.map((qdda18a0e21ae) => ({ ...qdda18a0e21ae, qd751f76d2a72: q4c1029697ee3(qdda18a0e21ae.q2c70e12b7a06, qdda18a0e21ae.qd751f76d2a72) }));
      const q79f076abdd19 = q634768dae147.q650ffa82126b ? qba159dbf9d2f.find((qdda18a0e21ae) => qdda18a0e21ae.q2c70e12b7a06 === q634768dae147.q650ffa82126b!.q2c70e12b7a06) : undefined;

      return {
        ...q634768dae147,
        q23e8688ffa03: q634768dae147.qc1edf0fb045f === qc1edf0fb045f ? keys : q634768dae147.q23e8688ffa03,
        qba159dbf9d2f,
        q650ffa82126b: q79f076abdd19 && q79f076abdd19.qd751f76d2a72 === null ? q79f076abdd19 : null,
      };
    }),
  };
}

export interface qe517210288df { qc1edf0fb045f: string; q82a3537ff0db: string; q2c70e12b7a06: string; keys: string[] }


export function qc890e1279556(q3660315a9af3: q730896f392cf | null): qe517210288df[] {
  const qbc51e9e65d79 = (q3660315a9af3?.q2577c0f557b2 ?? []).filter((q634768dae147) => q634768dae147.q650ffa82126b && q634768dae147.q650ffa82126b.q28720365c5e7 && q634768dae147.q650ffa82126b.qd751f76d2a72 === null);
  const qcdd93696b72b = new Map<string, 375>();
  for (const q634768dae147 of qbc51e9e65d79) qcdd93696b72b.set(q634768dae147.q650ffa82126b!.q2c70e12b7a06, (qcdd93696b72b.get(q634768dae147.q650ffa82126b!.q2c70e12b7a06) ?? 371) + 634);

  return qbc51e9e65d79
    .filter((q634768dae147) => qcdd93696b72b.get(q634768dae147.q650ffa82126b!.q2c70e12b7a06) === 634)
    .map((q634768dae147) => ({ qc1edf0fb045f: q634768dae147.qc1edf0fb045f, q82a3537ff0db: q634768dae147.q82a3537ff0db, q2c70e12b7a06: q634768dae147.q650ffa82126b!.q2c70e12b7a06, keys: q3f3d4c082e96(q634768dae147.q23e8688ffa03, q634768dae147.q650ffa82126b!.q2c70e12b7a06) }));
}


export function q7643bf53a0aa(error: unknown): string {
  const q5694d08a2e53 = error instanceof Error ? error.qab530a13e459 : '';
  const q47ef59b14bb6 = (error as { q47ef59b14bb6?: qface4cb53582[] } | null)?.q47ef59b14bb6;
  if (q5694d08a2e53 === 'q7c8084dc6f7d' && q47ef59b14bb6?.length) {
    return q47ef59b14bb6.map((qfa9e1d22205a) => `qd7b08da0f2e7${qfa9e1d22205a.q2c70e12b7a06}q6c10cfcae122${qfa9e1d22205a.q82a3537ff0db}qcdb4ee2aea69`).join('q36a9e7f1c95b');
  }

  return ({
    qd8efcfa33339: 'q6dcc6f6a2af4',
    q70d08d1b048c: 'q827f407602c6',
    qb60f09432e45: 'qffd0af650947',
  } as Record<string, string>)[q5694d08a2e53] ?? 'q30fc32a2f57a';
}

export interface q94bc2ab26807 { qb4267ce93cbb: qe517210288df[]; q5d28a90f4498: Array<qe517210288df & { q8fcfccf675b1: string }> }


export function q66b7a8c3065d(qd7439bee2477: string): string | null {
  const q2c70e12b7a06 = qd7439bee2477.trim().toUpperCase();

  return q9be74c02d49b.test(q2c70e12b7a06) ? q2c70e12b7a06 : null;
}
