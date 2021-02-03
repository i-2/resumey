export function updateTheme(theme: string) {
    return {
        type: 'UPDATE_THEME',
        payload: {
            theme
        }
    }
}