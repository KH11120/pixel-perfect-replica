import { publicAsset } from "@/lib/public-asset";

/**
 * Kaushal Hub logo files. To replace a logo, swap the file in `public/images/brand/`
 * (or update the path here) and keep the width/height in step with the new artwork.
 */
export const brandLogos = {
  /** For light backgrounds, such as the main navigation. */
  primary: { src: publicAsset("/images/brand/kaushal-hub-logo.png"), width: 962, height: 259 },
  /**
   * For the dark footer. Its artwork has a solid background, matched by the
   * `--brand-deep` colour in styles.css; update both together.
   */
  reversed: {
    src: publicAsset("/images/brand/kaushalhub-logo-reversed.png"),
    width: 1870,
    height: 514,
  },
} as const;
