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
        handSize: 8 as number,
        history: [] as any,
    }),
    actions: {
        setup() {
            this.createDeck();
            this.shuffleDeck();
            this.draw();
            this.save();
        },
        restart() {
            this.resetGameState();
            this.setup();
        },
        save() {
            this.saveHistory();
            this.saveStorage();
        },
        async saveStorage() {
            const gameState = {
                deck: this.deck,
                hand: this.hand,
                piles: this.piles,
                history: this.history
            };
            localStorage.setItem('gameState', JSON.stringify(gameState));
        },
        load(gameState: any) {
            this.deck = gameState.deck;
            this.hand = gameState.hand;
            this.piles = gameState.piles;
        },
        draw() {
            while (this.hand.length < this.handSize && this.deck.length > 0) {
                const card = this.deck.pop();
                if (card !== undefined) {
                    this.hand.push(card);
                }
            }
            this.history = [];
            this.saveStorage();
        },
        saveHistory() {
            const gameState = {
                deck: this.deck,
                hand: this.hand,
                piles: this.piles
            };
            this.history.push(gameState);
            this.saveStorage();
        },
        createDeck() {
            for (let i = 2; i < 100; i++) {
                this.deck.push(i);
            }
        },
        shuffleDeck() {
            for (let i = this.deck.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
            }
        },
        resetGameState() {
            this.deck = [];
            this.hand = [];
            this.piles = {
                asc1: [1],
                asc2: [1],
                desc1: [100],
                desc2: [100],
            };
            this.handSize = 8;
            this.history = [];
        },
        undo() {
            const lastGameState = JSON.parse(localStorage.getItem('gameState')!);
            if (lastGameState.history.length > 0) {
                this.load(lastGameState.history.pop());
                this.saveStorage();
            } else {
                console.error("No more states to undo.");
            }
        }
    }
});