import {
  ArrowBack,
  ArrowDownward,
  ArrowRight,
  ArrowRightSharp,
} from "@mui/icons-material";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <Box mt={4}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <svg
          width="142"
          height="24"
          viewBox="0 0 142 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginRight: 120 }}
        >
          <path
            d="M11.188 14.6303C11.188 19.8588 18.0626 24.097 26.5449 24.097C26.5946 24.097 26.6476 24.0937 26.6973 24.0937C29.1071 21.1526 30.1214 18.505 30.1214 14.6303C30.1214 10.7956 28.9281 7.73449 26.6973 5.16691C26.6476 5.16691 26.5946 5.16358 26.5449 5.16358C18.0626 5.16024 11.188 9.40175 11.188 14.6303Z"
            fill="#006ABD"
          />
          <path
            d="M22.6015 26.1086C14.4103 26.1086 7.77049 20.9686 7.77049 14.632C7.77049 8.29535 14.4135 3.1521 22.6015 3.1521C23.1044 3.1521 23.604 3.17156 24.0971 3.21048C21.5595 1.20312 18.3382 0 14.831 0C6.63976 0 0 6.55067 0 14.6287C0 22.7068 6.63976 29.2607 14.831 29.2607C18.3382 29.2607 21.5595 28.0576 24.0971 26.047C23.6073 26.0859 23.1077 26.1086 22.6015 26.1086Z"
            fill="#0FDC9B"
          />
          <path
            d="M133.089 18.2613C133.089 18.857 133.225 19.3882 133.499 19.8551C133.789 20.3058 134.167 20.66 134.634 20.9176C135.117 21.1591 135.656 21.2798 136.252 21.2798C136.832 21.2798 137.363 21.1591 137.846 20.9176C138.345 20.66 138.844 20.2414 139.343 19.6619C139.407 19.5975 139.464 19.5653 139.512 19.5653C139.56 19.5492 139.649 19.5734 139.778 19.6377L141.516 20.3622C141.742 20.4588 141.766 20.6198 141.589 20.8451C141.074 21.5857 140.534 22.1733 139.971 22.608C139.407 23.0426 138.779 23.3565 138.087 23.5497C137.411 23.7268 136.646 23.8154 135.793 23.8154C134.537 23.8154 133.419 23.5417 132.437 22.9943C131.455 22.447 130.674 21.6903 130.094 20.7244C129.531 19.7424 129.249 18.6235 129.249 17.3678C129.249 15.9833 129.539 14.784 130.118 13.7698C130.714 12.7395 131.503 11.9426 132.485 11.3791C133.467 10.8157 134.545 10.5339 135.721 10.5339C136.96 10.5339 138.047 10.8076 138.981 11.355C139.914 11.8862 140.647 12.6509 141.178 13.649C141.726 14.6472 141.999 15.8626 141.999 17.2954C141.999 17.4725 141.983 17.6093 141.951 17.7059C141.919 17.8025 141.798 17.8588 141.589 17.8749H133.378C133.282 17.8749 133.209 17.9071 133.161 17.9715C133.113 18.0359 133.089 18.1325 133.089 18.2613ZM137.942 15.8465C138.119 15.8465 138.232 15.8304 138.28 15.7982C138.329 15.7499 138.353 15.6533 138.353 15.5084C138.353 15.106 138.256 14.6954 138.063 14.2769C137.886 13.8583 137.612 13.5122 137.242 13.2385C136.888 12.9487 136.429 12.8039 135.866 12.8039C135.334 12.8039 134.859 12.9326 134.441 13.1902C134.022 13.4478 133.7 13.81 133.475 14.2769C133.25 14.7276 133.137 15.2428 133.137 15.8224L137.942 15.8465Z"
            fill="#333333"
          />
          <path
            d="M122.444 10.5339C123.49 10.5339 124.376 10.7191 125.1 11.0893C125.841 11.4435 126.444 11.9023 126.911 12.4658C127.378 13.0292 127.708 13.6088 127.901 14.2044C128.014 14.5264 127.917 14.6954 127.612 14.7115L125.076 14.953C124.899 14.9691 124.778 14.8806 124.714 14.6874C124.569 14.3815 124.408 14.0998 124.231 13.8422C124.054 13.5846 123.836 13.3754 123.579 13.2144C123.321 13.0534 122.983 12.9729 122.565 12.9729C122.017 12.9729 121.534 13.1258 121.116 13.4317C120.697 13.7376 120.367 14.2044 120.126 14.8323C119.9 15.444 119.788 16.2248 119.788 17.1746C119.788 18.1406 119.908 18.9375 120.15 19.5653C120.391 20.1932 120.729 20.66 121.164 20.9659C121.615 21.2718 122.146 21.4247 122.758 21.4247C123.466 21.4247 124.022 21.2396 124.424 20.8693C124.843 20.499 125.237 20 125.607 19.3721C125.656 19.2916 125.704 19.2433 125.752 19.2272C125.8 19.2111 125.889 19.2192 126.018 19.2514L127.805 19.6619C127.982 19.7102 128.038 19.8631 127.974 20.1207C127.845 20.4749 127.644 20.8693 127.37 21.304C127.096 21.7386 126.734 22.1411 126.283 22.5114C125.849 22.8816 125.309 23.1956 124.666 23.4531C124.038 23.6946 123.297 23.8154 122.444 23.8154C121.204 23.8154 120.102 23.5417 119.136 22.9943C118.17 22.4309 117.405 21.6581 116.842 20.6761C116.294 19.678 116.021 18.5269 116.021 17.2229C116.021 15.9028 116.302 14.7437 116.866 13.7456C117.429 12.7314 118.194 11.9426 119.16 11.3791C120.126 10.8157 121.22 10.5339 122.444 10.5339Z"
            fill="#333333"
          />
          <path
            d="M113.928 22.9943C113.928 23.2036 113.879 23.3565 113.783 23.4531C113.686 23.5336 113.517 23.5739 113.276 23.5739H110.74C110.531 23.5739 110.386 23.5336 110.305 23.4531C110.241 23.3726 110.209 23.2438 110.209 23.0667V11.2342C110.209 10.9283 110.338 10.7754 110.595 10.7754H113.565C113.807 10.7754 113.928 10.9122 113.928 11.1859V22.9943ZM113.976 8.62622C113.976 9.02868 113.758 9.22992 113.324 9.22992H110.716C110.507 9.22992 110.362 9.18162 110.281 9.08503C110.217 8.98844 110.185 8.8516 110.185 8.67451V6.13897C110.185 5.81699 110.321 5.65601 110.595 5.65601H113.589C113.847 5.65601 113.976 5.80894 113.976 6.11482V8.62622Z"
            fill="#333333"
          />
          <path
            d="M105.17 13.3341C104.993 13.3341 104.904 13.4307 104.904 13.6239V19.4435C104.904 19.9909 105.033 20.3853 105.29 20.6268C105.548 20.8522 105.958 20.9649 106.522 20.9649H107.826C107.939 20.9649 108.027 21.0051 108.092 21.0856C108.156 21.1661 108.188 21.2627 108.188 21.3754L108.164 22.8484C108.164 23.1543 107.987 23.3475 107.633 23.428C107.343 23.4602 107.029 23.4924 106.691 23.5245C106.369 23.5406 106.039 23.5567 105.701 23.5728C105.379 23.5728 105.065 23.5728 104.759 23.5728C103.664 23.5728 102.795 23.3153 102.151 22.8001C101.507 22.2688 101.185 21.4881 101.185 20.4577V13.6963C101.185 13.4548 101.081 13.3341 100.871 13.3341H99.3983C99.0924 13.3341 98.9395 13.1972 98.9395 12.9236V11.1366C98.9395 10.8951 99.0843 10.7744 99.3741 10.7744H101.04C101.185 10.7744 101.266 10.6858 101.282 10.5088L101.62 6.83825C101.636 6.56457 101.757 6.42773 101.982 6.42773H104.614C104.872 6.42773 105.001 6.58067 105.001 6.88655V10.5088C105.001 10.6697 105.081 10.7502 105.242 10.7502H107.778C108.067 10.7502 108.212 10.879 108.212 11.1366V12.9236C108.212 13.1972 108.051 13.3341 107.729 13.3341H105.17Z"
            fill="#333333"
          />
          <path
            d="M95.2794 14.1078C95.0058 13.7537 94.6355 13.4478 94.1686 13.1902C93.7018 12.9326 93.1303 12.8039 92.4541 12.8039C91.8585 12.8039 91.3514 12.9246 90.9328 13.1661C90.5303 13.3915 90.3291 13.7054 90.3291 14.1078C90.3291 14.3171 90.4096 14.5184 90.5706 14.7115C90.7316 14.8886 91.1018 15.0496 91.6814 15.1945L94.4584 15.8707C95.7946 16.1765 96.7444 16.6756 97.3079 17.3678C97.8713 18.0601 98.1531 18.8328 98.1531 19.686C98.1531 20.5554 97.9035 21.2959 97.4045 21.9077C96.9215 22.5194 96.2454 22.9943 95.376 23.3324C94.5067 23.6544 93.5086 23.8154 92.3817 23.8154C90.9489 23.8154 89.7334 23.5658 88.7353 23.0668C87.7372 22.5516 87.0369 21.9157 86.6344 21.1591C86.57 21.0464 86.5378 20.9417 86.5378 20.8451C86.5378 20.7325 86.5861 20.652 86.6827 20.6037L88.3248 19.7585C88.4858 19.678 88.6065 19.6458 88.687 19.6619C88.7836 19.6619 88.8641 19.7021 88.9285 19.7826C89.1378 20.0724 89.3873 20.3461 89.6771 20.6037C89.9669 20.8612 90.3291 21.0705 90.7638 21.2315C91.1984 21.3764 91.7458 21.4408 92.4058 21.4247C92.8566 21.4247 93.259 21.3764 93.6132 21.2798C93.9835 21.1671 94.2733 21.0142 94.4825 20.821C94.6918 20.6117 94.7965 20.3702 94.7965 20.0966C94.7965 19.8229 94.6838 19.5895 94.4584 19.3963C94.233 19.187 93.8145 19.0099 93.2027 18.865L90.7155 18.3338C89.5081 18.0601 88.5904 17.6335 87.9626 17.0539C87.3508 16.4583 87.045 15.6855 87.045 14.7357C87.045 13.9147 87.2542 13.1902 87.6728 12.5624C88.1075 11.9345 88.7353 11.4435 89.5564 11.0893C90.3774 10.7191 91.3594 10.5339 92.5024 10.5339C93.7259 10.5339 94.7804 10.7593 95.6658 11.2101C96.5673 11.6608 97.2113 12.2002 97.5976 12.828C97.662 12.9246 97.7103 13.0292 97.7425 13.1419C97.7747 13.2385 97.7184 13.3271 97.5735 13.4076L95.8348 14.2527C95.7221 14.301 95.6175 14.3171 95.5209 14.301C95.4404 14.2688 95.3599 14.2044 95.2794 14.1078Z"
            fill="#333333"
          />
          <path
            d="M65.6978 23.5729C65.3597 23.5729 65.1907 23.4119 65.1907 23.0899V11.2332C65.1907 10.9274 65.3195 10.7744 65.577 10.7744H68.4748C68.7163 10.7744 68.837 10.9113 68.837 11.1849V12.3682C68.837 12.4648 68.8612 12.5292 68.9095 12.5614C68.9739 12.5936 69.0463 12.5614 69.1268 12.4648C69.5454 12.0784 69.9639 11.7403 70.3825 11.4506C70.8011 11.1608 71.2438 10.9354 71.7106 10.7744C72.1775 10.5973 72.6605 10.5088 73.1595 10.5088C74.0289 10.5088 74.7533 10.7181 75.3329 11.1366C75.9285 11.5391 76.3471 12.0784 76.5885 12.7546C76.6207 12.819 76.661 12.8511 76.7093 12.8511C76.7737 12.835 76.8381 12.7948 76.9025 12.7304C77.2888 12.3118 77.7074 11.9416 78.1582 11.6196C78.625 11.2815 79.116 11.0159 79.6312 10.8227C80.1464 10.6295 80.6535 10.5329 81.1525 10.5329C82.2794 10.5329 83.1729 10.8791 83.833 11.5713C84.5091 12.2635 84.8472 13.2134 84.8472 14.4208V22.9933C84.8472 23.3797 84.654 23.5729 84.2676 23.5729H81.5872C81.4262 23.5729 81.3055 23.5407 81.225 23.4763C81.1606 23.3958 81.1284 23.267 81.1284 23.0899V14.9279C81.1284 14.3805 80.9835 13.962 80.6937 13.6722C80.4039 13.3663 79.9934 13.2134 79.4622 13.2134C79.1563 13.2134 78.8585 13.2778 78.5687 13.4066C78.2789 13.5353 78.0133 13.6883 77.7718 13.8654C77.5303 14.0425 77.321 14.2356 77.144 14.4449C77.0313 14.5576 76.9588 14.6703 76.9266 14.783C76.8944 14.8796 76.8783 14.9923 76.8783 15.1211V22.9933C76.8783 23.3797 76.6851 23.5729 76.2988 23.5729H73.6425C73.4815 23.5729 73.3608 23.5407 73.2803 23.4763C73.2159 23.3958 73.1837 23.267 73.1837 23.0899V14.9279C73.1837 14.3805 73.0388 13.962 72.749 13.6722C72.4592 13.3663 72.0407 13.2134 71.4933 13.2134C71.0104 13.2134 70.5676 13.3422 70.1652 13.5997C69.7627 13.8412 69.3441 14.2115 68.9095 14.7105V23.0175C68.9095 23.3877 68.7002 23.5729 68.2816 23.5729H65.6978Z"
            fill="#333333"
          />
          <path
            d="M56.6252 23.8154C55.3534 23.8154 54.2265 23.5336 53.2445 22.9702C52.2786 22.4067 51.522 21.634 50.9746 20.652C50.4272 19.6538 50.1536 18.5189 50.1536 17.2471C50.1536 15.9109 50.4353 14.7437 50.9987 13.7456C51.5622 12.7314 52.3349 11.9426 53.317 11.3791C54.299 10.8157 55.4098 10.5339 56.6494 10.5339C57.9534 10.5339 59.0883 10.8237 60.0543 11.4033C61.0202 11.9667 61.7688 12.7556 62.3 13.7698C62.8474 14.7679 63.1211 15.9189 63.1211 17.2229C63.1211 18.5108 62.8474 19.6538 62.3 20.652C61.7527 21.634 60.988 22.4067 60.006 22.9702C59.04 23.5336 57.9131 23.8154 56.6252 23.8154ZM56.6494 21.3523C57.245 21.3523 57.7441 21.1993 58.1466 20.8934C58.549 20.5715 58.8469 20.0966 59.04 19.4687C59.2493 18.8409 59.354 18.0762 59.354 17.1746C59.354 16.2248 59.2493 15.444 59.04 14.8323C58.8469 14.2044 58.549 13.7295 58.1466 13.4076C57.7441 13.0856 57.245 12.9246 56.6494 12.9246C56.0698 12.9246 55.5708 13.0856 55.1522 13.4076C54.7497 13.7295 54.4439 14.2044 54.2346 14.8323C54.0253 15.444 53.9207 16.2248 53.9207 17.1746C53.9207 18.0923 54.0253 18.865 54.2346 19.4929C54.4439 20.1046 54.7497 20.5715 55.1522 20.8934C55.5708 21.1993 56.0698 21.3523 56.6494 21.3523Z"
            fill="#333333"
          />
          <path
            d="M41.1337 5.41406C42.0674 5.41406 42.9368 5.5509 43.7417 5.82458C44.5627 6.08216 45.2952 6.45243 45.9392 6.93539C46.5831 7.41835 47.1063 7.9818 47.5088 8.62575C47.9274 9.2697 48.201 9.96999 48.3298 10.7266C48.3942 10.9842 48.4023 11.1532 48.354 11.2337C48.3218 11.3142 48.2332 11.3625 48.0884 11.3786L44.8284 11.596C44.6835 11.596 44.5869 11.5718 44.5386 11.5235C44.5064 11.4591 44.4742 11.3625 44.442 11.2337C44.2649 10.3966 43.9188 9.71241 43.4036 9.18116C42.8885 8.6338 42.1721 8.36012 41.2545 8.36012C40.0471 8.36012 39.0972 8.85113 38.405 9.83315C37.7288 10.7991 37.3908 12.3687 37.3908 14.542C37.3908 16.6992 37.7127 18.2689 38.3567 19.2509C39.0167 20.2168 39.9988 20.6998 41.3028 20.6998C42.2365 20.6998 43.0414 20.4663 43.7176 19.9995C44.3937 19.5326 44.9491 18.7357 45.3838 17.6088C45.4482 17.4639 45.6253 17.4156 45.915 17.4639L48.2815 17.971C48.362 17.9871 48.4345 18.0354 48.4989 18.1159C48.5633 18.1803 48.5794 18.3333 48.5472 18.5747C48.4667 18.9128 48.3057 19.3072 48.0642 19.758C47.8388 20.2088 47.5329 20.6756 47.1466 21.1586C46.7602 21.6254 46.2773 22.0601 45.6977 22.4626C45.1342 22.865 44.4742 23.1951 43.7176 23.4527C42.9609 23.6941 42.0996 23.8149 41.1337 23.8149C39.4756 23.8149 38.0267 23.4205 36.7871 22.6316C35.5636 21.8428 34.6218 20.7481 33.9617 19.3475C33.3017 17.9469 32.9717 16.3209 32.9717 14.4696C32.9717 12.6021 33.3017 11.0003 33.9617 9.66412C34.6218 8.31183 35.5636 7.26541 36.7871 6.52487C38.0106 5.78433 39.4595 5.41406 41.1337 5.41406Z"
            fill="#333333"
          />
        </svg>

        <Box sx={{ display: "flex", justifyContent: "space-around", gap: 5 }}>
          <Typography variant="h6">Solutions</Typography>
          <Typography variant="h6">Use Cases</Typography>
          <Typography variant="h6">About</Typography>
        </Box>
        <Button
          variant="outlined"
          sx={{
            bgcolor: "white",
            color: "black",
            border: "1px solid lightgray",
          }}
        >
          Request Demo <ArrowRightSharp />
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;