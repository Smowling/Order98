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
        async saveGameState() {
            const gameState = {
                deck: this.deck,
                hand: this.hand,
                piles: this.piles
            };
            const encodedData = new TextEncoder().encode(JSON.stringify(gameState));
            const key = await window.crypto.subtle.generateKey(
                {
                    name: "AES-GCM",
                    length: 256,
                },
                true,
                ["encrypt", "decrypt"]
            );
            const iv = window.crypto.getRandomValues(new Uint8Array(12)); // Initialization vector
            const encryptedData = await window.crypto.subtle.encrypt(
                {
                    name: "AES-GCM",
                    iv: iv,
                },
                key,
                encodedData
            );

            // Store the encrypted data and the iv in localStorage
            localStorage.setItem('gameState', JSON.stringify({
                data: Array.from(new Uint8Array(encryptedData)),
                iv: Array.from(iv)
            }));
        },
        draw() {
            const card = this.deck.pop();
            if (card !== undefined) {
                this.hand.push(card);
            }
        },
        // loadGameState() {
        //     const savedState = localStorage.getItem('gameState');
        //     if (savedState) {
        //         const { deck, hand, piles } = JSON.parse(savedState);
        //         this.deck = deck;
        //         this.hand = hand;
        //         this.piles = piles;
        //     }
        // },
        async loadGameState() {
            const savedState = localStorage.getItem('gameState');
            if (savedState) {
                const { data, iv } = JSON.parse(savedState);
                const encryptedData = new Uint8Array(data);
                const ivArray = new Uint8Array(iv);

                // Assuming the encryption key is stored or retrieved securely
                const key = await window.crypto.subtle.importKey(
                    "jwk", // the format of the key to import
                    {   // this is an example key object, which you should replace with your actual key object
                        kty: "oct",
                        k: "your-encryption-key-here",
                        alg: "A256GCM",
                        ext: true,
                    },
                    {
                        name: "AES-GCM",
                        length: 256,
                    },
                    false, // whether the key is extractable (i.e. can be used in exportKey)
                    ["decrypt"] // what this key can do
                );

                const decryptedData = await window.crypto.subtle.decrypt(
                    {
                        name: "AES-GCM",
                        iv: ivArray,
                    },
                    key,
                    encryptedData
                );

                const decodedData = new TextDecoder().decode(decryptedData);
                const gameState = JSON.parse(decodedData);

                this.deck = gameState.deck;
                this.hand = gameState.hand;
                this.piles = gameState.piles;
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