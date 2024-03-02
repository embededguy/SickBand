import * as React from 'react';
import Svg, {Defs, G, Path, ClipPath, Rect} from 'react-native-svg';

export function Needle(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={200}
      height={100}
      viewBox="8 25 850 400">
      <Defs>
        <ClipPath id="clip-path">
          <Path
            id="Path_286820"
            data-name="Path 286820"
            d="M13.1,4.5a13.25,13.25,0,0,1,0,26.5,13.25,13.25,0,0,1,0-26.5Z"
            transform="translate(0 -4.496)"
            fill="#f58220"
            clipRule="evenodd"
          />
        </ClipPath>
      </Defs>
      <G
        id="Group_287636"
        data-name="Group 287636"
        transform="translate(-7611.875 -9013.5)">
        <G
          id="Group_287633"
          data-name="Group 287633"
          transform="translate(5.505 -12.627)">
          <Path
            id="Path_286809"
            data-name="Path 286809"
            d="M93.226,123.577a29.685,29.685,0,1,1,29.683,29.683,29.682,29.682,0,0,1-29.683-29.683"
            transform="translate(7919.269 9291.697)"
            fill="#101012"
          />
          <Path
            id="Path_286810"
            data-name="Path 286810"
            d="M114.421,46.205l14.854,204.274H96.447L111.3,46.205a1.562,1.562,0,0,1,3.116,0"
            transform="translate(7927.746 9162.373)"
          />
          <Rect
            id="Rectangle_90843"
            data-name="Rectangle 90843"
            width={32.829}
            height={205.722}
            transform="translate(8024.192 9207.129)"
            fill="none"
          />
          <Path
            id="Path_286812"
            data-name="Path 286812"
            d="M113.491,130.843a16.685,16.685,0,1,1,16.681-16.685,16.7,16.7,0,0,1-16.681,16.685"
            transform="translate(7928.69 9301.118)"
            fill="#fff"
          />
          <G
            id="Group_287635"
            data-name="Group 287635"
            transform="translate(8028.794 9401.512)">
            <Path
              id="Path_286815"
              data-name="Path 286815"
              d="M13.1,4.5a13.25,13.25,0,0,1,0,26.5,13.25,13.25,0,0,1,0-26.5Z"
              transform="translate(0 -4.028)"
              fill="#f58220"
              fillRule="evenodd"
            />
            <G
              id="Mask_Group_210245"
              data-name="Mask Group 210245"
              transform="translate(0 0.468)"
              clipPath="url(#clip-path)">
              <Path
                id="Path_286819"
                data-name="Path 286819"
                d="M38.117,16.955c-.012,3.607,2.2,6.073,5.968,7.771V0L38.117.074Zm8.067-2.206V9.221c10.29-1.735,14.01,14.972.037,15.48V19.346C50.789,19.644,51.084,14.191,46.185,14.749Z"
                transform="translate(-33.168 -0.584)"
                fill="#fff"
                fillRule="evenodd"
              />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
}