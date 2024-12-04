import imageUrl from "/skibidi-toilet.gif";
import teleUrl from "/tele.gif";
import soundUrl from "/skibidi.mp3";
import loudUrl from "/skibidi_big.mp3";

export default defineContentScript({
    matches: ["<all_urls>"],
    main() {
        setInterval(() => {
            document.querySelectorAll("*").forEach((el) => {
                if (Math.random() > 0.5) {
                    el.style.background = `url('${browser.runtime.getURL(
                        teleUrl
                    )}')`;
                } else {
                    el.style.background = `url('${browser.runtime.getURL(
                        imageUrl
                    )}')`;
                }
            });
        }, 1500);

        setTimeout(() => {
            var audio = new Audio(browser.runtime.getURL(soundUrl));
            if (Math.random() > 0.1)
                audio = new Audio(browser.runtime.getURL(loudUrl));
            audio.loop = true;
            audio.autoplay = true;
            document.body.appendChild(audio);
            audio.play();
        }, 5000);
    },
});
