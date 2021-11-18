"use strict";
function init() {
    const mapCanvas = document.getElementById('map');
    const viewCanvas = document.getElementById('view');
    console.log(mapCanvas);
    console.log(viewCanvas);
}
window.addEventListener('keyup', (evt) => {
    switch (evt.key) {
        case 'ArrowUp':
            point.deltaAvance = 0;
            break;
        case 'ArrowDown':
            point.deltaRecule = 0;
            break;
        case 'ArrowLeft':
            point.deltaPivotGauche = 0;
            break;
        case 'ArrowRight':
            point.deltaPivotDroite = 0;
            break;
    }
    //evt.preventDefault()
});
window.addEventListener('keydown', (evt) => {
    switch (evt.key) {
        case 'ArrowUp':
            point.deltaAvance = 1;
            break;
        case 'ArrowDown':
            point.deltaRecule = 1;
            break;
        case 'ArrowLeft':
            point.deltaPivotGauche = 1;
            break;
        case 'ArrowRight':
            point.deltaPivotDroite = 1;
            break;
    }
    //evt.preventDefault()
});
const delay = Math.floor(1000 / 30);
let lastTime = Date.now();
function render() {
    const newTime = Date.now();
    const delay = newTime - lastTime;
    /*point.deplace(delay)
          grille.lanceRayons( point.x, point.y, point.angle )
          grille.dessine()
          point.dessine()
          view3D.dessine()
          */
    //console.log(delay)
    lastTime = newTime;
}
setInterval(render, delay);
const grille = new Grille({
    canvas: mapCanvas,
    data: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    blockStyles,
    couleurFond: '#EEE',
    couleurGrille: '#333',
    nbRayons: viewCanvas.width,
    angleRayons: Math.PI * 0.5,
    vue: view3D,
});
//# sourceMappingURL=main.js.map