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
        async save() {
            const gameState = {
                deck: this.deck,
                hand: this.hand,
                piles: this.piles,
                history: this.history
            };
            localStorage.setItem('gameState', JSON.stringify(gameState));
        },
        load(gameState: any) {
            console.log('game loaded') //todo remove
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
            this.save();
        },
        saveHistory() {
            const gameState = {
                deck: this.deck,
                hand: this.hand,
                piles: this.piles
            };
            this.history.push(gameState);
            this.save();
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
            if (this.history.length > 0) {
                const lastGameState = this.history.pop();
                this.load(lastGameState)
            } else {
                console.error("No more states to undo.");
            }
        }
    }
});