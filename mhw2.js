//modal//
document.addEventListener('DOMContentLoaded', function() {
    const sidebarTweetButton = document.querySelector('.sidebar_tweet');

    if (sidebarTweetButton) {
        sidebarTweetButton.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `
                <div class="modal-content">
                    <h2>Crea un nuovo post</h2>
                    <textarea id="postContent" placeholder="Inserisci il contenuto del post..."></textarea>
                    <button id="submitPost">Condividi</button>
                    <button id="closeModal">Chiudi</button>
                </div>
            `;
            
            document.body.appendChild(modal);

            document.getElementById('submitPost').addEventListener('click', function() {
                const postContent = document.getElementById('postContent').value;
                alert('Hai condiviso il post: ' + postContent);
                modal.remove();
            });

            document.getElementById('closeModal').addEventListener('click', function() {
                modal.remove();
            });
        });
    } else {
        console.error('Elemento con classe .sidebar_tweet non trovato.');
    }
});
// end//

// hidden menu //
const moreOption = document.getElementById('moreOption'); 
const dropdownMenu = document.getElementById('dropdownMenu'); 

if (moreOption && dropdownMenu) {
    moreOption.addEventListener('click', function() {
        
        if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
            dropdownMenu.style.display = 'block';
        } else {
            dropdownMenu.style.display = 'none';
        }
    });
} else {
    console.error('Elementi non trovati per aggiungere il menu a tendina.');
}
// fine//

//form//
document.querySelector('.tweetBox form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const tweetContent = document.querySelector('.tweetBox_input input').value;

 
    if (tweetContent.trim() !== '') {
        alert('Hai twittato: ' + tweetContent);
       
        document.querySelector('.tweetBox_input input').value = '';
    } else {
        alert('Il contenuto del tweet non può essere vuoto.');
    }
});
// end//