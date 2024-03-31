export interface SampleCodeBlockProps {
    bar: number;
}

export function SampleCodeBlock({ bar }: SampleCodeBlockProps) {
    return <>I got: {bar}!</>;
}
