import { ImageResponse } from 'next/og';
import { generate as DefaultImage } from 'fumadocs-ui/og';
import { appName } from '@/lib/shared';

export const revalidate = false;

export function GET() {
  return new ImageResponse(
    (
      <DefaultImage
        title="Carlos Ibarra"
        description="Data Science & AI Engineer — Program/Release Management background, building applied AI/ML systems"
        site={appName}
        primaryColor="hsl(217, 91%, 60%)"
        primaryTextColor="hsl(217, 91%, 70%)"
      />
    ),
    { width: 1200, height: 630 },
  );
}
