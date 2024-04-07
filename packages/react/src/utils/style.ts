import { darken } from 'polished';

export const getButtonInteractionStyle = (color: string) => {
    return {
        backgroundColor: color,
        '&:hover': {
            backgroundColor: darken(0.1, color)
        },
        '&:active': {
            backgroundColor: darken(0.2, color)
        }
    };
};
