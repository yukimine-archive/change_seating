function range(length) {
    var a = [];

    for (var i = 0; i < length; i++) {
        a.push(i);
    }

    return a;
}

// 【参考】http://pandanoir.seesaa.net/article/341955064.html
function fisher_yates(a) {
    var n = a.length;
    for (var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
}

function change_seating() {
    var num_of_people = 20; // 人数
    var people = range(num_of_people);

    fisher_yates(people);
    var seats = {};

    for (var i = 0; i < num_of_people; i++) {
        seats[i] = people[i];
    }

    return seats;
}

// main
(function () {
    console.log(change_seating());
})();