export const History = {
    navigate: null,
    //@ts-ignore
    push: (page, ...rest) => History.navigate(page, ...rest),
};
