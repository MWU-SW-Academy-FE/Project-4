export const numberFormat = (num) => {
    return new Intl.NumberFormat().format(num)
}

export const myConfetti = window.confetti.create(
    document.querySelector("#confetti-canvas"),
    {
        resize: true,
        useWorker: true
    }
)