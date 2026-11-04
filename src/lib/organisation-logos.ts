import { publicAsset } from "@/lib/public-asset";

/**
 * Partner and supporter logos, stored in `public/images/organisations/`. To replace a logo,
 * swap the file (or update `src`) and set `width`/`height` to the new file's pixel size so
 * its aspect ratio is kept.
 */
export const organisationLogos = [
  { name: "FITT, IIT Delhi", src: publicAsset("/images/organisations/fitt-iit-delhi.png"), width: 397, height: 200 },
  { name: "Microsoft", src: publicAsset("/images/organisations/microsoft.png"), width: 1200, height: 256 },
  { name: "IIM Lucknow EIC", src: publicAsset("/images/organisations/iim-lucknow-eic.png"), width: 3899, height: 774 },
  { name: "IIT Ropar", src: publicAsset("/images/organisations/iit-ropar.png"), width: 1000, height: 450 },
  { name: "Kotak BizLab", src: publicAsset("/images/organisations/kotak-bizlab.png"), width: 1152, height: 212 },
  { name: "DST", src: publicAsset("/images/organisations/dst.png"), width: 953, height: 262 },
  { name: "EXIM Bank", src: publicAsset("/images/organisations/exim-bank.png"), width: 320, height: 84 },
  { name: "Cyran AI Solutions", src: publicAsset("/images/organisations/cyran-ai-solutions.png"), width: 428, height: 169 },
  { name: "SIDBI", src: publicAsset("/images/organisations/sidbi.png"), width: 1082, height: 405 },
  { name: "NSDC", src: publicAsset("/images/organisations/nsdc.png"), width: 865, height: 288 },
  { name: "AICTE", src: publicAsset("/images/organisations/aicte.png"), width: 316, height: 316 },
  { name: "Startup Punjab", src: publicAsset("/images/organisations/startup-punjab.jpeg"), width: 200, height: 200 },
] as const;
