import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { FontPreviewTemplate } from "../_template";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["600", "700"], style: ["normal", "italic"], display: "swap", variable: "--fd" });
const body = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--fb" });

export default function Page() {
  return (
    <div className={`${display.variable} ${body.variable}`}>
      <FontPreviewTemplate fontName="Cormorant Garamond 700 + DM Sans" optionNum={2} />
    </div>
  );
}
