function xxName() {
    document.getElementById('xxoutput').innerHTML = '';

    var part1 = new Array('Adda', 'Ains', 'Anni', 'Auna', 'Avy', 'Blake', 'Bray', 'Bree', 'Brek', 'Brix', 'Capri', 'Brin', 'Brook', 'Bryn', 'Elly', 'Ember', 'Emmi', 'Hay', 'Kae', 'Kee', 'Kay', 'Kort', 'Mae', 'Ma', 'Pay', 'Pai', 'Ra', 'Shay', 'Shae', 'Tay', 'Zay');
    var part2 = new Array('dal', 'styn', 'alese', 'lynn', 'ley', 'dee', 'annah', 'zel', 'lee', 'dree', 'zey', 'laney', 'tyn', 'nika', 'ssia', 'dah');

    document.getElementById('xxoutput').innerHTML = part1[Math.floor(Math.random() * part1.length)];
    document.getElementById('xxoutput').innerHTML += part2[Math.floor(Math.random() * part2.length)];
}

function xyName(){
    document.getElementById('xyoutput').innerHTML = '';

    var part1 = new Array('Behr','Brek','Brix','Bo','Dyl','Dust','Drae','Jax');
    var part2 = new Array('ton');

    document.getElementById('xyoutput').innerHTML = part1[Math.floor(Math.random() * part1.length)];
    document.getElementById('xyoutput').innerHTML += part2[Math.floor(Math.random() * part2.length)];
}