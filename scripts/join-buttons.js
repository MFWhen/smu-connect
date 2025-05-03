document.addEventListener('DOMContentLoaded', function() {
    const joinButtons = document.querySelectorAll('.join-btn[data-club-link]');
    
    joinButtons.forEach(button => {
        button.addEventListener('click', function() {
            const formUrl = this.dataset.clubLink;
            
            console.log(`Navigating to: ${formUrl}`);
            
            window.location.href = formUrl;
        });
    });
});