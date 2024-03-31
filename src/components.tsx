import { MyPluginSettings } from "main";

export interface SampleCodeBlockProps {
    input: string;
    settings: MyPluginSettings;
}

export function SampleCodeBlock({ input, settings }: SampleCodeBlockProps) {
    return (
        <ul>
            <li>Input: {input}</li>
            <li>Settings: {settings.mySetting}</li>
        </ul>
    );
}
