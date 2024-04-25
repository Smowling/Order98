import { defineStore } from 'pinia';

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
            this.saveGameState();
        },
        saveGameState() {
            const gameState = {
                deck: this.deck,
                hand: this.hand,
                piles: this.piles
            };
            localStorage.setItem('gameState', JSON.stringify(gameState));
        },
        draw() {
            const card = this.deck.pop();
            if (card !== undefined) {
                this.hand.push(card);
            }
        },
        loadGameState() {
            const savedState = localStorage.getItem('gameState');
            if (savedState) {
                const { deck, hand, piles } = JSON.parse(savedState);
                this.deck = deck;
                this.hand = hand;
                this.piles = piles;
            }
        },
        test() {
            const index = this.hand.indexOf(12);
            if (index > -1) {
                this.piles.asc1.push(...this.hand.splice(index, 1));
            }
        }

    }
});