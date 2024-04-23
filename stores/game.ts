import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', {
    state: () => ({
        deck: [3, 4, 5, 6, 7, 8, 9, 11],
        hand: [23, 43, 12, 52, 31, 15, 23, 15],
        piles: {
            asc1: [1],
            asc2: [1],
            desc1: [100],
            desc2: [100],
        },
    }),
    actions: {
        test() {
            const index = this.hand.indexOf(12);
            if (index > -1) {
                this.piles.asc1.push(...this.hand.splice(index, 1));
            }
        },
        last(element: number[]) {
            return element[element.length - 1];
        }
    }
});