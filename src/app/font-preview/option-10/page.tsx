import { Yeseva_One, Josefin_Sans } from "next/font/google";
import { FontPreviewTemplate } from "../_template";

const display = Yeseva_One({ subsets: ["latin"], weight: ["400"], display: "swap", variable: "--fd" });
const body = Josefin_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], display: "swap", variable: "--fb" });

export default function Page() {
  return (
    <div className={`${display.variable} ${body.variable}`}>
      <FontPreviewTemplate fontName="Yeseva One + Josefin Sans" optionNum={10} />
    </div>
  );
}
