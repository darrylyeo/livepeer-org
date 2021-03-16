/** @jsx jsx */

import Link from "next/link";
import { jsx, useColorMode } from "theme-ui";

type Props = {
  color?: string;
  title?: string;
  description?: string;
  icon?: HTMLElement;
  href?: string;
};

export const Icon = () => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" rx="28" fill="#00EB88" />
      <path
        d="M32.6666 35L39.6666 28L32.6666 21"
        stroke="#131418"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.3334 21L16.3334 28L23.3334 35"
        stroke="#131418"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconMine = () => {
  return (
    <div
      sx={{
        background: "#00EB88",
        width: "56px",
        height: "56px",
        borderRadius: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <svg
        width="26"
        height="21"
        viewBox="0 0 26 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M25.0189 3.13201L22.5994 0.62199C22.5213 0.542235 22.4277 0.479217 22.3245 0.436772C22.2212 0.394328 22.1103 0.373343 21.9987 0.375102H3.97589C3.76116 0.373816 3.55443 0.456503 3.39982 0.605531L0.99678 2.96742C0.91803 3.04461 0.855594 3.13684 0.813183 3.23863C0.770771 3.34041 0.749248 3.44969 0.749892 3.55995L0.823958 17.0236C0.831058 17.2357 0.916012 17.4378 1.06262 17.5914L3.38336 19.9862C3.46055 20.0649 3.55277 20.1274 3.65456 20.1699C3.75635 20.2122 3.86562 20.2337 3.97589 20.2331H21.9822C22.0931 20.2327 22.2027 20.2099 22.3045 20.166C22.4063 20.1222 22.4983 20.0582 22.5747 19.978L24.9942 17.5091L25.093 17.3857C25.1953 17.2444 25.25 17.0744 25.2494 16.9001V3.73277C25.2533 3.62229 25.2349 3.51216 25.1954 3.40894C25.1558 3.30572 25.0958 3.21154 25.0189 3.13201V3.13201ZM23.6034 16.5545L21.6283 18.5954H4.34622L2.46987 16.6862L2.39581 3.89737L4.3133 2.02102H21.653L23.6034 4.03727V16.5545Z"
          fill="black"
        />
        <path
          d="M15.4476 3.28857C14.0673 3.28857 12.718 3.69787 11.5704 4.4647C10.4228 5.23153 9.5283 6.32146 9.00009 7.59664C8.47189 8.87187 8.33369 10.275 8.60296 11.6288C8.87223 12.9824 9.5369 14.2259 10.5129 15.202C11.4889 16.1779 12.7323 16.8426 14.0861 17.1118C15.4398 17.3812 16.843 17.2429 18.1182 16.7148C19.3934 16.1865 20.4833 15.2921 21.2502 14.1445C22.017 12.9967 22.4263 11.6475 22.4263 10.2673C22.4263 8.41636 21.691 6.64135 20.3823 5.33259C19.0734 4.02383 17.2984 3.28857 15.4476 3.28857V3.28857ZM19.8669 7.28816C19.742 7.69802 19.4801 8.05252 19.1251 8.29224C18.77 8.53199 18.3433 8.64236 17.9165 8.60492C17.5589 8.0877 17.0501 7.69386 16.4598 7.47744C16.6736 6.65356 16.5951 5.78103 16.2376 5.00856C16.9686 5.11625 17.6694 5.37445 18.2954 5.76683C18.9215 6.15921 19.4594 6.67724 19.8751 7.28816H19.8669V7.28816ZM14.1062 10.2673C14.1062 10.004 14.1841 9.74647 14.3302 9.52746C14.4764 9.30834 14.6841 9.13748 14.9273 9.03636C15.1704 8.93524 15.438 8.90839 15.6964 8.9591C15.9548 9.00992 16.1924 9.13604 16.3792 9.32172C16.5659 9.50729 16.6936 9.7441 16.7459 10.0022C16.7983 10.2602 16.7731 10.5281 16.6734 10.7718C16.5737 11.0156 16.4042 11.2243 16.186 11.3718C15.9678 11.5192 15.7108 11.5988 15.4476 11.6005C15.0954 11.5983 14.7584 11.4569 14.5101 11.2071C14.2619 10.9572 14.1226 10.6194 14.1226 10.2673H14.1062V10.2673ZM14.2543 5.0744C14.5713 5.3557 14.7909 5.7305 14.8811 6.14466C14.9713 6.55884 14.9276 6.99097 14.7563 7.37868C14.1273 7.52648 13.5655 7.87978 13.1598 8.38269C12.489 7.85703 11.6483 7.59634 10.7978 7.65026C11.1652 7.00254 11.6639 6.43878 12.2619 5.99517C12.86 5.55158 13.5443 5.23794 14.2708 5.0744H14.2543V5.0744ZM10.1395 10.2673C10.142 10.0248 10.1612 9.78288 10.1971 9.54309C10.5644 9.33118 10.9949 9.25629 11.4122 9.33159C11.8295 9.40689 12.2066 9.62765 12.4767 9.95457L12.5261 9.99572V10.2673C12.5278 10.8079 12.6787 11.3376 12.9623 11.798C12.2725 12.3042 11.7853 13.0393 11.5879 13.8719C10.6581 12.9009 10.1342 11.6116 10.123 10.2673H10.1395V10.2673ZM13.1762 15.0816C13.0692 14.6592 13.1106 14.213 13.2934 13.8174C13.4762 13.4219 13.7892 13.1013 14.1802 12.909C14.5764 13.1069 15.0129 13.2111 15.4558 13.2135C15.7927 13.2081 16.1264 13.147 16.4434 13.0324C16.7447 13.8296 17.3312 14.4865 18.0893 14.8759C17.2913 15.3286 16.3897 15.5667 15.4723 15.5672C14.6749 15.5791 13.8849 15.4133 13.1598 15.0816H13.1762V15.0816ZM19.6282 13.6003C19.2179 13.6092 18.8182 13.469 18.5034 13.2057C18.1887 12.9423 17.98 12.5737 17.9165 12.1683C17.892 12.1381 17.8644 12.1104 17.8342 12.086C18.2201 11.5733 18.4307 10.95 18.4349 10.3084C19.289 10.2205 20.0832 9.82917 20.6734 9.20568C20.7563 9.57848 20.7977 9.95941 20.7968 10.3414C20.7771 11.5295 20.3599 12.6769 19.6118 13.6003H19.6282V13.6003ZM7.26737 4.73699C7.16799 4.69341 7.06097 4.6699 6.95248 4.66784C6.84398 4.66578 6.73615 4.68519 6.63518 4.72496C6.53422 4.76474 6.44212 4.82408 6.36418 4.89959C6.28625 4.97509 6.22401 5.06527 6.18107 5.16493L4.00023 10.1685C3.95491 10.2723 3.93152 10.3845 3.93152 10.4977C3.93152 10.611 3.95491 10.723 4.00023 10.8269L6.04116 15.5507C6.10541 15.6979 6.21133 15.8231 6.34586 15.9108C6.4804 15.9986 6.63766 16.045 6.79829 16.0445C6.91137 16.0454 7.02343 16.023 7.12747 15.9786C7.32668 15.8918 7.48348 15.7298 7.56365 15.5278C7.64382 15.3258 7.64085 15.1003 7.55541 14.9006L5.65437 10.4977L7.68708 5.8233C7.73091 5.72442 7.75483 5.61788 7.75746 5.50975C7.7601 5.40161 7.74139 5.29403 7.70241 5.19314C7.66342 5.09225 7.60494 5.00003 7.53029 4.92177C7.45564 4.84349 7.3663 4.7807 7.26737 4.73699V4.73699Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

const Arrow = ({ color }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 12H19"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 5L19 12L12 19"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const DocsCard = ({ title, description, icon, href }: Props) => {
  const [colorMode] = useColorMode();
  return (
    <Link href={href} passHref>
      <a
        sx={{
          boxShadow:
            "0px 1px 0px rgba(0, 0, 0, 0.05), 0px 0px 8px rgba(0, 0, 0, 0.03), 0px 30px 30px rgba(0, 0, 0, 0.02)",
          border: "1px solid",
          borderColor: "docs.border",
          width: "100%",
          py: "24px",
          px: ["24px", "24px", "16px", "24px"],
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: "16px",
          backgroundColor: "docs.switch",
          cursor: "pointer",
          transition: "all 0.2s",
          ":hover": {
            boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.12)",
          },
        }}>
        <div>
          {icon && <div sx={{ mb: "24px" }}>{icon}</div>}
          <h1
            sx={{
              mb: "16px",
              fontSize: "22px",
              lineHeight: "28px",
              color: "docs.text",
              fontWeight: "bold",
            }}>
            {title}
          </h1>
          <p sx={{ fontSize: "14px", lineHeight: "24px", color: "docs.text" }}>
            {description}
          </p>
        </div>
        <div
          sx={{
            width: "100%",
            mt: "88px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <p
            sx={{
              color: "docs.secondary",
              fontSize: "14px",
              fontWeight: "600",
            }}>
            Start
          </p>
          <a>
            <Arrow color={colorMode === "dark" ? "white" : "#3F3FE2"} />
          </a>
        </div>
      </a>
    </Link>
  );
};

export default DocsCard;
