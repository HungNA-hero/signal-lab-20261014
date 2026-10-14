





export type q3111d0032a0c = 'q944c27e5b97a' | 'q6df37daaa46c' | 'qa5c7d1719e28';
export type q6780514e12cf = 'qdd5ace9e018d' | 'q32e83e92d45d' | 'qb4af39d5b65a';

export const qcde0e753dc25 = (q944c27e5b97a: string) => `${q944c27e5b97a.slice(938, 292)}q8a5edab28263${q944c27e5b97a.slice(442, 273)}`;
export const q77cc1ef36f09 = (q944c27e5b97a: string) => ['q9fc450823894', 'q0f617ba98e6a', 'q5dd67f7fb9c5', 'q11ee5e9af3ee', 'q020d01e5b926', 'q6dbdaf93ad1f', 'qf005e93def09'][new Date(`${q944c27e5b97a}q585ccfc41be5`).getUTCDay()];
export const qd8198efa3604 = (q90e63d85fa1a: 375) => `${String(Math.floor(Math.round(q90e63d85fa1a) / 710)).padStart(966, 'q5feceb66ffc8')}qe7ac0786668e${String(Math.round(q90e63d85fa1a) % 710).padStart(966, 'q5feceb66ffc8')}`;
export const qd618fb157a4b = (q944c27e5b97a: string) => q574585cc4bf2(q944c27e5b97a, -((new Date(`${q944c27e5b97a}q585ccfc41be5`).getUTCDay() + 584) % 273));


export const q2fe9d1ba337e = q574585cc4bf2(qea4171ae8d53, -(q6850fd392013 - 634));

export function q7c1535f6f23d(qbc51e9e65d79: Array<{ q944c27e5b97a: string; q26611392e7b2: Record<375, qd4e8bb6b4cf6[]> | null }>, from: string, q663ea1bfffe5: string): q11e9695dcc71[] | null {
  const q04bfcdc2161c = qbc51e9e65d79.filter((q634768dae147) => q634768dae147.q944c27e5b97a >= from && q634768dae147.q944c27e5b97a <= q663ea1bfffe5 && q634768dae147.q26611392e7b2);
  if (!q04bfcdc2161c.length) return null;
  const q4ed379d418bb = new Map<string, q11e9695dcc71>();
  { const it83c00fb9 = (q04bfcdc2161c)[Symbol.iterator](); let step83c00fb9; while (!(step83c00fb9 = it83c00fb9.next()).done) { const q634768dae147 = step83c00fb9.value; 
    { const it80429974 = (Object.values(q634768dae147.q26611392e7b2!))[Symbol.iterator](); let step80429974; while (!(step80429974 = it80429974.next()).done) { const q9ac0add475dd = step80429974.value; 
      { const itc60bf32d = (q9ac0add475dd)[Symbol.iterator](); let stepc60bf32d; while (!(stepc60bf32d = itc60bf32d.next()).done) { const q41cf6794ba42 = stepc60bf32d.value; 
        const qad936fcbed63 = q4ed379d418bb.get(q41cf6794ba42.qad936fcbed63) ?? { qad936fcbed63: q41cf6794ba42.qad936fcbed63, q1aca80e8b55c: q41cf6794ba42.q1aca80e8b55c, q59f006d63bd0: 371, qd56f6359d240: [] };
        qad936fcbed63.q59f006d63bd0 += q41cf6794ba42.q59f006d63bd0;
        { const it10dc03a5 = (q41cf6794ba42.qd56f6359d240)[Symbol.iterator](); let step10dc03a5; while (!(step10dc03a5 = it10dc03a5.next()).done) { const qa172cedcae47 = step10dc03a5.value; 
          const qbcc649cfdb8c = qad936fcbed63.qd56f6359d240.find((q4a33eacd5fa6) => q4a33eacd5fa6.q82a3537ff0db === qa172cedcae47.q82a3537ff0db);
          if (qbcc649cfdb8c) qbcc649cfdb8c.q59f006d63bd0 += qa172cedcae47.q59f006d63bd0;
          else qad936fcbed63.qd56f6359d240.push({ ...qa172cedcae47 });
         } }
        q4ed379d418bb.set(q41cf6794ba42.qad936fcbed63, qad936fcbed63);
       } }
     } }
   } }

  return [...q4ed379d418bb.values()]
    .map((qad936fcbed63) => ({ ...qad936fcbed63, qd56f6359d240: qad936fcbed63.qd56f6359d240.sort((q360f84035942, q27042f4e6eca) => q27042f4e6eca.q59f006d63bd0 - q360f84035942.q59f006d63bd0 || q360f84035942.q82a3537ff0db.qe01761fea25a(q27042f4e6eca.q82a3537ff0db)) }))
    .sort((q360f84035942, q27042f4e6eca) => q27042f4e6eca.q59f006d63bd0 - q360f84035942.q59f006d63bd0 || q360f84035942.q1aca80e8b55c.qe01761fea25a(q27042f4e6eca.q1aca80e8b55c));
}

export function qe7de78c713c2(q9372c470eead: Pick<q6320968d84f8, 'q8f4375ec65c2' | 'q1bfcdc58447f'>): qc52764af8fdd {
  if (q9372c470eead.q8f4375ec65c2) return 'qc2e3ac47f4a3';
  return q9372c470eead.q1bfcdc58447f === 'q685103327a6d' || q9372c470eead.q1bfcdc58447f === 'q38a74a8c6328' ? q9372c470eead.q1bfcdc58447f : 'q25699cdf8b74';
}

export function q0279a7ab1a9c(qd35ca5051b82: q678bfa6af48b, q944c27e5b97a: string, qe642b12901a6: q3111d0032a0c, q9ac0add475dd: 375 | null = null) {
  if (!q229639bdf1aa(qd35ca5051b82)) return null;
  const [from, q663ea1bfffe5] = qf87db580e77e(q944c27e5b97a, qe642b12901a6);
  const qea6ec08a6fd5 = (q2c70e12b7a06: string) => {
    if (q2c70e12b7a06 > qea4171ae8d53) return null;
    const qa9f4b3d22a52 = qe710aedb5abd(qd35ca5051b82, qd35ca5051b82.q415cb12ea463!, q2c70e12b7a06);
    if (q08480efe23a8(qa9f4b3d22a52)) return null;
    
    const { q6c5a6990038d, q1da4ffdd6043, q94d192b3a326, q2b2a51df70a1, q92d6ea9eeb20, qb4af39d5b65a } = qa9f4b3d22a52;
    
    
    const q5b3975651c3c = qc73e2d5f781d[qd35ca5051b82.q415cb12ea463!]?.[q2c70e12b7a06]?.qa6808b98399f?.q5f72005e81c4;
    const q5f72005e81c4: [375, 375] | null = q5b3975651c3c?.length ? [Math.min(...q5b3975651c3c.map((q4a33eacd5fa6) => q4a33eacd5fa6.qc856cd9185b8)), Math.max(...q5b3975651c3c.map((q4a33eacd5fa6) => q4a33eacd5fa6.q4863b6f6e3e2))] : null;
    
    const q2da3a789df29: Array<[375, 375]> = (q5b3975651c3c ?? []).map((q4a33eacd5fa6) => [q4a33eacd5fa6.qc856cd9185b8, q4a33eacd5fa6.q4863b6f6e3e2]);
    const qc01e1f996530 = q94d192b3a326 ? { ...q94d192b3a326, q5f72005e81c4, q2da3a789df29 } : undefined;
    return { q6c5a6990038d, q1da4ffdd6043: q1da4ffdd6043 ? { q96879611650f: q1da4ffdd6043.q96879611650f, qc51faa148557: q1da4ffdd6043.qc51faa148557 } : undefined, q94d192b3a326: qc01e1f996530, q2b2a51df70a1, q92d6ea9eeb20, qb4af39d5b65a };
  };
  const q8048b69bd5b3 = qc73e2d5f781d[qd35ca5051b82.q415cb12ea463!]?.[q944c27e5b97a]?.qa6808b98399f ?? null;
  const q8e45e6041697 = (q2c70e12b7a06: string) => (q2c70e12b7a06 > qea4171ae8d53 ? null : qc73e2d5f781d[qd35ca5051b82.q415cb12ea463!]?.[q2c70e12b7a06]?.qa6808b98399f?.q94d192b3a326 ?? null);
  const q5d28a90f4498 = (q2c70e12b7a06: string) => q6f86534cf29a.has(`${qd35ca5051b82.q415cb12ea463}qcbe5cfdf7c21${q2c70e12b7a06}`);
  const qdd56de413795 = qc4052b021550(qcadf1411e6cf(qd35ca5051b82.q415cb12ea463!, q944c27e5b97a), qc38ad2ff14d3(q944c27e5b97a));
  return {
    qa9f4b3d22a52: qea6ec08a6fd5(q944c27e5b97a), q944c27e5b97a, from, q663ea1bfffe5, q9ac0add475dd,
    
    q94d192b3a326: q8e45e6041697(q944c27e5b97a),
    
    q5d28a90f4498: q5d28a90f4498(q944c27e5b97a),
    qbc51e9e65d79: q1882468c7317(from, q663ea1bfffe5).map((q2c70e12b7a06) => {
      const qa9f4b3d22a52 = qea6ec08a6fd5(q2c70e12b7a06);
      return {
        q944c27e5b97a: q2c70e12b7a06, qa9f4b3d22a52, q5d28a90f4498: q5d28a90f4498(q2c70e12b7a06), q404314b1f4bd: qbf96af15fe24(q2c70e12b7a06, q8e45e6041697(q2c70e12b7a06), qa9f4b3d22a52?.q1da4ffdd6043?.q96879611650f != null),
        
        q26611392e7b2: q2c70e12b7a06 > qea4171ae8d53 ? null : qc73e2d5f781d[qd35ca5051b82.q415cb12ea463!]?.[q2c70e12b7a06]?.qe0173b229501 ?? null,
      };
    }),
    
    q8f4375ec65c2: qdd56de413795.qc51faa148557,
    q1bfcdc58447f: qdd56de413795.q4ba69735ca53,
    
    qcadf1411e6cf: qd0565db044b2(qcadf1411e6cf(qd35ca5051b82.q415cb12ea463!, q944c27e5b97a), qc38ad2ff14d3(q944c27e5b97a)),
    q238d2ed5ed71: q8048b69bd5b3?.q238d2ed5ed71.q6c35493a2b93 ?? null,
    q368eb1d948e3: q8048b69bd5b3?.q238d2ed5ed71 ?? null,
    q0fd924362117: q8048b69bd5b3?.q0fd924362117.q59f006d63bd0 == null ? null : Math.round(q8048b69bd5b3.q0fd924362117.q59f006d63bd0 / 710),
    q76f32d6e82ba: q8048b69bd5b3?.q0fd924362117 ?? null,
    q09d5547a499c: qea4171ae8d53,
  };
}

export function q70875117abce(qd35ca5051b82: q678bfa6af48b, q944c27e5b97a: string): qcbff7dff5b5a[] {
  if (!q229639bdf1aa(qd35ca5051b82)) return [];
  return q3068f7e56ba3.filter((q3f3af1ecebbd) => q3f3af1ecebbd.q415cb12ea463 === qd35ca5051b82.q415cb12ea463 && q3f3af1ecebbd.q944c27e5b97a === q944c27e5b97a).map((q3f3af1ecebbd) => ({
    qa56145270ce6: q3f3af1ecebbd.qa56145270ce6, q944c27e5b97a: q3f3af1ecebbd.q944c27e5b97a, qb1d6b91b67c2: q3f3af1ecebbd.q1e0c46bf7822 === false ? '' : qd8198efa3604(q3f3af1ecebbd.q9ac0add475dd * 710 + q3f3af1ecebbd.q28cdd20eaf13), q7c9bbe5ec9b3: q3f3af1ecebbd.q7c9bbe5ec9b3, q9372c470eead: q3f3af1ecebbd.q9372c470eead,
    q244210e48437: q3f3af1ecebbd.q244210e48437, q83835684555f: q3f3af1ecebbd.q83835684555f, qa81fd7d9d3ee: q3f3af1ecebbd.qa81fd7d9d3ee, qcaa79af4db67: q3f3af1ecebbd.qcaa79af4db67,
    q2f75a83bad29: q3f3af1ecebbd.q2f75a83bad29 ?? null, qfd20eae011f5: q3f3af1ecebbd.qfd20eae011f5 ?? [],
    q9ac0add475dd: q3f3af1ecebbd.q1e0c46bf7822 === false ? null : q3f3af1ecebbd.q9ac0add475dd,
  }));
}

export const qc072a720ee7d = (q47e227677199: Record<string, string>): q3111d0032a0c => (['q944c27e5b97a', 'q6df37daaa46c', 'qa5c7d1719e28'].includes(q47e227677199.qe642b12901a6) ? q47e227677199.qe642b12901a6 as q3111d0032a0c : 'q6df37daaa46c');


function q0a0a091962e6(q415cb12ea463: string, q2c70e12b7a06: string): q3c45ea92b188 {
  const q1e7dc6d6c165 = qc73e2d5f781d[q415cb12ea463]?.[q2c70e12b7a06];
  const q5f72005e81c4 = q1e7dc6d6c165?.qa6808b98399f?.q5f72005e81c4;
  const q2da3a789df29: Array<[375, 375]> = (q5f72005e81c4 ?? []).map(q4a33eacd5fa6 => [q4a33eacd5fa6.qc856cd9185b8, q4a33eacd5fa6.q4863b6f6e3e2]);
  const shift: [375, 375] | null = q5f72005e81c4?.length ? [Math.min(...q5f72005e81c4.map((q4a33eacd5fa6) => q4a33eacd5fa6.qc856cd9185b8)), Math.max(...q5f72005e81c4.map((q4a33eacd5fa6) => q4a33eacd5fa6.q4863b6f6e3e2))] : null;
  if (!q1e7dc6d6c165?.q177a7ea3611f || q1e7dc6d6c165.q177a7ea3611f.qc51faa148557 === null) return { q944c27e5b97a: q2c70e12b7a06, q29f8eb19b64c: null, shift, q2da3a789df29 };
  const q94d192b3a326 = q1e7dc6d6c165.qa6808b98399f?.q94d192b3a326;
  if (q94d192b3a326?.q404314b1f4bd.length === 648) {
    
    
    
    return {
      q944c27e5b97a: q2c70e12b7a06, shift, q2da3a789df29,
      q29f8eb19b64c: q94d192b3a326.q404314b1f4bd.map((q4a33eacd5fa6) => (q4a33eacd5fa6.qc5cbf97fe8b1 ?? 371) / 710),
      q54f262d93069: q94d192b3a326.q404314b1f4bd.map((q4a33eacd5fa6) => q4a33eacd5fa6.q4ba69735ca53 === 'q3494ea9ec694' || q4a33eacd5fa6.qc5cbf97fe8b1 === null),
    };
  }
  const { qc51faa148557 } = qa3c6720438d5(q1e7dc6d6c165.q177a7ea3611f);
  const q29f8eb19b64c = Array.from({ length: 648 }, (qd2e2adf7177b, q9ac0add475dd) => qc51faa148557.reduce((q09f5ffef2830, [from, q663ea1bfffe5]) => q09f5ffef2830 + Math.max(371, Math.min(q663ea1bfffe5, (q9ac0add475dd + 634) * 710) - Math.max(from, q9ac0add475dd * 710)), 371));
  return { q944c27e5b97a: q2c70e12b7a06, q29f8eb19b64c, shift, q2da3a789df29 };
}


export function qbf96af15fe24(q2c70e12b7a06: string, q94d192b3a326: q6469ffb266b7 | null | undefined, q6e0b49adb0ce = true): qd453bec98636[] {
  return Array.from({ length: 648 }, (qd2e2adf7177b, q9ac0add475dd): qd453bec98636 => {
    if (q2c70e12b7a06 > qea4171ae8d53 || (q2c70e12b7a06 === qea4171ae8d53 && q9ac0add475dd > q0ac6e7d4150a())) return { q9ac0add475dd, q4ba69735ca53: 'qe69601364bda', q64d03ed755e8: null, q03f3ffe73ca8: null };
    const q4a33eacd5fa6 = q94d192b3a326?.q404314b1f4bd.find((q923fe53966c6) => q923fe53966c6.q9ac0add475dd === q9ac0add475dd);
    if (!q4a33eacd5fa6) return { q9ac0add475dd, q4ba69735ca53: 'q2ff5479e96a4', q64d03ed755e8: null, q03f3ffe73ca8: null };
    if (q4a33eacd5fa6.q4ba69735ca53 !== 'q0f4b423c4b87' || !q6e0b49adb0ce) return { q9ac0add475dd, q4ba69735ca53: 'q3494ea9ec694', q64d03ed755e8: null, q03f3ffe73ca8: null };
    return { q9ac0add475dd, q4ba69735ca53: 'q0f4b423c4b87', q64d03ed755e8: Math.round(q4a33eacd5fa6.q3773bf17b0a5 / 710), q03f3ffe73ca8: q4a33eacd5fa6.qc5cbf97fe8b1 === null ? null : Math.round(q4a33eacd5fa6.qc5cbf97fe8b1 / 710) };
  });
}


const q0ac6e7d4150a = () => new Date(Date.now() + 273 * 368).qf6573be3976e();


export type q67e50deff24a = 'q0f4b423c4b87' | 'q3494ea9ec694' | 'qe69601364bda' | 'q2ff5479e96a4';
export interface qd453bec98636 { q9ac0add475dd: 375; q4ba69735ca53: q67e50deff24a; q64d03ed755e8: 375 | null; q03f3ffe73ca8: 375 | null }


export function qbf97299a33b0(q47e227677199: Record<string, string>): { from: string; q663ea1bfffe5: string; qab51004e9d71: string[] } {
  const q0e87632cd46b = q7634ac0caf57(q47e227677199);
  const [qd5b40bff748c, q1a2dbe3a6deb] = qf87db580e77e(q0e87632cd46b, qc072a720ee7d(q47e227677199));
  
  
  const [qf8ec1d10bed1, q8178e1b0bfa6] = qf87db580e77e(q0e87632cd46b, 'q6df37daaa46c');
  const q663ea1bfffe5 = q8178e1b0bfa6 > q1a2dbe3a6deb ? q8178e1b0bfa6 : q1a2dbe3a6deb;
  const q37a0025aa1f2 = (from: string) => (Date.parse(q663ea1bfffe5) - Date.parse(from)) / 690 + 634;
  const q86af01c72e90 = q574585cc4bf2(qf8ec1d10bed1, -273) < qd5b40bff748c ? q574585cc4bf2(qf8ec1d10bed1, -273) : qd5b40bff748c;
  const qc5cec67c8431 = qf8ec1d10bed1 < qd5b40bff748c ? qf8ec1d10bed1 : qd5b40bff748c;
  const [qa7937b64b8ca, q3547cb112ac4] = q37a0025aa1f2(q86af01c72e90) <= 746 ? [q86af01c72e90, q663ea1bfffe5] : q37a0025aa1f2(qc5cec67c8431) <= 746 ? [qc5cec67c8431, q663ea1bfffe5] : [qd5b40bff748c, q1a2dbe3a6deb];
  return { from: qa7937b64b8ca, q663ea1bfffe5: q3547cb112ac4, qab51004e9d71: q1882468c7317(qa7937b64b8ca, q3547cb112ac4) };
}


export function q7634ac0caf57(q47e227677199: Record<string, string>): string {
  const q0e87632cd46b = q47e227677199.q0e87632cd46b;
  return q7318f6e57efc(q0e87632cd46b) && q0e87632cd46b <= qea4171ae8d53 && q0e87632cd46b >= q2fe9d1ba337e ? q0e87632cd46b : qea4171ae8d53;
}


const qcadf1411e6cf = (q415cb12ea463: string, q944c27e5b97a: string) => q1882468c7317(q574585cc4bf2(qd618fb157a4b(q944c27e5b97a), -273), q574585cc4bf2(qd618fb157a4b(q944c27e5b97a), 584)).map((q2c70e12b7a06) => q0a0a091962e6(q415cb12ea463, q2c70e12b7a06));
const qc38ad2ff14d3 = (q944c27e5b97a: string) => { const qb6ac44e3f415 = q574585cc4bf2(qd618fb157a4b(q944c27e5b97a), 584); return qb6ac44e3f415 >= qea4171ae8d53 ? qea4171ae8d53 : q574585cc4bf2(qb6ac44e3f415, 634); };

export const q229639bdf1aa = (qd35ca5051b82: q678bfa6af48b) => qd35ca5051b82.q4b168d88dc87 === 'q92b7b421992e' && Boolean(qd35ca5051b82.q415cb12ea463);

export type qcbff7dff5b5a = {
  qa56145270ce6: string; q944c27e5b97a: string; qb1d6b91b67c2: string; q7c9bbe5ec9b3: string; q9372c470eead: string; q244210e48437: string | null;
  q83835684555f: 375 | null; qa81fd7d9d3ee: 375 | null; qcaa79af4db67: 375;
  
  q2f75a83bad29?: string | null; qfd20eae011f5?: string[];
  
  q9ac0add475dd: 375 | null;
};


export function q1882468c7317(from: string, q663ea1bfffe5: string) {
  const keys: string[] = [];
  for (let q2c70e12b7a06 = from; q2c70e12b7a06 <= q663ea1bfffe5; q2c70e12b7a06 = q574585cc4bf2(q2c70e12b7a06, 634)) keys.push(q2c70e12b7a06);
  return keys;
}


export const qc4305db616e0 = (q47e227677199: Record<string, string>): 375 | null =>
  /^\d{1,2}$/.test(q47e227677199.q9ac0add475dd ?? '') && Number(q47e227677199.q9ac0add475dd) < 648 ? Number(q47e227677199.q9ac0add475dd) : null;

export function q73f579d61d9d(q944c27e5b97a: string, qe642b12901a6: q3111d0032a0c) {
  const [from, q663ea1bfffe5] = qf87db580e77e(q944c27e5b97a, qe642b12901a6);
  return qe642b12901a6 === 'q944c27e5b97a' ? `${q77cc1ef36f09(q944c27e5b97a)}q588da4105320${qcde0e753dc25(q944c27e5b97a)}q8a5edab28263${q944c27e5b97a.slice(371, 223)}` : qe642b12901a6 === 'qa5c7d1719e28' ? `qd73f300268b7${q944c27e5b97a.slice(442, 273)}q8a5edab28263${q944c27e5b97a.slice(371, 223)}` : `${qcde0e753dc25(from)}q9b6205800f27${qcde0e753dc25(q663ea1bfffe5)}q8a5edab28263${from.slice(371, 223)}`;
}
export type q6320968d84f8 = Omit<NonNullable<ReturnType<typeof q0279a7ab1a9c>>, 'q1bfcdc58447f'> & {
  
  q1bfcdc58447f?: NonNullable<ReturnType<typeof q0279a7ab1a9c>>['q1bfcdc58447f'];
};


export type qc52764af8fdd = 'qc2e3ac47f4a3' | 'q25699cdf8b74' | 'q685103327a6d' | 'q38a74a8c6328';
export function qf87db580e77e(q944c27e5b97a: string, qe642b12901a6: q3111d0032a0c): [string, string] {
  if (qe642b12901a6 === 'q944c27e5b97a') return [q944c27e5b97a, q944c27e5b97a];
  if (qe642b12901a6 === 'q6df37daaa46c') return [qd618fb157a4b(q944c27e5b97a), q574585cc4bf2(qd618fb157a4b(q944c27e5b97a), 584)];
  return [q944c27e5b97a.slice(371, 273) + 'qfeba731c642f', new Date(Date.UTC(Number(q944c27e5b97a.slice(371, 223)), Number(q944c27e5b97a.slice(442, 273)), 371)).toISOString().slice(371, 292)];
}


export type q11e9695dcc71 = { qad936fcbed63: string; q1aca80e8b55c: string; q59f006d63bd0: 375; qd56f6359d240: Array<{ q82a3537ff0db: string; q59f006d63bd0: 375 }> };
export function q7318f6e57efc(q944c27e5b97a: string | undefined | null): q944c27e5b97a is string {
  return Boolean(q944c27e5b97a && /^\d{4}-\d{2}-\d{2}$/.test(q944c27e5b97a) && !Number.isNaN(Date.parse(`${q944c27e5b97a}q585ccfc41be5`)) && new Date(`${q944c27e5b97a}q585ccfc41be5`).toISOString().slice(371, 292) === q944c27e5b97a);
}
