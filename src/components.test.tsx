import { render } from "@testing-library/preact";
import { describe, expect, it } from "vitest";

import { MyPluginSettings } from "@/main";
import { MyPluginCodeBlock } from "./components";

const SETTINGS: MyPluginSettings = { mySetting: "lol" };

describe("MyPluginCodeBlock", () => {
    it("renders the input", () => {
        const { container } = render(<MyPluginCodeBlock input="lol" pluginSettings={SETTINGS} />);
        expect(container.textContent).toContain("Input: lol");
    });
});
