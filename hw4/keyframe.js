var keys = [
    [0, [Math.PI / 6, -Math.PI / 6]],
    [0.5, [-Math.PI / 6, Math.PI / 6]],
    [1, [Math.PI / 6, -Math.PI / 6]]
];

var Ts = 0.5,
T = 1;

function keyframe(t) {
    var s = ((t - Ts) % T) / T;

    for (var i = 1; i < keys.length; i++) {
        if (keys[i][0] > s) break;
    }

    var a = (s - keys[i - 1][0]) / (keys[i][0] - keys[i - 1][0]);

    var value = [(1 - a) * keys[i - 1][1][0] + a * keys[i][1][0], (1 - a) * keys[i - 1][1][1] + a * keys[i][1][1]];

    return value;
}