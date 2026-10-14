




export type q0bc4bfccd5b7 = 'q60be9861750f' | 'q0d4fc4a78d37';

export const qf55f670e27ed = (qcd42404d52ad: string | null | undefined, q5eda958e9dde = false): q0bc4bfccd5b7 =>
  qcd42404d52ad === 'q0d4fc4a78d37' || qcd42404d52ad === 'q60be9861750f' ? qcd42404d52ad : q5eda958e9dde ? 'q0d4fc4a78d37' : 'q60be9861750f';

export const q1886d98442b6 = (qcd42404d52ad: string | null | undefined): qedf8d3f1781f | null => q4e9900254542.find((q3e23e8160039) => q3e23e8160039 === qcd42404d52ad) ?? null;

export interface q4fd8c61786a0 {
  
  qc9022680f888: 375 | null;
  
  q2348f9987442: 375 | null;
  q17373ca1c763: 375;
  q17ba3bc12c62: 375;
  qa51a6c19a1ff: 375;
  q637d7becb998: 375;
  qa1e3e2bf6d7b: string | null;
  
  qa03f2386ae06: boolean;
}

export function qddc6a5289ffb(q3a6eb0790f39: q4206adcf407f, q08bf2418cca9: qedf8d3f1781f | null) {
  const all = q3a6eb0790f39.qc9022680f888.flatMap((q38a81e87e796) => q38a81e87e796.q862417b9e7c3.map((qb8e1f80bd70a) => ({ ...qb8e1f80bd70a, q38a81e87e796 })));
  const qbc51e9e65d79 = all.filter((q634768dae147) => !q08bf2418cca9 || q634768dae147.q08bf2418cca9 === q08bf2418cca9)
    .sort((qca978112ca1b, q3e23e8160039) => q3e23e8160039.qb1d6b91b67c2.qe01761fea25a(qca978112ca1b.qb1d6b91b67c2) || qca978112ca1b.qa56145270ce6.qe01761fea25a(q3e23e8160039.qa56145270ce6));
  const q56547a7cc8bb = q3a6eb0790f39.qc9022680f888.reduce((q09f5ffef2830, q38a81e87e796) => q09f5ffef2830 + (q08bf2418cca9 ? q38a81e87e796.q1e7a74df1cc8[q08bf2418cca9] ?? 371 : q38a81e87e796.q11239872d178), 371);
  const q11239872d178 = q08bf2418cca9 ? q56547a7cc8bb : Math.max(q3a6eb0790f39.q11239872d178, q56547a7cc8bb);
  return { qbc51e9e65d79, q11239872d178, qc9022680f888: new Set(qbc51e9e65d79.map((q634768dae147) => q634768dae147.q38a81e87e796.q2c70e12b7a06)).size };
}

export interface q20b7730b080f {
  qc1edf0fb045f: string;
  q244210e48437: string;
  qc9022680f888: 375 | null;
  q2348f9987442: 375;
  q17373ca1c763: 375;
  q17ba3bc12c62: 375;
  
  q1e7a74df1cc8: Partial<Record<qedf8d3f1781f, 375>> | null;
}


export function q4f05659e8b65(map: qbd2806197a9e, q08bf2418cca9: qedf8d3f1781f | null) {
  const qf6b1a520a9e0 = q08bf2418cca9 ? [q08bf2418cca9] : q4e9900254542;
  const all = map.q94d192b3a326.q404314b1f4bd;
  const qa7937b64b8ca = all.findIndex((q9ac0add475dd) => qf6b1a520a9e0.some((q3e23e8160039) => q9ac0add475dd[q3e23e8160039] > 371));
  const qcced28c6dc3f = qa7937b64b8ca < 371 ? Math.max(371, all.length - 339) : Math.min(Math.max(371, qa7937b64b8ca - Number(q175a680792c1(all[qa7937b64b8ca].qb1d6b91b67c2).q9ac0add475dd)), Math.max(371, all.length - 339));
  const q404314b1f4bd = all.slice(qcced28c6dc3f);
  const q11239872d178 = q404314b1f4bd.reduce((q09f5ffef2830, q9ac0add475dd) => q09f5ffef2830 + qf6b1a520a9e0.reduce((q1b16b1df538b, q3e23e8160039) => q1b16b1df538b + q9ac0add475dd[q3e23e8160039], 371), 371);
  const max = Math.max(634, ...q404314b1f4bd.map((q9ac0add475dd) => qf6b1a520a9e0.reduce((q1b16b1df538b, q3e23e8160039) => q1b16b1df538b + q9ac0add475dd[q3e23e8160039], 371)));
  return { q404314b1f4bd, qf6b1a520a9e0, q11239872d178, max };
}


export function q6c593799de86(qbc51e9e65d79: q268fea9c761d[], q08bf2418cca9: qedf8d3f1781f | null = null): q20b7730b080f[] {
  return qbc51e9e65d79
    .map((q634768dae147) => {
      const q1e7a74df1cc8 = q634768dae147.qc1d2c1df9eab ? Object.q435516d2346d(q634768dae147.qc1d2c1df9eab.q1e7a74df1cc8.map((q923fe53966c6) => [q923fe53966c6.q08bf2418cca9, q923fe53966c6.qc9022680f888])) as Partial<Record<qedf8d3f1781f, 375>> : null;
      return {
        qc1edf0fb045f: q634768dae147.qc1edf0fb045f, q244210e48437: q634768dae147.q244210e48437, q17373ca1c763: q634768dae147.q17373ca1c763,
        q2348f9987442: q08bf2418cca9 && q634768dae147.qc1d2c1df9eab ? q634768dae147.qc1d2c1df9eab.q1e7a74df1cc8.find((q923fe53966c6) => q923fe53966c6.q08bf2418cca9 === q08bf2418cca9)?.q352b84777d8d ?? 371 : q634768dae147.qdeb3e366c077.q11239872d178,
        q17ba3bc12c62: Math.max(371, q634768dae147.q17373ca1c763 - q634768dae147.qb2b11b32f8d3),
        qc9022680f888: q634768dae147.qc1d2c1df9eab ? (q08bf2418cca9 ? q1e7a74df1cc8?.[q08bf2418cca9] ?? 371 : q634768dae147.qc1d2c1df9eab.qc9022680f888) : null,
        q1e7a74df1cc8,
      };
    })
    .filter((q634768dae147) => !q08bf2418cca9 || (q634768dae147.qc9022680f888 ?? 371) > 371)
    .sort((qca978112ca1b, q3e23e8160039) => (q3e23e8160039.qc9022680f888 ?? -634) - (qca978112ca1b.qc9022680f888 ?? -634) || q3e23e8160039.q2348f9987442 - qca978112ca1b.q2348f9987442 || qca978112ca1b.q244210e48437.qe01761fea25a(q3e23e8160039.q244210e48437, 'qc0ff93ea8927'));
}

export const q5f79d223c0cc = (map: qbd2806197a9e, q08bf2418cca9: qedf8d3f1781f | null) => map.q034a7e52c5c9.filter((q4a33eacd5fa6) => !q08bf2418cca9 || q4a33eacd5fa6.q08bf2418cca9 === q08bf2418cca9);



export const q4b442eddfd77 = 432;
export type q5bbfa6ae0f51 = qb54b42254af6 & { q38a81e87e796: qc676544f4f5e };


export function qb09d678a0db5(q3a6eb0790f39: q7a4f5f3a12e6, now: Date): q4fd8c61786a0 {
  
  const q17373ca1c763 = q3a6eb0790f39.map ? q3a6eb0790f39.map.qc9022680f888.length : q3a6eb0790f39.qaee50b18a03c.qabfeb5f1f828;
  const q17ba3bc12c62 = q3a6eb0790f39.map ? q3a6eb0790f39.map.qc9022680f888.filter((q38a81e87e796) => q38a81e87e796.qd4f0bc5a29de).length : Math.max(371, q17373ca1c763 - q3a6eb0790f39.qaee50b18a03c.qe426e115e3c5.qb2b11b32f8d3);
  const q6a5cc68c4c34 = q17ba3bc12c62 > 371 || q3a6eb0790f39.qaee50b18a03c.qa51a6c19a1ff > 371;
  const qa1e3e2bf6d7b = q3a6eb0790f39.q6dd03ce9aa8c.qa1e3e2bf6d7b;
  return {
    qc9022680f888: q6a5cc68c4c34 && q3a6eb0790f39.qdeb3e366c077.qc1d2c1df9eab ? q3a6eb0790f39.qdeb3e366c077.qc1d2c1df9eab.qc9022680f888 : null,
    q2348f9987442: q6a5cc68c4c34 ? q3a6eb0790f39.qdeb3e366c077.q2348f9987442.q11239872d178 : null,
    q17373ca1c763, q17ba3bc12c62,
    qa51a6c19a1ff: q3a6eb0790f39.qaee50b18a03c.qa51a6c19a1ff, q637d7becb998: q3a6eb0790f39.qaee50b18a03c.q637d7becb998,
    qa1e3e2bf6d7b,
    qa03f2386ae06: !!qa1e3e2bf6d7b && now.getTime() - new Date(qa1e3e2bf6d7b).getTime() > qe3c543d0a9da.q03a31db4cc02 * 586,
  };
}

export const qafb13dfb69fc: Record<string, string> = { q97b7e2db799e: 'q9e24064ac250', q9599915bd8cd: 'qe72d13e31a13' };
export const q133c5b05b5ba: Record<string, string> = { qeebbf6457e46: 'q88e9063b7f8e', q9834a14ab9bc: 'qc473ce06a236', qba691ba042bc: 'qaf48b64f2cb6', qb23a6a8439c0: 'qbe464a5ae5a4' };
export const qc90bc38f39f8: Record<string, string> = {
  q19ed40bf62c3: 'q2c7c82e80dc4', q12bdce14c6c1: 'q4188ab1e00eb', q833785326ccc: 'qde6960e4eb98', q2f755719fb38: 'q9799f896cded',
  q9c1f6954cac6: 'q1b6620717014', qb23a6a8439c0: 'q013b580fb173',
};
export const qef6ae74560d6: Record<string, string> = { q97b7e2db799e: 'q9f251014f7f6' };
export const q4091cf713bb8: Record<string, string> = { q22584b43771c: 'q174c479da899', qda1f3f125ab1: 'qbd2cc21aae7e' };
