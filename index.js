 // List of songs
       
const songs = [
            "Do you want to build a snow man 편집본.wav", // Replace with the actual path or URL to your audio file
            "For the first time in forever 편집본 2.wav",
            "Love is an open door 편집본.wav",
            "https://drive.google.com/file/d/1xMMz8EZ4XU8ETtbZwKj6XhN4Ovn1gSK7/view?usp=sharing",
			   "문닫는 소리.wav",
			  	"바람 효과음.mp3",
			  	"In summer.mp3"
        ];

        let currentSongIndex = 0; // Track the current song index
        let audio = new Audio(); // Create an audio object
        let isMuted = false; // Track mute state

        // HTML elements to display current and next song
        const currentSongElement = document.getElementById("currentSong");
        const nextSongElement = document.getElementById("nextSong");

        // Function to update the displayed song information
        function updateSongInfo() {
            currentSongElement.textContent = songs[currentSongIndex] || "None";
            nextSongElement.textContent = songs[currentSongIndex + 1] || "None";
        }

        // Function to play the next song
        function playNextSong() {
            if (currentSongIndex < songs.length) {
                audio.src = songs[currentSongIndex];
                audio.play();
                updateSongInfo(); // Update the displayed song information
                currentSongIndex++;
            } else {
                currentSongIndex = 0; // Reset to the first song
                updateSongInfo(); // Update song info when loop resets
            }
        }

        // Toggle mute/unmute functionality
        function toggleMute() {
            isMuted = !isMuted;
            audio.muted = isMuted;
            alert(isMuted ? "Muted" : "Unmuted");
        }

        // Listen for keyboard events
        document.addEventListener("keydown", (event) => {
            if (event.code === "Space") {
                event.preventDefault(); // Prevent scrolling with spacebar
                if (!audio.paused) {
                    audio.pause();
                } else {
                    playNextSong();
                }
            } else if (event.code === "KeyM") {
                toggleMute(); // Toggle mute when "M" is pressed
            }
        });

        // Prevent automatic play of the next song when the current one ends
        audio.addEventListener("ended", () => {
            audio.pause(); // Pause the audio explicitly
        });

        // Initialize the displayed song info
        updateSongInfo();
