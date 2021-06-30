function xxName() {
    document.getElementById('xxoutput').innerHTML = '';

    var part1 = new Array('Adda', 'Ains', 'Anni', 'Auna', 'Avy', 'Blake', 'Bray', 'Bree', 'Brek',
        'Bri', 'Bry', 'Brin', 'Brook', 'Bryn', 'Brix', 'Capri', 'Elly', 'Ember', 'Emmi', 'Hay', 'Kae',
        'Kee', 'Kels', 'Kay', 'Kort', 'Mae', 'May', 'Mai', 'Pay', 'McKae', 'Kar', 'Ammer', 'Pai', 'Ra',
        'Shay', 'Shae', 'Tay', 'Trin', 'Zay');

    var part2 = new Array('styn', 'alese', 'lynn', 'dee', 'leigh', 'annah', 'zel', 'lee', 'dree',
        'zey', 'laney', 'tyn', 'nika', 'isha', 'eegan', 'ley', 'enna', 'kley', 'leigh', 'sey', 'sley', 'aya');

    document.getElementById('xxoutput').innerHTML = part1[Math.floor(Math.random() * part1.length)];
    document.getElementById('xxoutput').innerHTML += part2[Math.floor(Math.random() * part2.length)];
}

function xyName() {
    document.getElementById('xyoutput').innerHTML = '';

    var part1 = new Array('Behr', 'Brek', 'Brix', 'Bo', 'Dyl', 'Dust', 'Drae', 'Jax');
    var part2 = new Array('ton','den','syn','son');

    document.getElementById('xyoutput').innerHTML = part1[Math.floor(Math.random() * part1.length)];
    document.getElementById('xyoutput').innerHTML += part2[Math.floor(Math.random() * part2.length)];
}