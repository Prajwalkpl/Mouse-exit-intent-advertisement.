document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('mousemove', function(e) {
        if (e.clientY < 10) {
            console.log('Mouse moved above 50px');
            showAd();
        }
    });
});


function showAd() {
    document.getElementById('advertisement').classList.remove('hidden');
}

function closeAd() {
    document.getElementById('advertisement').classList.add('hidden');
}
