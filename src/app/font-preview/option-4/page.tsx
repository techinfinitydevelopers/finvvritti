import { Cinzel, Raleway } from "next/font/google";
import { FontPreviewTemplate } from "../_template";

const display = Cinzel({ subsets: ["latin"], weight: ["700", "800", "900"], display: "swap", variable: "--fd" });
const body = Raleway({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], display: "swap", variable: "--fb" });

export default function Page() {
  return (
    <div className={`${display.variable} ${body.variable}`}>
      <FontPreviewTemplate fontName="Cinzel 900 + Raleway" optionNum={4} />
    </div>
  );
}
