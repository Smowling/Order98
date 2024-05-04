export default function useDragAndDrop() {

    const game = useGameStore();

    const dragOver = (event: DragEvent) => {
        event.preventDefault(); // Necessary to allow dropping
    };

    const drop = (event: any) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        const targetElement = event.target;
        const draggedElement = document.getElementById(data);

        const cardIndex = parseInt(draggedElement.id, 10);
        const pileValue = parseInt(targetElement.textContent, 10);
        const cardValue = parseInt(draggedElement.textContent, 10)
        // console.log(targetElement.textContent) target value

        // Prevent dropping if the target is also draggable
        if (!targetElement.getAttribute('draggable')) {
            // targetElement.appendChild(draggedElement);
            if (targetElement.id === 'asc1') {
                if (cardIndex > -1 && validPlay(true, pileValue, cardValue)) {
                    game.piles.asc1.push(...game.hand.splice(cardIndex, 1));
                }
            }
            if (targetElement.id === 'asc2') {
                if (cardIndex > -1 && validPlay(true, pileValue, cardValue)) {
                    game.piles.asc2.push(...game.hand.splice(cardIndex, 1));
                }
            }
            if (targetElement.id === 'desc1') {
                if (cardIndex > -1 && validPlay(false, pileValue, cardValue)) {
                    game.piles.desc1.push(...game.hand.splice(cardIndex, 1));
                }
            }
            if (targetElement.id === 'desc2') {
                if (cardIndex > -1 && validPlay(false, pileValue, cardValue)) {
                    game.piles.desc2.push(...game.hand.splice(cardIndex, 1));
                }
            }
        }
        game.playCard();
    };
    const dragStart = (event: any) => {
        event.dataTransfer.setData("text", event.target.id);
    };

    const validPlay = (asc: boolean, pileValue: number, cardValue: number) => {
        if (asc) {
            console.log('we have asc, ', pileValue, cardValue, cardValue > pileValue, pileValue - cardValue === 10)
            if (cardValue > pileValue || pileValue - cardValue === 10) {
                return true;
            }
        } else {
            if (cardValue < pileValue || cardValue - pileValue === 10) {
                return true;
            }
        }
        return false;
    }
    return { dragOver, drop, dragStart };
}