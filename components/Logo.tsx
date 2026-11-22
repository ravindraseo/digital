import Image from "next/image";
import Link from "next/link";

/**
 * Brand logo as a tightly-cropped transparent PNG (rendered at 4x, 960x184).
 * `dark` uses the white-text version for dark backgrounds such as the footer.
 */
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className={`logo${dark ? " logo--dark" : ""}`} aria-label="Digital Ravindra — home">
      <Image
        src={dark ? "/logo-white.png" : "/logo.png"}
        alt="Digital Ravindra — Grow | Rank | Convert"
        width={960}
        height={184}
        priority={!dark}
        className="logo-img"
      />
    </Link>
  );
}
