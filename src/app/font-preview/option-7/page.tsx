import { Instrument_Serif, Bricolage_Grotesque } from "next/font/google";
import { FontPreviewTemplate } from "../_template";

const display = Instrument_Serif({ subsets: ["latin"], weight: ["400"], style: ["normal", "italic"], display: "swap", variable: "--fd" });
const body = Bricolage_Grotesque({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap", variable: "--fb" });

export default function Page() {
  return (
    <div className={`${display.variable} ${body.variable}`}>
      <FontPreviewTemplate fontName="Instrument Serif + Bricolage Grotesque 800" optionNum={7} />
    </div>
  );
}
