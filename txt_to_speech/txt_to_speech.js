let speech = new SpeechSynthesisUtterance();
        let voices = [];
        let voiceSelect = document.getElementById('voiceSelect');

        window.speechSynthesis.onvoiceschanged = () => {
            voices = window.speechSynthesis.getVoices();
            speech.voice = voices[0]; 

            voiceSelect.innerHTML = ''; 
            voices.forEach((voice, index) => {
                let option = new Option(voice.name, index);
                voiceSelect.appendChild(option);
            });
        };

        document.querySelector(".row button").addEventListener("click", () => {
            speech.text = document.querySelector("textarea").value;
            let selectedVoiceIndex = voiceSelect.selectedIndex;
            if (selectedVoiceIndex !== -1) {
                speech.voice = voices[selectedVoiceIndex];
            }
            window.speechSynthesis.speak(speech);
        });

        function toggleTheme() {
            document.body.classList.toggle('dark-mode');
        }