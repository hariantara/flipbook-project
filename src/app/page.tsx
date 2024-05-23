'use client'
import { FlippingPages } from "flipping-pages";
import { useEffect, useState } from "react";
import Image from "next/image";
import 'flipping-pages/dist/style.css';

// gif assets
import page1Gif from './gifs/indonesia-kaya-budaya.gif';
import page2Gif from './gifs/tujuan-pembelajaran.gif';
import page3Gif from './gifs/peta-konsep.gif';
import page4Gif from './gifs/keunikan-kebiasaan-masyarakat-disekitarku.gif';
import page5Gif from './gifs/nasi-tumpeng.gif';
import page6Gif from './gifs/tri-hita-karana.gif';
import page7Gif from './gifs/hubungan-manusia-dengan-tuhan.gif';
import page8Gif from './gifs/hubungan-manusia-dengan-manusia.gif';
import page9Gif from './gifs/hubungan-manusia-dengan-alam.gif';
import page10Gif from './gifs/gotong-royong.gif';
import page11Gif from './gifs/kekayaan-budaya-indonesia.gif';
import page12Gif from './gifs/peta-indonesia.gif';
import page13Gif from './gifs/anak-anak.gif';
import page14Gif from './gifs/banyak-filosofi.gif';
import page15Gif from './gifs/manfaat-keberagaman.gif';
import page16Gif from './gifs/test-pemahaman.gif';

export default function Home(): JSX.Element {
  const [selected, setSelected] = useState<number>(0);
  const [zoomClass, setZoomClass] = useState<string>('');

  const back = () => {
    setSelected(selected => Math.max(selected - 1, 0));
  };

  const next = () => {
    setSelected(selected => Math.min(selected + 1, 15));
  };

  /**
   * These code to set zoom base on Zoom In/Out button on bottom bar
   */
  useEffect(() => {
    let zoomOutTimeout: NodeJS.Timeout;

    if (zoomClass === 'zoom-in') {
      zoomOutTimeout = setTimeout(() => {
        setZoomClass('zoom-out');
      }, 3000); // 3 seconds for zoom in
    }

    return () => {
      clearTimeout(zoomOutTimeout);
    };
  }, [zoomClass]);

  const handleZoomToggle = () => {
    console.log('Zoom toggled', zoomClass);
    if (zoomClass !== 'zoom-in') {
      setZoomClass('zoom-in');
    } else {
      setZoomClass('zoom-out');
    }
  };

  return (
    <div>
      <div className="pages">
        <FlippingPages
          animationDuration={350}
          direction="right-to-left"
          onSwipeEnd={setSelected}
          selected={selected}
        >
          <div className={`page ${zoomClass}`}>
            <Image src={page1Gif} alt="page1" layout="fill" unoptimized/>
          </div>
          <div className={`page ${zoomClass}`}>
            <Image src={page2Gif} alt="page2" layout="fill" unoptimized/>
          </div>
          <div className={`page ${zoomClass}`}>
            <Image src={page3Gif} alt="page3" layout="fill" unoptimized/>
          </div>
          <div className={`page ${zoomClass}`}>
            <Image src={page4Gif} alt="page4" layout="fill" unoptimized/>
          </div>
          <div className={`page ${zoomClass}`}>
            <Image src={page5Gif} alt="page5" layout="fill" unoptimized/>
          </div>
          <div className={`page ${zoomClass}`}>
            <Image src={page6Gif} alt="page6" layout="fill" unoptimized/>
          </div>
          <div className={`page ${zoomClass}`}>
            <Image src={page7Gif} alt="page7" layout="fill" unoptimized/>
          </div>
          <div className={`page ${zoomClass}`}>
            <Image src={page8Gif} alt="page8" layout="fill" unoptimized/>
          </div>
          <div className={`page ${zoomClass}`}>
            <Image src={page9Gif} alt="page9" layout="fill" unoptimized/>
          </div>
          <div className={`page ${zoomClass}`}>
            <Image src={page10Gif} alt="page10" layout="fill" unoptimized/>
          </div>
          <div className={`page ${zoomClass}`}>
            <Image src={page11Gif} alt="page11" layout="fill" unoptimized/>
          </div>
          <div className={`page ${zoomClass}`}>
            <Image src={page12Gif} alt="page12" layout="fill" unoptimized/>
          </div>
          <div className={`page ${zoomClass}`}>
            <Image src={page13Gif} alt="page13" layout="fill" unoptimized/>
          </div>
          <div className={`page ${zoomClass}`}>
            <Image src={page14Gif} alt="page14" layout="fill" unoptimized/>
          </div>
          <div className={`page ${zoomClass}`}>
            <Image src={page15Gif} alt="page15" layout="fill" unoptimized/>
          </div>
          <div className={`page ${zoomClass}`}>
            <Image src={page16Gif} alt="page16" layout="fill" unoptimized/>
          </div>
        </FlippingPages>
      </div>
      <div className='button-container'>
        <button onClick={back}>Back</button>
        <button onClick={next}>Next</button>
        <button onClick={handleZoomToggle}>Zoom In/Out</button>
      </div>
    </div>
  );
}
