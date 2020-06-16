
(function() {
    var names = ["Kartik", "Jatin", "Gourav", "Rahul", "Jagrit", "Kunal","Guru","Jivesh"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            bye.speak(names[i]);
        } else {
            hello.speak(names[i]);
        }
    }
})();
