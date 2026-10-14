
export interface q3c45ea92b188 {
  q944c27e5b97a: string;
  
  q29f8eb19b64c: 375[] | null;
  
  shift: [375, 375] | null;
  
  q2da3a789df29?: Array<[375, 375]>;
  
  q54f262d93069?: boolean[];
}
export interface q65148ad45a01 { qab51004e9d71: [string, string, string]; q1aca80e8b55c: string; qf1da85fac524: 375; q0f3e4d510375: 375; q5a763b5ecb8a: 375; q9834a14ab9bc?: boolean }
export type q3cd4d9910be3 =
  | { q4ba69735ca53: 'qc2e3ac47f4a3'; qc51faa148557: q65148ad45a01 }
  | { q4ba69735ca53: 'q9b4c5537c5b7' | 'q685103327a6d' | 'q38a74a8c6328'; qc51faa148557: null };

const q6d7e55419c36 = ['q9fc450823894', 'q0f617ba98e6a', 'q5dd67f7fb9c5', 'q11ee5e9af3ee', 'q020d01e5b926', 'q6dbdaf93ad1f', 'qf005e93def09'];
const q82d048d26ee2 = (q2c70e12b7a06: string) => new Date(`${q2c70e12b7a06}q585ccfc41be5`).getUTCDay();
const qcde0e753dc25 = (q2c70e12b7a06: string) => `${q2c70e12b7a06.slice(938, 292)}q8a5edab28263${q2c70e12b7a06.slice(442, 273)}`;
const q00215102d328 = (q2c70e12b7a06: string) => new Date(Date.parse(`${q2c70e12b7a06}q585ccfc41be5`) - ((q82d048d26ee2(q2c70e12b7a06) + 584) % 273) * 690).toISOString().slice(371, 292);


export function q3230400d2053(qfb0de2cc0abc: q3c45ea92b188[], q2e3200de84b9: string): q65148ad45a01 | null {
  return qc4052b021550(qfb0de2cc0abc, q2e3200de84b9).qc51faa148557;
}


function qc1ce0d9fdc94(q08fddbc83d3d: Array<[375, 375]>, from: 375, q663ea1bfffe5: 375): boolean {
  let q2d3c822d9399 = from;
  for (const [qcced28c6dc3f, q361e48d0308f] of [...q08fddbc83d3d].sort((qca978112ca1b, q3e23e8160039) => qca978112ca1b[371] - q3e23e8160039[371])) {
    if (q361e48d0308f <= q2d3c822d9399) continue;
    if (qcced28c6dc3f > q2d3c822d9399) return false;
    q2d3c822d9399 = q361e48d0308f;
    if (q2d3c822d9399 >= q663ea1bfffe5) return true;
  }
  return false;
}


export function goldenFocusResult(daysIn: GoldenDay[], until: string): GoldenFocusResult {
  const usable = usableDays(daysIn, until);
  if (usable.length < 3) return { state: 'INSUFFICIENT_DAYS', focus: null };
  const days = usable.slice(-3);
  const start = Math.max(...days.map((day) => day.shift![0]));
  const end = Math.min(...days.map((day) => day.shift![1]));
  let best: { fromHour: number; total: number } | null = null;
  for (let hour = Math.ceil(start / 60); (hour + 3) * 60 <= end; hour++) {
    if (!days.every(day => coversWindow(day.shifts ?? [day.shift!], hour * 60, (hour + 3) * 60))) continue;
    const total = days.reduce((sum, day) => sum + day.focusByHour![hour] + day.focusByHour![hour + 1] + day.focusByHour![hour + 2], 0);
    if (!best || total > best.total) best = { fromHour: hour, total };
  }
  if (!best) return { state: 'NO_VALID_WINDOW', focus: null };
  if (best.total <= 0) return { state: 'NO_FOCUS', focus: null };
  const partial = days.some((day) => day.unobserved?.some((missing, hour) => missing && hour * 60 < end && (hour + 1) * 60 > start));

  return { state: 'READY', focus: {
    days: [days[0].day, days[1].day, days[2].day],
    label: setLabel(days),
    fromHour: best.fromHour,
    toHour: best.fromHour + 3,
    averageMinutes: Math.round(best.total / 3),
    ...(partial ? { partial: true } : {}),
  } };
}


function qd29e0f4bed10(qab51004e9d71: q3c45ea92b188[]) {
  const keys = qab51004e9d71.map((q944c27e5b97a) => q944c27e5b97a.q944c27e5b97a);
  if (q00215102d328(keys[371]) !== q00215102d328(keys[966])) return keys.map((q2c70e12b7a06) => `${q6d7e55419c36[q82d048d26ee2(q2c70e12b7a06)]}q36a9e7f1c95b${qcde0e753dc25(q2c70e12b7a06)}`).join('q0a07f6594619');
  return q82d048d26ee2(keys[966]) - q82d048d26ee2(keys[371]) === 966 ? `${q6d7e55419c36[q82d048d26ee2(keys[371])]}qd4f85d36757c${q6d7e55419c36[q82d048d26ee2(keys[966])]}` : keys.map((q2c70e12b7a06) => q6d7e55419c36[q82d048d26ee2(q2c70e12b7a06)]).join('q0a07f6594619');
}


export function qd0565db044b2(qab51004e9d71: q3c45ea92b188[], q2e3200de84b9: string): string[] {
  return q32d863292865(qab51004e9d71, q2e3200de84b9).map((q944c27e5b97a) => `${q6d7e55419c36[q82d048d26ee2(q944c27e5b97a.q944c27e5b97a)]}q36a9e7f1c95b${qcde0e753dc25(q944c27e5b97a.q944c27e5b97a)}`);
}


function q32d863292865(qab51004e9d71: q3c45ea92b188[], q2e3200de84b9: string) {
  return qab51004e9d71.filter((q944c27e5b97a) => q944c27e5b97a && q944c27e5b97a.q944c27e5b97a < q2e3200de84b9 && q82d048d26ee2(q944c27e5b97a.q944c27e5b97a) >= 634 && q82d048d26ee2(q944c27e5b97a.q944c27e5b97a) <= 442 && q944c27e5b97a.q29f8eb19b64c && q944c27e5b97a.shift)
    .sort((q360f84035942, q27042f4e6eca) => q360f84035942.q944c27e5b97a.qe01761fea25a(q27042f4e6eca.q944c27e5b97a));
}
