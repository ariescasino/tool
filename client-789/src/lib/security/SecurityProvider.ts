
export class SecurityProvider {
  private static instance: SecurityProvider;
  private matrix: Record<string, any>;
  private salt: string;

  private constructor() {
    this.matrix = {
      alpha: [
        { x: 2, y: 'UE9s' },
        { x: 5, y: 'aWRq' },
        { x: 8, y: 'MXNz' }
      ],
      beta: [
        [80, 79, 108],
        [105, 100, 106],
        [49, 115, 115]
      ],
      gamma: {
        seq: ['P', 'O', 'l', 'i', 'd', 'j', '1', 's', 's']
      }
    };
    this.salt = new Date().getTime().toString(36);
  }

  public static getInstance(): SecurityProvider {
    if (!SecurityProvider.instance) {
      SecurityProvider.instance = new SecurityProvider();
    }
    return SecurityProvider.instance;
  }

  private decode(input: string): string {
    try {
      return atob(input);
    } catch {
      return input;
    }
  }

  private rotateMatrix(): void {
    this.matrix.alpha = [...this.matrix.alpha].sort(() => Math.random() - 0.5);
    this.matrix.beta = [...this.matrix.beta].sort(() => Math.random() - 0.5);
    this.matrix.gamma.seq = [...this.matrix.gamma.seq].sort(() => Math.random() - 0.5);
  }

  public getSecurityKey(): string {
    this.rotateMatrix();
    const method = Math.floor(Math.random() * 3);
    let result = '';

    switch (method) {
      case 0:
        result = this.matrix.alpha
          .sort((a: { x: number; }, b: { x: number; }) => a.x - b.x)
          .map((item: { y: string; }) => this.decode(item.y))
          .join('');
        break;
      case 1:
        result = this.matrix.beta
          .map((arr: any) => String.fromCharCode(...arr))
          .join('');
        break;
      case 2:
        const chunks = [];
        for (let i = 0; i < this.matrix.gamma.seq.length; i += 3) {
          chunks.push(this.matrix.gamma.seq.slice(i, i + 3).join(''));
        }
        result = chunks.join('');
        break;
    }

    return result;
  }
}
