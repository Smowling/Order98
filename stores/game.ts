import { defineStore } from 'pinia';

const key = '6789qweedaf2er896qwer68f6qetqrt6lj7k6doljwer'

export const useGameStore = defineStore('game', {
    state: () => ({
        deck: [] as number[],
        hand: [] as number[],
        piles: {
            asc1: [1],
            asc2: [1],
            desc1: [100],
            desc2: [100],
        },
    }),
    actions: {
        setup() {
            for (let i = 2; i < 100; i++) {
                this.deck.push(i);
            }
            for (let i = this.deck.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
            }

            while (this.hand.length < 8) {
                this.draw();
            }
            this.save();
        },
        async save() {
            const gameState = {
                deck: this.deck,
                hand: this.hand,
                piles: this.piles
            };
            localStorage.setItem('gameState', JSON.stringify({
                gameState
            }));

        },
        draw() {
            const card = this.deck.pop();
            if (card !== undefined) {
                this.hand.push(card);
            }
        },
        load(gameState: any) {
            this.deck = gameState.deck;
            this.hand = gameState.hand;
            this.piles = gameState.piles;
        },

        test() {
            const index = this.hand.indexOf(12);
            if (index > -1) {
                this.piles.asc1.push(...this.hand.splice(index, 1));
            }
        }

    }
});