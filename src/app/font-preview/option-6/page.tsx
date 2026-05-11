import { Spectral, Plus_Jakarta_Sans } from "next/font/google";
import { FontPreviewTemplate } from "../_template";

const display = Spectral({ subsets: ["latin"], weight: ["600", "700", "800"], style: ["normal", "italic"], display: "swap", variable: "--fd" });
const body = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--fb" });

export default function Page() {
  return (
    <div className={`${display.variable} ${body.variable}`}>
      <FontPreviewTemplate fontName="Spectral 800 + Plus Jakarta Sans" optionNum={6} />
    </div>
  );
}
