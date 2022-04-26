import LazyLoad from "react-lazy-load";
import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Lazy = styled(LazyLoad)`
  width: 500pz;
`;

export default function ImagePreloadPage() {
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();

    img.src =
      "http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg";
    img.onload = () => {
      setImgTag(img);
    };
  }, []);

  const onClickPreload = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
    // document.getElementById("aaa")?.appendChild(imgTag)
  };

  return (
    <div>
      <div ref={divRef}></div>
      <button onClick={onClickPreload}>이미지 보여주기</button>
      <br />
      ================================= <br />
      <Wrapper>
        Scroll to load images.
        <LazyLoad height={500}>
          <img
            style={{ width: "500px", height: "500px" }}
            src="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg"
          />
        </LazyLoad>
        <LazyLoad height={500}>
          <img
            style={{ width: "500px", height: "500px" }}
            src="http://apod.nasa.gov/apod/image/1502/2015_02_20_conj_bourque1024.jpg"
          />
        </LazyLoad>
        <LazyLoad height={500}>
          <img
            style={{ width: "500px", height: "500px" }}
            src="http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif"
          />
        </LazyLoad>
        <LazyLoad height={500}>
          <img
            style={{ width: "500px", height: "500px" }}
            src="http://apod.nasa.gov/apod/image/1502/ToadSky_Lane_1080_annotated.jpg"
          />
        </LazyLoad>
        <LazyLoad height={500}>
          <img
            style={{ width: "500px", height: "500px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNA3jHaTnGUzO7weeF_R2ZR7Q1hK2U758B1g&usqp=CAU"
          />
        </LazyLoad>
        <LazyLoad height={500}>
          <img
            style={{ width: "500px", height: "500px" }}
            src="https://vrthumb.imagetoday.co.kr/2020/11/11/tid292t002803.jpg"
          />
        </LazyLoad>
        <LazyLoad height={500}>
          <img
            style={{ width: "500px", height: "500px" }}
            src="http://rgo4.com/files/attach/images/2681740/868/615/010/e48dff190ab09565775fd2c4177ce970.jpg"
          />
        </LazyLoad>
        <LazyLoad height={500}>
          <img
            style={{ width: "500px", height: "500px" }}
            src="https://og-data.s3.amazonaws.com/media/artworks/half/A0880/A0880-0016.jpg"
          />
        </LazyLoad>
        <LazyLoad height={500}>
          <img
            style={{ width: "500px", height: "500px" }}
            src="https://cdn.crowdpic.net/detail-thumb/thumb_d_4E783AC9977397A9DB43E3AA4EA06E2F.jpeg"
          />
        </LazyLoad>
        <LazyLoad height={500}>
          <img
            style={{ width: "500px", height: "500px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLCEDsug9s76kyGOM4f68epO2kQoxD1tr4lg&usqp=CAU"
          />
        </LazyLoad>
      </Wrapper>
    </div>
  );
}
