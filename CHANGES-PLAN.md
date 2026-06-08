# Finvvritti Website – Full Changes Plan (Doc v2)

## Already Done ✅
- Homepage: India's leading advisory — gold highlight pill
- Testimonials: Saurabh Goel first
- Our Process: Step 1 remove "growth opportunities", Step 4 add "financial planning"
- www.finvvritti.com — Railway domain added, DNS updated

---

## Pending Changes

### A. SERVICES MENU STRUCTURE
| # | Change | File |
|---|---|---|
| 1 | Business Setup → Add 6th item: **"Registration Services"** (moved from Corporate Finance) | `src/data/services.ts` or `Navbar.tsx` |
| 2 | International Services → Delete **"Financial Audits in USA"** → Add **"Bookkeeping & Accounting Services"** | Same |

---

### B. SERVICE PAGE CONTENT (services-content.json + ServiceDetail.tsx)

#### Company Incorporation
- Replace subtitle: `"Pvt Ltd, OPC, Partnership..."` → `"Company incorporation services for Private Limited Companies, LLPs, OPCs, Partnerships, and startups with complete registration and compliance support."`

#### Bookkeeping & Accounting — FAQ Change
- Remove: `"What are the penalties of non-Compliance"`
- Add: `"How does Finvvritti ensure the security and confidentiality of my business data?"` with full answer

#### Virtual CFO Services
- Replace overview (4 paragraphs — full text in doc)
- Benefits: Remove **"Scalable Engagement"** → Replace with **"Built on Real-World Experience"** / *"Having worked across operational and advisory roles..."*

#### Debt Raise / Advisory Services
- Replace overview (4 paragraphs)
- Header → `DEBT ADVISORY SERVICES`
- Subheader → `Funding Solutions Tailored to Your Growth Plans`
- Section heading: `"Why Choose Finvvritti..."` → `"Why Businesses Trust Us for Debt & Funding Advisory"`

#### Debt Restructuring Advisory
- Replace overview (5 paragraphs)
- Header → `DEBT RESTRUCTURING & RESOLUTION`
- Subheader → `How We Help Businesses Regain Financial Stability`
- Section heading: `"Why incorporate your Business"` → `"WHY CONSIDER DEBT RESTRUCTURING"`

#### SME IPO → **IPO Advisory** (rename everywhere)
- Replace overview (4 paragraphs)
- Section heading → `"WHY GO PUBLIC"`
- Header → `TAKING YOUR BUSINESS PUBLIC`
- Subheader → `How We Support Your IPO Journey`
- Delete last 2 bullets in each column: *"Liaison with SEBI, NSE Emerge/BSE SME..."* and *"Monthly MIS & KPI reporting..."*

#### Business Valuation Services
- Replace overview (4 paragraphs)
- Section heading → `"Why Businesses Need Professional Valuation"`
- Delete the "key indicators" section (shown in doc screenshot IMG 18-19)

#### Transaction Advisory Services
- Replace overview (4 paragraphs)
- Section heading → `"Why Businesses Need Expert Transaction Support"`
- Header → `DEAL EXECUTION & COMPLIANCE`
- Subheader → `From Due Diligence to Successful Deal Closure` + description

#### Entry India Strategies → **India Entry Strategies** (rename everywhere)
- Replace overview (3 paragraphs)
- Section heading → `"Why Set Up Your Business in India"`
- Header → `INDIA MARKET ENTRY`
- Subheader → `What Makes India a Strong Business Destination` + description

#### Regulatory Registration Services
- Replace overview (4 paragraphs)
- Section heading → `"WHY REGULATORY REGISTRATION MATTERS"`
- Delete 1 bullet point (shown in doc screenshot)

#### Startup Registration → **Startup India Registration** (rename everywhere)
- Replace overview (4 paragraphs)
- Section heading → `"Benefits of DPIIT Recognition for Startups"`
- Header → `DPIIT RECOGNITION ELIGIBILITY`
- Subheader → `Who Can Register Under Startup India` + description
- Delete 1 bullet point (shown in doc screenshot)

#### LLP Registration Services
- Replace overview (4 paragraphs)
- Section heading → `"Benefits of Registering a Limited Liability Partnership"`
- Header → `LLP REGISTRATION & COMPLIANCE`
- Subheader → `What We Manage for Your LLP Setup` + description

#### Direct Tax Services
- Replace overview (5 paragraphs)
- Section heading → `"WHY TAX ADVISORY MATTERS"`
- Header → `INCOME TAX SERVICES`
- Subheader → `What Our Income Tax Advisory Covers` + description

#### Indirect Tax Services
- **Replace hero image** (IMG 40 → IMG 41 from doc, 600×600 PNG)
- Replace overview (5 paragraphs)
- Header → `GST ADVISORY & COMPLIANCE`
- Subheader → `What Our GST Services Cover` + description

#### ESOP Advisory Services
- Replace overview (4 paragraphs)
- Section heading → `"Build Ownership. Retain Talent. Drive Growth."`
- Header → `ESOP ADVISORY & IMPLEMENTATION`
- Subheader → `What We Manage for Your ESOP Plan` + description

#### Internal Audit Services
- **Replace hero image** (IMG 48 → IMG 49 from doc, 340×226 JPEG)
- Replace overview (4 paragraphs)
- Section heading → `"Strengthen Controls. Reduce Risk. Improve Governance."`
- Header → `INTERNAL AUDIT SERVICES`
- Subheader → `What Our Internal Audit Covers` + description

#### Business Plan Services
- Replace overview (5 paragraphs)
- Section heading → `"WHY A STRONG BUSINESS PLAN MATTERS"`
- Header → `BUSINESS PLAN`
- Subheader → `What We Include in Your Business Plan` + description

#### USA Company Incorporation
- Replace overview (4 paragraphs)
- Section heading → `"Fast, Compliant & Affordable US Business Formation"`
- Header → `USA COMPANY INCORPORATION PROCESS`
- Subheader → `How We Set Up Your US Company` + description

#### Dubai Company Incorporation
- Replace overview (4 paragraphs)
- Section heading → `"WHY SET UP YOUR BUSINESS IN DUBAI"`
- Header → `DUBAI BUSINESS SETUP SERVICES`
- Subheader → `What We Manage for Your UAE Company Formation` + description
- Delete bullet points (shown in doc screenshot IMG 61-62)

#### Singapore Company Incorporation
- Replace overview (4 paragraphs)
- Section heading → `"A Global Hub for Startups, Investors & Cross-Border Growth"`
- Header → `SINGAPORE COMPANY INCORPORATION`
- Subheader → `What We Manage for Your Singapore Business Setup` + description

#### Foreign Compliance & Ongoing Reporting
- Replace overview (4 paragraphs)
- Section heading → `"Stay Compliant Across Borders"`
- Header → `FOREIGN ENTITY COMPLIANCE SERVICES`
- Subheader → `What We Manage for Your Overseas Entity` + description

---

### C. NEW SERVICE PAGE
**Bookkeeping & Accounting Services for International Clients**
- New slug: `bookkeeping-accounting-international`
- Main content: 3 paragraphs (from doc)
- 3 section images from doc (IMG 70, IMG 72, IMG 73)
- Add to International Services menu

---

## Images to Update
| Page | Current | New |
|---|---|---|
| Indirect Tax | existing hero | IMG 41 (600×600 PNG from doc) |
| Internal Audit | existing hero | IMG 49 (340×226 JPEG from doc) |
| New Bookkeeping service | — | IMG 70, 72, 73 from doc |

---

## Implementation Order
1. `services-content.json` — all content rewrites (20 services)
2. `src/lib/services.ts` or navbar — menu restructure
3. New service page — Bookkeeping International
4. Image uploads
5. Service renames (slugs if needed)
