function injectHead() {
    return `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png">
        <link rel="stylesheet" href="./style.css" />
        <title>Space tourism website</title>
    `;
}


document.addEventListener("DOMContentLoaded", function () {
    document.getElementsByTagName("head")[0].innerHTML = injectHead();
  });