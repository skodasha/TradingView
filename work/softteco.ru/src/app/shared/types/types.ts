export enum SectionTitleTheme {
    Blue = 'blue',
    White = 'white',
    Gray = 'gray'
}

export enum ButtonTheme {
    Blue = 'blue',
    White = 'white'
}

export enum ButtonSize {
    Big = 'big',
    Small = 'small'
}

export enum LogoTheme {
    Blue = '#0F46A0',
    White = '#fff',
    Gray = '#929293'
}

export interface SocialIcon {
    icon: string;
    iconHovered: string;
    link: string;
    title: string;
}
