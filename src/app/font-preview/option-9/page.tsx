import { Abril_Fatface, Outfit } from "next/font/google";
import { FontPreviewTemplate } from "../_template";

const display = Abril_Fatface({ subsets: ["latin"], weight: ["400"], display: "swap", variable: "--fd" });
const body = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], display: "swap", variable: "--fb" });

export default function Page() {
  return (
    <div className={`${display.variable} ${body.variable}`}>
      <FontPreviewTemplate fontName="Abril Fatface + Outfit" optionNum={9} />
    </div>
  );
}
