import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', {
    state: () => ({
        deck: [] as Card[],
        hand: [] as Card[],
        piles: {
            asc1: [1] as number[],
            asc2: [1] as number[],
            desc1: [100] as number[],
            desc2: [100] as number[],
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
            const gameState = {
                deck: this.deck,
                hand: this.hand,
                piles: this.piles,
                history: this.history
            };
            localStorage.setItem('gameState', JSON.stringify(gameState));
        },
        playcard() {
            const gameState = JSON.parse(JSON.stringify(
                {
                    deck: this.deck,
                    hand: this.hand,
                    piles: this.piles,
                })); // deepcopy
            this.history.push(gameState);
        },
        load(gameState: any) {
            this.deck = gameState.deck;
            this.hand = gameState.hand;
            this.piles = gameState.piles;
            this.history = gameState.history;
        },
        draw() {
            while (this.hand.length < this.handSize && this.deck.length > 0) {
                const card = this.deck.pop();
                if (card !== undefined) {
                    this.hand.push(card);
                }
            }
            this.history = [];
        },

        createDeck() {
            const colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'white'];
            const deck: Card[] = [];
            const totalCards = 98;
            const startNumber = 2;
            const endNumber = 99;

            for (let i = 0; i < totalCards; i++) {
                const number = startNumber + i;
                const colorIndex = Math.floor(i / 10) % colors.length;
                const color = colors[colorIndex];
                deck.push({ number, color });
            }
            this.deck = deck;
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
                const lastPlay = this.history.pop()
                this.load(lastPlay);
                this.save();
            } else {
                console.error("No more states to undo.");
            }
        }
    }
});