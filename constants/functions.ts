const xOrMore = (e: string, n: number) => {
    return (
        e.length > n ? e.substring(0, n - 3) + '...' : e
    );
};

export {
    xOrMore
}