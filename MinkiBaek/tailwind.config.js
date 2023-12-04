/** @type {import('tailwindcss').Config} */
export default {
  content: [
    //파일의 모든 템플릿 파일에 대한 경로 추가
    "./index.html",
    // ** Recursive folder src안의 모든폴더안에 .js .ts .jsx .tsx파일들을 찾는다
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7F43F5",
          1: "#9364F2",
          2: "#A884EF",
          3: "#BCA4EB",
          4: "#D0C5E8",
          5: "rgba(0, 0, 0, 0.1)",
        },
        gray: {
          DEFAULT: "#FFFFFF",
          1: "#E5E5E5",
          2: "AEB0B4",
          3: "707885",
          4: "353C49",
        },
      },
    },
  },
  plugins: [],
}

