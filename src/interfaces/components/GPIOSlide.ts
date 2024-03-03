export interface GPIOSlideProps {
    onToggle?: (value: boolean) => void;
    active?: boolean;
}


export interface GPIOSlideToggleOptions {
    number: number
    state: boolean
}