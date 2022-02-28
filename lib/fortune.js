const fortunes = [
    "May bad luck and extreme misfortune haunt your pathetic soul for all eternity.",
    "This is a weird exercise",
    "Not sure I like it too much",
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random()*fortunes.length)
    return fortunes[idx]
}
