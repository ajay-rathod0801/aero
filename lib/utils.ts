import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const COLORS = [
    // HEX PASTEL COLORS
    '#FFD700', // gold
    '#98FB98', // palegreen
    '#87CEEB', // skyblue
    '#FFA07A', // lightsalmon
    '#DDA0DD', // plum
    '#FF6347', // tomato
    '#00FF7F', // springgreen
    '#7B68EE', // mediumslateblue
    '#FF69B4', // hotpink
    '#00FFFF', // cyan
];

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function connectionIdToColor(connectionId: number): string{
    return COLORS[connectionId % COLORS.length];
};