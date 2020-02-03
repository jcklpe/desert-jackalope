//- 𝗠𝗜𝗫𝗜𝗡𝗦 𝗔𝗡𝗗 𝗩𝗔𝗥𝗜𝗔𝗕𝗟𝗘𝗦
import { css } from "frontity";

export const media = {
  mobile: (...args) => css`
    @media (max-width: 767px) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (max-width: 990px) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 991px) {
      ${css(...args)};
    }
  `,
  UHD: (...args) => css`
    @media (min-width: 1199px) {
      ${css(...args)};
    }
  `
};
