'use client'
import React, {useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import 'flipping-pages/dist/style.css';

// gif assets
import cover1 from './assets/cover1.gif';
import cover2 from './assets/cover2.png';
import cover3 from './assets/cover3.png';
import cover4 from './assets/cover4.gif';
import cover5 from './assets/cover5.gif';
import cover6 from './assets/cover6.gif';
import cover7 from './assets/cover7.gif';
import cover8 from './assets/cover8.gif';
import cover9 from './assets/cover9.gif';
import cover10 from './assets/cover10.gif';
import cover11 from './assets/cover11.gif';
import cover12 from './assets/cover12.gif';
import cover13 from './assets/cover13.gif';
import cover14 from './assets/cover14.gif';
import cover15 from './assets/cover15.png';
import cover16 from './assets/cover16.png';
import cover17 from './assets/cover17.png';
import cover18 from './assets/thankyou.jpg';

import dynamic from "next/dynamic"
import type { IEventProps, IFlipSetting } from "react-pageflip/build/html-flip-book/settings"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import useDeviceSize from "./utils/useDeviceSize";

interface HTMLFilpPageOverride extends Partial<IFlipSetting & IEventProps> {
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
  renderOnlyPageLengthChange?: boolean
  ref?: any
}

const HTMLFlipBook = dynamic(() => import("react-pageflip"), {
  ssr: false
}) as React.ComponentType<HTMLFilpPageOverride>

interface IDataList {
  path: string | StaticImport | StaticImageData;
  url: string | URL | null
}

export default function Home(): JSX.Element {
  const flipBookRef = useRef<any>();
  const [width, height] = useDeviceSize();
  const [data, setData] = useState<IDataList[]>([
    {
      path: cover1,
      url: null,
    },
    {
      path: cover2,
      url: null,
    },
    {
      path: cover3,
      url: null,
    },
    {
      path: cover4,
      url: null,
    },
    {
      path: cover5,
      url: null,
    },
    {
      path: cover6,
      url: null,
    },
    {
      path: cover7,
      url: null,
    },
    {
      path: cover8,
      url: null,
    },
    {
      path: cover9,
      url: null,
    },
    {
      path: cover10,
      url: null,
    },
    {
      path: cover11,
      url: null,
    },
    {
      path: cover12,
      url: null,
    },
    {
      path: cover13,
      url: null,
    },
    {
      path: cover14,
      url: null,
    },
    {
      path: cover15,
      url: "https://forms.gle/naW2w2BPHdUuXbN88",
    },
    {
      path: cover16,
      url: null,
    },
    {
      path: cover17,
      url: null,
    },
    {
      path: cover18,
      url: null,
    }
  ]);

  const handlePageClick = (url: string | URL | null) => {
    if (url) {
      window.open(url, '_blank')?.focus();
    }
  };

  return (
    <>
      <div className="pages">
        <HTMLFlipBook
          ref={flipBookRef}
          width={width / 2.2}
          height={height / 1.5}
          maxShadowOpacity={0.5}
          showCover={false}
          mobileScrollSupport={true}
          startPage={0}
        >
          {
            data.map((value: IDataList, index: number) => (
              <div key={index} className={`page`} onDoubleClick={() => handlePageClick(value.url)}>
                <Image src={value.path} alt={`image-${index}`} priority={true} layout="fill" />
              </div>
            ))
          }
        </HTMLFlipBook>
      </div>
    </>
  );
}
