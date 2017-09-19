export function pad(num) {
    return ('' + num).length === 1 ? '0' + num : num
}

export function hh_mm_ss(totalSeconds) {

    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}