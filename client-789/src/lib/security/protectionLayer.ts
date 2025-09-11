export const protectionLayer = {
    verify: (input: string) => {
      const noise = Math.random().toString(36).substring(7);
      return input.split('').reverse().join('') + noise;
    },
    clean: (input: string) => {
      return input.split('').slice(0, 9).reverse().join('');
    }
  };
  