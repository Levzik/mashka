  // JavaScript to autoplay the audio
            const audioElement = document.getElementById('autoplayAudio');
            
            // Attempt to play the audio
            audioElement.play().catch(error => {
                console.log('Autoplay failed:', error);
                // Most browsers block autoplay until user interaction
                // You can add a click handler on the body as a fallback
                document.body.addEventListener('click', () => {
                    audioElement.play();
                }, { once: true });
            });
