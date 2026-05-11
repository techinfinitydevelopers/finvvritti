import { Libre_Baskerville, Nunito_Sans } from "next/font/google";
import { FontPreviewTemplate } from "../_template";

const display = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"], display: "swap", variable: "--fd" });
const body = Nunito_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap", variable: "--fb" });

export default function Page() {
  return (
    <div className={`${display.variable} ${body.variable}`}>
      <FontPreviewTemplate fontName="Libre Baskerville 700 + Nunito Sans" optionNum={8} />
    </div>
  );
}
