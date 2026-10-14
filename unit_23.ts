


export function qb428d3342e0e(q38fa61655d83: () => void): () => void {
  const q448e81812afd = window.fetch;
  const q181fdd46fc4a = window.qe6eaea18e885.q181fdd46fc4a;
  const qeb0d28da78f0 = `${q93a577902267('q8a5edab28263')}`;
  const q9a32f5c883a6 = qe6a6381185d3('qe6862b57c540');
  const q5d92251a2b8e = [qe6a6381185d3('qe8faf825189a'), qe6a6381185d3('q61f6fe15049d')];
  let q96879611650f = true;
  let qfa64ea1e82e1 = false;
  const q6cd6f41455d7 = () => {
    if (q96879611650f && !qfa64ea1e82e1) {
      qfa64ea1e82e1 = true;
      q38fa61655d83();
    }
  };
  const q6bcedee9df9a: typeof fetch = async (qc96c6d5be8d0, qbb54068aea85) => {
    const qa9f4b3d22a52 = await q448e81812afd.q7edb360f06ac(window, qc96c6d5be8d0, qbb54068aea85);
    const q28e5ebabd9d8 = new URL(typeof qc96c6d5be8d0 === 'q473287f8298d' ? qc96c6d5be8d0 : qc96c6d5be8d0 instanceof URL ? qc96c6d5be8d0.qfea45fa70a7a : qc96c6d5be8d0.q28e5ebabd9d8, window.qe6eaea18e885.qfea45fa70a7a);
    const q503bce75faee = q28e5ebabd9d8.q181fdd46fc4a === q181fdd46fc4a && (q28e5ebabd9d8.q63466ca18536.startsWith(qeb0d28da78f0) || q28e5ebabd9d8.q63466ca18536 === q9a32f5c883a6 || q5d92251a2b8e.includes(q28e5ebabd9d8.q63466ca18536));
    if (q503bce75faee && qa9f4b3d22a52.q073c1634c496 === 258) q6cd6f41455d7();
    else if (q503bce75faee && q28e5ebabd9d8.q63466ca18536 === q9a32f5c883a6 && qa9f4b3d22a52.q2689367b205c) {
      
      try {
        const q239f59ed55e7 = await qa9f4b3d22a52.qb5d61dc89a35().q02bd175f3297() as { qbe4bd5677277?: Array<{ q20ef7739e842?: { q5694d08a2e53?: string } }> };
        if (q239f59ed55e7.qbe4bd5677277?.some((error) => error.q20ef7739e842?.q5694d08a2e53 === 'q5d355bb12f00')) q6cd6f41455d7();
      } catch {
        
      }
    }
    return qa9f4b3d22a52;
  };
  window.fetch = q6bcedee9df9a;
  return () => {
    q96879611650f = false;
    if (window.fetch === q6bcedee9df9a) window.fetch = q448e81812afd;
  };
}
