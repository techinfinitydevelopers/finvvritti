import { put } from "@vercel/blob";

const TOKEN = "vercel_blob_rw_Eh8cWbQYmAHS5oJJ_hsXAeI8s0yITumiEpD640bTjQazCUY";

// Write a test case study
const testStudy = {
  slug: "test-sme-growth",
  title: "How We Helped a Mumbai SME Grow 3x",
  subtitle: "Clean books, zero compliance issues, and 3x revenue in 12 months.",
  category: "SME",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  content: "This SME client came to us with messy books and zero compliance tracking.\n\nWe cleaned their accounts, filed all pending GST and TDS returns, and set up monthly reporting dashboards.\n\nWithin 12 months they grew revenue by 3x with full audit-ready records.",
  createdAt: new Date().toISOString(),
};

const result = await put("case-studies-dynamic.json", JSON.stringify([testStudy]), {
  access: "public",
  addRandomSuffix: false,
  allowOverwrite: true,
  token: TOKEN,
});

console.log("Uploaded. Blob URL:", result.url);
console.log("Test URL: https://finvvritti-three.vercel.app/case-studies/test-sme-growth");
