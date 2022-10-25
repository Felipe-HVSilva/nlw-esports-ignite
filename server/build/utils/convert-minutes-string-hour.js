"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMinutesStringToHour = void 0;
function convertMinutesStringToHour(minutesAmount) {
    const hours = Math.floor(minutesAmount / 60);
    const minuts = minutesAmount % 60;
    return `${String(hours).padStart(2, '0')}:${String(minuts).padStart(2, '0')}`;
}
exports.convertMinutesStringToHour = convertMinutesStringToHour;
