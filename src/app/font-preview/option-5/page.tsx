import { DM_Serif_Display, Jost } from "next/font/google";
import { FontPreviewTemplate } from "../_template";

const display = DM_Serif_Display({ subsets: ["latin"], weight: ["400"], style: ["normal", "italic"], display: "swap", variable: "--fd" });
const body = Jost({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], display: "swap", variable: "--fb" });

export default function Page() {
  return (
    <div className={`${display.variable} ${body.variable}`}>
      <FontPreviewTemplate fontName="DM Serif Display + Jost" optionNum={5} />
    </div>
  );
}
