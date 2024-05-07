/**
 * Custom hook for implementing drag and drop functionality in a game.
 * @returns {Object} - Object containing dragOver, drop, and dragStart functions.
 */
export default function useDragAndDrop() {
    const game = useGameStore();

    /**
     * Prevents the default behavior of the drag event.
     * @param {DragEvent} event - The drag event.
     */
    const dragOver = (event: DragEvent) => {
        event.preventDefault();
    };

    /**
     * Handles the drop event and performs actions based on the target element's ID and the validity of the play.
     * @param {DragEvent} event - The drop event.
     */
    const drop = (event: any) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        const targetElement = event.target;
        const draggedElement = document.getElementById(data);

        const cardIndex = parseInt(draggedElement.id, 10);
        const pileValue = parseInt(targetElement.textContent, 10);
        const cardValue = parseInt(draggedElement.textContent, 10);

        // Prevent dropping if the target is also draggable
        if (!targetElement.getAttribute("draggable")) {

            if (targetElement.id === "asc1" && cardIndex > -1 && cardValue > -1 && validPlay(true, pileValue, cardValue)) {
                game.piles.asc1.push(...game.hand.splice(cardIndex, 1));
            }
            if (targetElement.id === "asc2" && cardIndex > -1 && cardValue > -1 && validPlay(true, pileValue, cardValue)) {
                game.piles.asc2.push(...game.hand.splice(cardIndex, 1));
            }
            if (targetElement.id === "desc1" && cardIndex > -1 && cardValue > -1 && validPlay(false, pileValue, cardValue)) {
                game.piles.desc1.push(...game.hand.splice(cardIndex, 1));
            }
            if (targetElement.id === "desc2" && cardIndex > -1 && cardValue > -1 && validPlay(false, pileValue, cardValue)) {
                game.piles.desc2.push(...game.hand.splice(cardIndex, 1));
            }
            game.saveHistory();
        }
    };

    /**
     * Sets the data to be transferred during the drag operation.
     * @param {DragEvent} event - The drag event.
     */
    const dragStart = (event: any) => {
        event.dataTransfer.setData("text", event.target.id);
    };

    /**
     * Checks if a play is valid based on the ascending or descending order and the values of the pile and card.
     * @param {boolean} asc - Indicates if the play is ascending or descending.
     * @param {number} pileValue - The value of the pile.
     * @param {number} cardValue - The value of the card.
     * @returns {boolean} - True if the play is valid, false otherwise.
     */
    const validPlay = (asc: boolean, pileValue: number, cardValue: number) => {
        if (asc) {
            if (cardValue > pileValue || pileValue - cardValue === 10) {
                return true;
            }
        } else {
            if (cardValue < pileValue || cardValue - pileValue === 10) {
                return true;
            }
        }
        return false;
    };

    return { dragOver, drop, dragStart };
}