/**
 * Clock App
 * A simple clock app built with Alpine.js and Tailwind CSS
 * Author: Hasin Hayder
 * URL: https://github.com/hasinhayder/
 * License: MIT
 * Version: 1.1
 */

tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" }
            },
            fontSize: {
                '10xl': '10rem',
                '11xl': '12rem',
                '12xl': '14rem',
            }
        }
    }
}
function clockApp() {
    return {
        currentTime: '00:00:00',
        showSeconds: true,
        use24Hour: true,
        showQuote: true,
        currentTheme: 'dark',
        mainClockTimezone: 'Asia/Dhaka',
        mainClockName: 'Dhaka',
        locations: [
            { name: 'Dublin', timezone: 'GMT', time: 0 },
            { name: 'Ahmedabad', timezone: 'Asia/Kolkata', time: 0 },
            { name: 'California', timezone: 'Etc/GMT+7', time: 0 },
        ],
        locationCount: 3,
        editLocationOpen: false,
        editingLocation: { name: '', timezone: '' },
        editingLocationIndex: -1,
        settingsOpen: false,
        addLocationOpen: false,
        notesOpen: false,
        websitesOpen: false,
        newLocationName: '',
        newLocationTimezone: '',
        showParticles: true,
        showBookmarks: true,
        quotes: [
            "The only way to do great work is to love what you do - Steve Jobs",
            "Time is what we want most, but we often use it the least effectively - William Penn",
            "The two most powerful warriors are patience and time - Leo Tolstoy"
        ],
        currentQuote: '',
        notes: '',
        websites: [
            { url: 'https://github.com/hasinhayder/' },
            { url: 'https://github.com/hasinhayder/cronos' },
            { url: 'https://www.linkedin.com/in/thestoryteller/' },
            { url: 'https://www.facebook.com/hasin' },
            { url: 'https://twitter.com/hasin' },
            { url: 'https://medium.com/@hasinhayder' }
        ],
        themes: themes,
        timezones: timezones,
        init() {
            this.loadFromLocalStorage();
            this.updateClock();
            setInterval(() => this.updateClock(), 1000);
            this.createParticles();
            this.applyTheme();
            this.updateQuote();
            setInterval(() => this.updateQuote(), 60000); // Change quote every minute
        },
        updateClock() {
            const now = new Date();
            const options = {
                hour: '2-digit',
                minute: '2-digit',
                hour12: !this.use24Hour,
                timeZone: this.mainClockTimezone
            };
            if (this.showSeconds) {
                options.second = '2-digit';
            }

            this.currentTime = now.toLocaleTimeString('en-GB', options).toUpperCase();
            this.updateAllLocationTime();
        },

        updateAllLocationTime() {
            for (let i = 0; i < this.locations.length; i++) {
                this.locations[i].time = this.getLocationTime(this.locations[i].timezone);
            }
        },
        getLocationTime(timezone) {
            const now = new Date();
            const options = {
                hour: '2-digit',
                minute: '2-digit',
                hour12: !this.use24Hour,
                timeZone: timezone
            };
            return now.toLocaleTimeString('en-GB', options).toUpperCase();
        },
        applyTheme() {
            //find all .particle and apply this class name particle + this.themes[this.currentTheme].website
            const particles = document.querySelectorAll('.particle');
            particles.forEach((particle) => {
                particle.className = `particle ${this.themes[this.currentTheme].website}`;
            });
        },
        createParticles() {
            const container = document.getElementById('particles-container');
            container.innerHTML = '';
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle ' + this.themes[this.currentTheme].website;
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out infinite`;
                particle.style.animationDelay = `${Math.random() * 2}s`;
                container.appendChild(particle);
            }
        },
        saveLocation() {
            if (this.newLocationName && this.newLocationTimezone) {
                this.locations.push({ name: this.newLocationName, timezone: this.newLocationTimezone, time: this.getLocationTime(this.newLocationTimezone) });
                this.newLocationName = '';
                this.newLocationTimezone = '';
                this.addLocationOpen = false;
                this.saveToLocalStorage();
            }
        },
        deleteLocation(index) {
            this.locations.splice(index, 1);
            this.saveToLocalStorage();
        },
        editLocation(index) {
            this.editingLocationIndex = index;
            this.editingLocation = { ...this.locations[index] };
            this.editLocationOpen = true;
        },
        saveEditedLocation() {
            if (this.editingLocation.name && this.editingLocation.timezone) {
                this.locations[this.editingLocationIndex] = { ...this.editingLocation };
                this.editLocationOpen = false;
                this.saveToLocalStorage();
            }
        },
        updateQuote() {
            const randomIndex = Math.floor(Math.random() * this.quotes.length);
            this.currentQuote = this.quotes[randomIndex];
        },
        getWebsiteIcon(index) {
            return this.websites[index].icon || 'globe';
        },
        saveToLocalStorage() {
            this.locations = this.locations.slice(0, this.locationCount);
            const data = {
                showSeconds: this.showSeconds,
                use24Hour: this.use24Hour,
                currentTheme: this.currentTheme,
                mainClockTimezone: this.mainClockTimezone,
                mainClockName: this.mainClockName,
                locations: this.locations,
                showParticles: this.showParticles,
                quotes: this.quotes,
                notes: this.notes,
                websites: this.websites,
                showQuote: this.showQuote,
                newLocationTimezone: this.newLocationTimezone,
                locationCount: this.locationCount,
                showBookmarks: this.showBookmarks
            };
            localStorage.setItem('clockAppData', JSON.stringify(data));
        },
        loadFromLocalStorage() {
            const data = JSON.parse(localStorage.getItem('clockAppData'));
            if (data) {
                this.showSeconds = data.showSeconds
                this.use24Hour = data.use24Hour
                this.currentTheme = data.currentTheme
                this.mainClockTimezone = data.mainClockTimezone
                this.mainClockName = data.mainClockName
                this.locations = data.locations
                this.showParticles = data.showParticles
                this.quotes = data.quotes
                this.notes = data.notes
                this.websites = data.websites
                this.showQuote = data.showQuote,
                this.newLocationTimezone = data.newLocationTimezone,
                this.locationCount = data.locationCount,
                this.showBookmarks = data.showBookmarks
            }
        },
        handleKeyPress(event) {
            return;
            if (event.key === 'n' || event.key === 'N') {
                this.notesOpen = !this.notesOpen;
            } else if (event.key === 's' || event.key === 'S') {
                this.settingsOpen = !this.settingsOpen;
            } else if (event.key === 'b' || event.key === 'B') {
                this.websitesOpen = !this.websitesOpen;
            }
        }
    };
}