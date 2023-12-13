window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("loader--hidden");

    document.querySelector('.loader').addEventListener("transistionend", () => {
        document.body.remove(document.querySelector(".loader"));
    });
});