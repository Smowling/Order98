import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', {
    state: () => ({
        deck: [] as Card[],
        hand: [] as Card[],
        piles: {
            asc1: [{ number: 1, color: 'gray' }] as Card[],
            asc2: [{ number: 1, color: 'gray' }] as Card[],
            desc1: [{ number: 100, color: 'pink' }] as Card[],
            desc2: [{ number: 100, color: 'pink' }] as Card[],
        },
        handSize: 8 as number,
        history: [] as any,
        score: 0 as number,
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
                history: this.history,
                score: this.score,
            };
            localStorage.setItem('gameState', JSON.stringify(gameState));
        },
        playcard() {
            const gameState = JSON.parse(JSON.stringify(
                {
                    deck: this.deck,
                    hand: this.hand,
                    piles: this.piles,
                    score: this.score
                })); // deepcopy
            this.history.push(gameState);
            this.save();
        },
        score(card: Card, pile: Card[]) {
            return 0;
        },
        load(gameState: any) {
            this.deck = gameState.deck;
            this.hand = gameState.hand;
            this.piles = gameState.piles;
            this.history = gameState.history;
            this.score = gameState.score;
        },
        draw() {
            while (this.hand.length < this.handSize && this.deck.length > 0) {
                const card = this.deck.pop();
                if (card !== undefined) {
                    this.hand.push(card);
                }
            }
            this.history = [];
            this.save();
        },

        createDeck() {
            const colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'white'];
            const deck: Card[] = [];
            const totalCards = 98;
            const startNumber = 2;

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
                asc1: [{ number: 1, color: 'gray' }] as Card[],
                asc2: [{ number: 1, color: 'gray' }] as Card[],
                desc1: [{ number: 100, color: 'pink' }] as Card[],
                desc2: [{ number: 100, color: 'pink' }] as Card[],
            };
            this.handSize = 8;
            this.history = [];
            this.score = 0;
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