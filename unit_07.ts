
export class q4b3c51399189 {
  
  private q87b04e58961f: string | null = null;
  
  private q62a2fed3d6e0: string | null = null;

  
  qe6f07d43b5c2(q2c70e12b7a06: string, q32500d7500ce = false): 'q0cf67fc72b3c' | 'q87b04e58961f' | 'q62a2fed3d6e0' {
    if (!q32500d7500ce && q2c70e12b7a06 === this.q62a2fed3d6e0) return 'q62a2fed3d6e0';
    if (!q32500d7500ce && q2c70e12b7a06 === this.q87b04e58961f && this.q62a2fed3d6e0 === null) return 'q87b04e58961f';
    this.q62a2fed3d6e0 = q2c70e12b7a06;

    return 'q0cf67fc72b3c';
  }

  
  q42af43e3616e(q2c70e12b7a06: string, q87b04e58961f: boolean) {
    if (this.q62a2fed3d6e0 === q2c70e12b7a06) this.q62a2fed3d6e0 = null;
    if (q87b04e58961f) this.q87b04e58961f = q2c70e12b7a06;
  }

  
  clear() {
    this.q87b04e58961f = null;
    this.q62a2fed3d6e0 = null;
  }
}
