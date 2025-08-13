export type GameItemType = {
    type: string;
    amount?: number;
    src?: string;
}

export type ActionParams = {
    item: GameItemType;
    startX: number;
    startY: number;
}