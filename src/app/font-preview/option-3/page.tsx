import { Bodoni_Moda, Manrope } from "next/font/google";
import { FontPreviewTemplate } from "../_template";

const display = Bodoni_Moda({ subsets: ["latin"], weight: ["700", "800", "900"], style: ["normal", "italic"], display: "swap", variable: "--fd" });
const body = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--fb" });

export default function Page() {
  return (
    <div className={`${display.variable} ${body.variable}`}>
      <FontPreviewTemplate fontName="Bodoni Moda 900 + Manrope" optionNum={3} />
    </div>
  );
}
