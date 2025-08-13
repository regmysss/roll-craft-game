export const getCounterPos = (counterRef: React.RefObject<HTMLImageElement | null>) => {
    if (!counterRef.current) return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const rect = counterRef.current.getBoundingClientRect();
    return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
    };
};