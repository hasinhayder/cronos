/**
 * Clock App
 * A simple clock app built with Alpine.js and Tailwind CSS
 * Author: Hasin Hayder
 * URL: https://github.com/hasinhayder/
 * License: MIT
 * Version: 1.0.0
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
        settingsOpen: false,
        addLocationOpen: false,
        notesOpen: false,
        websitesOpen: false,
        newLocationName: '',
        newLocationTimezone: '',
        showParticles: true,
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
        themes: {
            dark: {
                background: 'bg-gray-900',
                text: 'text-white',
                sidebar: 'bg-gray-800',
                border: 'border-gray-700',
                input: 'bg-gray-700 text-white p-2 rounded w-full',
                website: 'bg-gray-700 text-white hover:bg-gray-600',
                button: 'bg-gray-700 text-white hover:bg-gray-600'
            },
            light: {
                background: 'bg-gray-100',
                text: 'text-gray-900',
                sidebar: 'bg-white',
                border: 'border-gray-300',
                input: 'bg-white text-gray-900 p-2 rounded w-full border border-gray-300',
                website: 'bg-gray-300 text-gray-900 hover:bg-gray-200',
                button: 'bg-gray-300 text-gray-900 hover:bg-gray-200'
            },
            sepia: {
                background: 'bg-yellow-100',
                text: 'text-yellow-900',
                sidebar: 'bg-yellow-200',
                border: 'border-yellow-300',
                input: 'bg-yellow-50 text-yellow-900 p-2 rounded w-full border border-yellow-300',
                website: 'bg-yellow-900 text-white hover:bg-yellow-800',
                button: 'bg-yellow-900 text-white hover:bg-yellow-800'
            },
            ocean: {
                background: 'bg-blue-900',
                text: 'text-blue-100',
                sidebar: 'bg-blue-800',
                border: 'border-blue-700',
                input: 'bg-blue-700 text-blue-100 p-2 rounded w-full border border-blue-600',
                website: 'bg-blue-700 text-blue-100 hover:bg-blue-600',
                button: 'bg-blue-700 text-blue-100 hover:bg-blue-600'
            },
            forest: {
                background: 'bg-green-900',
                text: 'text-green-100',
                sidebar: 'bg-green-800',
                border: 'border-green-700',
                input: 'bg-green-700 text-green-100 p-2 rounded w-full border border-green-600',
                website: 'bg-green-700 text-green-100 hover:bg-green-600',
                button: 'bg-green-700 text-green-100 hover:bg-green-600'
            },
            sunset: {
                background: 'bg-orange-100',
                text: 'text-orange-900',
                sidebar: 'bg-orange-200',
                border: 'border-orange-300',
                input: 'bg-orange-50 text-orange-900 p-2 rounded w-full border border-orange-300',
                website: 'bg-orange-900 text-white hover:bg-orange-800',
                button: 'bg-orange-900 text-white hover:bg-orange-800'
            },
            midnight: {
                background: 'bg-indigo-900',
                text: 'text-indigo-100',
                sidebar: 'bg-indigo-800',
                border: 'border-indigo-700',
                input: 'bg-indigo-700 text-indigo-100 p-2 rounded w-full border border-indigo-600',
                website: 'bg-indigo-700 text-indigo-100 hover:bg-indigo-600',
                button: 'bg-indigo-700 text-indigo-100 hover:bg-indigo-600'
            },
            lavender: {
                background: 'bg-purple-100',
                text: 'text-purple-900',
                sidebar: 'bg-purple-200',
                border: 'border-purple-300',
                input: 'bg-purple-50 text-purple-900 p-2 rounded w-full border border-purple-300',
                website: 'bg-purple-900 text-white hover:bg-purple-800',
                button: 'bg-purple-900 text-white hover:bg-purple-800'
            },
            fire: {
                background: 'bg-red-900',
                text: 'text-red-100',
                sidebar: 'bg-red-800',
                border: 'border-red-700',
                input: 'bg-red-700 text-red-100 p-2 rounded w-full border border-red-600',
                website: 'bg-red-700 text-red-100 hover:bg-red-600',
                button: 'bg-red-700 text-red-100 hover:bg-red-600'
            },
            sky: {
                background: 'bg-cyan-900',
                text: 'text-cyan-100',
                sidebar: 'bg-cyan-800',
                border: 'border-cyan-700',
                input: 'bg-cyan-700 text-cyan-100 p-2 rounded w-full border border-cyan-600',
                website: 'bg-cyan-700 text-cyan-100 hover:bg-cyan-600',
                button: 'bg-cyan-700 text-cyan-100 hover:bg-cyan-600'
            },
            rose: {
                background: 'bg-pink-900',
                text: 'text-pink-100',
                sidebar: 'bg-pink-800',
                border: 'border-pink-700',
                input: 'bg-pink-700 text-pink-100 p-2 rounded w-full border border-pink-600',
                website: 'bg-pink-700 text-pink-100 hover:bg-pink-600',
                button: 'bg-pink-700 text-pink-100 hover:bg-pink-600'
            },
            mint: {
                background: 'bg-green-300',
                text: 'text-green-900',
                sidebar: 'bg-green-400',
                border: 'border-green-500',
                input: 'bg-green-200 text-green-900 p-2 rounded w-full border border-green-500',
                website: 'bg-green-500 text-white hover:bg-green-400',
                button: 'bg-green-500 text-white hover:bg-green-600'
            },
            lemon: {
                background: 'bg-yellow-500',
                text: 'text-yellow-100',
                sidebar: 'bg-yellow-600',
                border: 'border-yellow-700',
                input: 'bg-yellow-400 text-yellow-100 p-2 rounded w-full border border-yellow-700',
                website: 'bg-yellow-700 text-white hover:bg-yellow-600',
                button: 'bg-yellow-700 text-white hover:bg-yellow-800'
            },
            lime: {
                background: 'bg-green-500',
                text: 'text-green-100',
                sidebar: 'bg-green-600',
                border: 'border-green-700',
                input: 'bg-green-400 text-green-100 p-2 rounded w-full border border-green-700',
                website: 'bg-green-700 text-white hover:bg-green-600',
                button: 'bg-green-700 text-white hover:bg-green-800'
            },
            cherry: {
                background: 'bg-red-500',
                text: 'text-red-100',
                sidebar: 'bg-red-600',
                border: 'border-red-700',
                input: 'bg-red-400 text-red-100 p-2 rounded w-full border border-red-700',
                website: 'bg-red-700 text-white hover:bg-red-600',
                button: 'bg-red-700 text-white hover:bg-red-800'
            },
            teal: {
                background: 'bg-teal-500',
                text: 'text-teal-100',
                sidebar: 'bg-teal-600',
                border: 'border-teal-700',
                input: 'bg-teal-400 text-teal-100 p-2 rounded w-full border border-teal-700',
                website: 'bg-teal-700 text-white hover:bg-teal-600',
                button: 'bg-teal-700 text-white hover:bg-teal-800'
            },
            plum: {
                background: 'bg-purple-800',
                text: 'text-purple-100',
                sidebar: 'bg-purple-900',
                border: 'border-purple-700',
                input: 'bg-purple-700 text-purple-100 p-2 rounded w-full border border-purple-600',
                website: 'bg-purple-700 text-purple-100 hover:bg-purple-600',
                button: 'bg-purple-700 text-purple-100 hover:bg-purple-600'
            },
            coral: {
                background: 'bg-red-300',
                text: 'text-red-900',
                sidebar: 'bg-red-400',
                border: 'border-red-500',
                input: 'bg-red-200 text-red-900 p-2 rounded w-full border border-red-500',
                website: 'bg-red-500 text-white hover:bg-red-400',
                button: 'bg-red-700 text-white hover:bg-red-600'
            },
            aqua: {
                background: 'bg-blue-300',
                text: 'text-blue-900',
                sidebar: 'bg-blue-400',
                border: 'border-blue-500',
                input: 'bg-blue-200 text-blue-900 p-2 rounded w-full border border-blue-500',
                website: 'bg-blue-500 text-white hover:bg-blue-400',
                button: 'bg-blue-500 text-white hover:bg-blue-600'
            },
            amber: {
                background: 'bg-yellow-600',
                text: 'text-yellow-100',
                sidebar: 'bg-yellow-700',
                border: 'border-yellow-800',
                input: 'bg-yellow-500 text-yellow-100 p-2 rounded w-full border border-yellow-800',
                website: 'bg-yellow-800 text-white hover:bg-yellow-700',
                button: 'bg-yellow-800 text-white hover:bg-yellow-900'
            },
            emerald: {
                background: 'bg-green-700',
                text: 'text-green-100',
                sidebar: 'bg-green-800',
                border: 'border-green-900',
                input: 'bg-green-600 text-green-100 p-2 rounded w-full border border-green-900',
                website: 'bg-green-900 text-white hover:bg-green-800',
                button: 'bg-green-500 text-white hover:bg-green-600'
            },
            fuchsia: {
                background: 'bg-pink-700',
                text: 'text-pink-100',
                sidebar: 'bg-pink-800',
                border: 'border-pink-900',
                input: 'bg-pink-600 text-pink-100 p-2 rounded w-full border border-pink-900',
                website: 'bg-pink-900 text-white hover:bg-pink-800',
                button: 'bg-pink-500 text-white hover:bg-pink-400'
            },
            blush: {
                background: 'bg-pink-200',
                text: 'text-pink-900',
                sidebar: 'bg-pink-300',
                border: 'border-pink-400',
                input: 'bg-pink-100 text-pink-900 p-2 rounded w-full border border-pink-400',
                website: 'bg-pink-400 text-white hover:bg-pink-300',
                button: 'bg-pink-400 text-white hover:bg-pink-500'
            }
        },
        timezones: [
            { name: '', zone: 'Select Time Zone' },
            { name: 'GMT-12:00', zone: 'Etc/GMT+12' },
            { name: 'GMT-11:30', zone: 'Pacific/Niue' },
            { name: 'GMT-11:00', zone: 'Etc/GMT+11' },
            { name: 'GMT-10:30', zone: 'Pacific/Marquesas' },
            { name: 'GMT-10:00', zone: 'Etc/GMT+10' },
            { name: 'GMT-09:30', zone: 'Pacific/Marquesas' },
            { name: 'GMT-09:00', zone: 'Etc/GMT+9' },
            { name: 'GMT-08:30', zone: 'Pacific/Pitcairn' },
            { name: 'GMT-08:00', zone: 'Etc/GMT+8' },
            { name: 'GMT-07:30', zone: 'America/Phoenix' },
            { name: 'GMT-07:00', zone: 'Etc/GMT+7' },
            { name: 'GMT-06:30', zone: 'Pacific/Easter' },
            { name: 'GMT-06:00', zone: 'Etc/GMT+6' },
            { name: 'GMT-05:30', zone: 'America/Caracas' },
            { name: 'GMT-05:00', zone: 'Etc/GMT+5' },
            { name: 'GMT-04:30', zone: 'America/Caracas' },
            { name: 'GMT-04:00', zone: 'Etc/GMT+4' },
            { name: 'GMT-03:30', zone: 'America/St_Johns' },
            { name: 'GMT-03:00', zone: 'Etc/GMT+3' },
            { name: 'GMT-02:30', zone: 'America/St_Johns' },
            { name: 'GMT-02:00', zone: 'Etc/GMT+2' },
            { name: 'GMT-01:30', zone: 'Atlantic/Cape_Verde' },
            { name: 'GMT-01:00', zone: 'Etc/GMT+1' },
            { name: 'GMT+00:00', zone: 'Etc/GMT' },
            { name: 'GMT+00:30', zone: 'Africa/Monrovia' },
            { name: 'GMT+01:00', zone: 'Etc/GMT-1' },
            { name: 'GMT+01:30', zone: 'Africa/Libreville' },
            { name: 'GMT+02:00', zone: 'Etc/GMT-2' },
            { name: 'GMT+02:30', zone: 'Africa/Khartoum' },
            { name: 'GMT+03:00', zone: 'Etc/GMT-3' },
            { name: 'GMT+03:30', zone: 'Iran' },
            { name: 'GMT+04:00', zone: 'Etc/GMT-4' },
            { name: 'GMT+04:30', zone: 'Asia/Kabul' },
            { name: 'GMT+05:00', zone: 'Etc/GMT-5' },
            { name: 'GMT+05:30', zone: 'Asia/Kolkata' },
            { name: 'GMT+05:45', zone: 'Asia/Kathmandu' },
            { name: 'GMT+06:00', zone: 'Asia/Dhaka' },
            { name: 'GMT+06:30', zone: 'Asia/Yangon' },
            { name: 'GMT+07:00', zone: 'Etc/GMT-7' },
            { name: 'GMT+07:30', zone: 'Asia/Jakarta' },
            { name: 'GMT+08:00', zone: 'Etc/GMT-8' },
            { name: 'GMT+08:30', zone: 'Asia/Pyongyang' },
            { name: 'GMT+09:00', zone: 'Etc/GMT-9' },
            { name: 'GMT+09:30', zone: 'Australia/Adelaide' },
            { name: 'GMT+10:00', zone: 'Etc/GMT-10' },
            { name: 'GMT+10:30', zone: 'Australia/Lord_Howe' },
            { name: 'GMT+11:00', zone: 'Etc/GMT-11' },
            { name: 'GMT+11:30', zone: 'Pacific/Norfolk' },
            { name: 'GMT+12:00', zone: 'Etc/GMT-12' },
            { name: 'GMT+12:45', zone: 'Pacific/Chatham' },
            { name: 'GMT+13:00', zone: 'Pacific/Apia' },
            { name: 'GMT+14:00', zone: 'Pacific/Kiritimati' }
        ],
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
            document.body.className = `h-screen flex flex-col transition-colors duration-300 overflow-hidden ${this.themes[this.currentTheme].background} ${this.themes[this.currentTheme].text}`;
        },
        createParticles() {
            const container = document.getElementById('particles-container');
            container.innerHTML = '';
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
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
                locationCount: this.locationCount
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
                    this.locationCount = data.locationCount
            }
        },
        handleKeyPress(event) {
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