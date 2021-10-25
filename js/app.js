let counter = 10;

function timeout() {
    setTimeout(function() {
        document.getElementById('countDown').textContent = counter;
        counter--;
        if (counter < 0){
            window.location.replace('4thpage.html');
        }
        timeout();
        
    }, 1000);
}

timeout();