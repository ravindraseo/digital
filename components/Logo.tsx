import Image from "next/image";
import Link from "next/link";

/**
 * Brand logo as a tightly-cropped transparent PNG (made from the original artwork in public/logo-original.png, 846x168).
 * `dark` uses the white-text version for dark backgrounds such as the footer.
 */
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className={`logo${dark ? " logo--dark" : ""}`} aria-label="Digital Ravindra — home">
      <Image
        src={dark ? "/logo-main-white.png" : "/logo-main.png"}
        alt="Digital Ravindra — Grow | Rank | Convert"
        width={846}
        height={168}
        priority={!dark}
        className="logo-img"
      />
    </Link>
  );
}
