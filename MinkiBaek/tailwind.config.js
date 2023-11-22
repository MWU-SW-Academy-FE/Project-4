/** @type {import('tailwindcss').Config} */
export default {
  content: [
    //파일의 모든 템플릿 파일에 대한 경로 추가
    "./index.html",
    // ** Recursive folder src안의 모든폴더안에 .js .ts .jsx .tsx파일들을 찾는다
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

