/**
 * Clock App
 * A simple clock app built with Alpine.js and Tailwind CSS
 * Author: Hasin Hayder
 * URL: https://github.com/hasinhayder/
 * License: MIT
 * Version: 1.1
 */

const themes = {
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
    },
    sand: {
        background: 'bg-yellow-200',
        text: 'text-yellow-900',
        sidebar: 'bg-yellow-300',
        border: 'border-yellow-400',
        input: 'bg-yellow-100 text-yellow-900 p-2 rounded w-full border border-yellow-400',
        website: 'bg-yellow-500 text-white hover:bg-yellow-400',
        button: 'bg-yellow-500 text-white hover:bg-yellow-600'
    },
    dusk: {
        background: 'bg-gray-800',
        text: 'text-orange-100',
        sidebar: 'bg-gray-900',
        border: 'border-gray-700',
        input: 'bg-gray-700 text-orange-100 p-2 rounded w-full border border-gray-600',
        website: 'bg-gray-700 text-orange-100 hover:bg-gray-600',
        button: 'bg-gray-700 text-orange-100 hover:bg-gray-600'
    },
    ice: {
        background: 'bg-blue-100',
        text: 'text-blue-800',
        sidebar: 'bg-blue-200',
        border: 'border-blue-300',
        input: 'bg-blue-50 text-blue-800 p-2 rounded w-full border border-blue-300',
        website: 'bg-blue-500 text-white hover:bg-blue-400',
        button: 'bg-blue-500 text-white hover:bg-blue-600'
    },
    bronze: {
        background: 'bg-orange-400',
        text: 'text-orange-900',
        sidebar: 'bg-orange-500',
        border: 'border-orange-600',
        input: 'bg-orange-300 text-orange-900 p-2 rounded w-full border border-orange-600',
        website: 'bg-orange-600 text-white hover:bg-orange-500',
        button: 'bg-orange-600 text-white hover:bg-orange-700'
    },
    copper: {
        background: 'bg-orange-600',
        text: 'text-orange-100',
        sidebar: 'bg-orange-700',
        border: 'border-orange-800',
        input: 'bg-orange-500 text-orange-100 p-2 rounded w-full border border-orange-800',
        website: 'bg-orange-800 text-white hover:bg-orange-700',
        button: 'bg-orange-800 text-white hover:bg-orange-900'
    }
}