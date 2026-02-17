export const loyaltyService = {
  async getPoints(): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomPoints = Math.floor(Math.random() * 8) + 1;
        resolve(randomPoints);
      }, 1000);
    });
  },
};
