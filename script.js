function shortenUrl() {
    const longUrl = document.getElementById("longUrl").value;
    const shortenedUrl = generateShortUrl();
    document.getElementById("shortenedUrl").textContent = shortenedUrl;
}

function generateShortUrl() {
    // Generate a random short URL (you can replace this with your own logic)
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 6;
    let shortUrl = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        shortUrl += characters.charAt(randomIndex);
    }

    return `http://short.url/${shortUrl}`;
}
