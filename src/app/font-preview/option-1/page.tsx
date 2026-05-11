import { Playfair_Display, Inter } from "next/font/google";
import { FontPreviewTemplate } from "../_template";

const display = Playfair_Display({ subsets: ["latin"], weight: ["700", "800", "900"], style: ["normal", "italic"], display: "swap", variable: "--fd" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--fb" });

export default function Page() {
  return (
    <div className={`${display.variable} ${body.variable}`}>
      <FontPreviewTemplate fontName="Playfair Display 900 + Inter" optionNum={1} />
    </div>
  );
}
