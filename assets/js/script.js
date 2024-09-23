/**
 * Clock App
 * A simple clock app built with Alpine.js and Tailwind CSS
 * Author: Hasin Hayder
 * URL: https://github.com/hasinhayder/
 * License: MIT
 * Version: 1.3.1
 */

function clockApp() {
    return {
        currentTime: '00:00:00',
        showSeconds: true,
        use24Hour: true,
        showQuote: true,
        currentTheme: 'dark',
        mainClockTimezone: 'Europe/Dublin',
        mainClockName: 'Ireland',
        locations: [
            { name: 'Bangladesh', timezone: 'Asia/Dhaka', time: 0 },
            { name: 'India', timezone: 'Asia/Kolkata', time: 0 },
            { name: 'South Africa', timezone: 'Africa/Johannesburg', time: 0 },
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

        // Alarm Properties
        alarmOpen: false,
        alarmTime: '',
        alarmRang: false,
        alarmSound: new Audio('//www.soundjay.com/misc/sounds/bell-ringing-02.mp3'),
        init() {
            this.loadFromLocalStorage()
            this.updateClock()
            setInterval(() => this.updateClock(), 1000)
            this.createParticles()
            this.applyTheme()
            this.updateQuote()
            setInterval(() => this.updateQuote(), 60000) // Change quote every minute

            // Check alarm every second
            setInterval(() => this.checkAlarm(), 55000)
        },
        updateClock() {
            const now = new Date()
            const options = {
                hour: '2-digit',
                minute: '2-digit',
                hour12: !this.use24Hour,
                timeZone: this.mainClockTimezone
            }
            if (this.showSeconds) {
                options.second = '2-digit'
            }

            this.currentTime = now.toLocaleTimeString('en-GB', options).toUpperCase()
            this.updateAllLocationTime()
        },

        updateAllLocationTime() {
            for (let i = 0; i < this.locations.length; i++) {
                this.locations[i].time = this.getLocationTime(this.locations[i].timezone)
            }
        },
        getLocationTime(timezone) {
            const now = new Date()
            const options = {
                hour: '2-digit',
                minute: '2-digit',
                hour12: !this.use24Hour,
                timeZone: timezone
            }
            return now.toLocaleTimeString('en-GB', options).toUpperCase()
        },
        applyTheme() {
            //find all .particle and apply this class name particle + this.themes[this.currentTheme].website
            const particles = document.querySelectorAll('.particle')
            particles.forEach((particle) => {
                particle.className = `particle ${this.themes[this.currentTheme].website}`
            })
        },
        createParticles() {
            const container = document.getElementById('particles-container')
            container.innerHTML = ''
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div')
                particle.className = 'particle ' + this.themes[this.currentTheme].website
                particle.style.left = `${Math.random() * 100}%`
                particle.style.top = `${Math.random() * 100}%`
                particle.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out infinite`
                particle.style.animationDelay = `${Math.random() * 2}s`
                container.appendChild(particle)
            }
        },
        saveLocation() {
            if (this.newLocationName && this.newLocationTimezone) {
                this.locations.push({ name: this.newLocationName, timezone: this.newLocationTimezone, time: this.getLocationTime(this.newLocationTimezone) })
                this.newLocationName = ''
                this.newLocationTimezone = ''
                this.addLocationOpen = false
                this.saveToLocalStorage()
            }
        },
        deleteLocation(index) {
            this.locations.splice(index, 1)
            this.saveToLocalStorage()
        },
        editLocation(index) {
            this.editingLocationIndex = index
            this.editingLocation = { ...this.locations[index] }
            this.editLocationOpen = true
        },
        saveEditedLocation() {
            if (this.editingLocation.name && this.editingLocation.timezone) {
                this.locations[this.editingLocationIndex] = { ...this.editingLocation }
                this.editLocationOpen = false
                this.saveToLocalStorage()
            }
        },
        updateQuote() {
            const randomIndex = Math.floor(Math.random() * this.quotes.length)
            this.currentQuote = this.quotes[randomIndex]
        },
        clearWebsites() {
            this.websites = [
                { url: '' },
                { url: '' },
                { url: '' },
                { url: '' },
                { url: '' },
                { url: '' }
            ]
            this.saveToLocalStorage()
            this.websitesOpen = false
        },
        saveToLocalStorage() {
            this.locations = this.locations.slice(0, this.locationCount)
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
                showBookmarks: this.showBookmarks,
                alarmTime: this.alarmTime,
            }
            localStorage.setItem('clockAppData', JSON.stringify(data))
        },
        loadFromLocalStorage() {
            const data = JSON.parse(localStorage.getItem('clockAppData'))
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
                    this.showBookmarks = data.showBookmarks,
                    this.alarmTime = data.alarmTime
            }
        },
        handleKeyPress(event) {
            if (event.altKey || event.metaKey) { // Checks if the Alt (or Option) key is pressed
                if (event.code === 'KeyN') {
                    this.notesOpen = !this.notesOpen
                } else if (event.code === 'KeyS') {
                    this.settingsOpen = !this.settingsOpen
                } else if (event.code === 'KeyB') {
                    this.websitesOpen = !this.websitesOpen
                }
            }
        },

        // Alarm Methods

        setAlarm() {
            if (this.alarmTime) {
                this.alarmOpen = false
                this.alarmRang = false // Reset alarm rang state
                this.saveToLocalStorage()
            }
        },

        checkAlarm() {
            if (this.alarmTime && !this.alarmRang) {
                const now = new Date()
                const options = {
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZone: this.mainClockTimezone
                }
                if (this.use24Hour) {
                    options.hour12 = false
                }

                const currentAlarmTime = now.toLocaleTimeString('en-GB', options).slice(0, 5) // "HH:MM"
                if (currentAlarmTime === this.alarmTime) {
                    this.triggerAlarm()
                }
            }
        },

        triggerAlarm() {
            this.alarmRang = true
            // Play alarm sound
            this.alarmSound.play()
        },

        stopAlarm() {
            this.alarmSound.pause()
            this.alarmRang = false
        }

    }
}