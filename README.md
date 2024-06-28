# Indian-Accent-Translator

인디언 악센트 음성을 실시간으로 교정한 텍스트를 제공하는 프로젝트입니다.

<p align="center">
   <img src="https://github.com/kw0n0/Indian-Accent-Translator/assets/168624102/a24464fb-41d5-4bc3-990e-529509517655" alt="Image 1" width="30%">
 <img src="https://github.com/kw0n0/Indian-Accent-Translator/assets/168624102/60dbfc26-986c-474f-832c-777ccf073c1c" alt="Image 2" width="40%">
</p>


## client 폴더구조

클라이언트 측 폴더구조만 작성한 문서입니다.

```bash
 client
  ├─ .babelrc
  ├─ package-lock.json
  ├─ package.json
  ├─ public
  │  ├─ images
  │  │  ├─ copy.svg
  │  │  ├─ logo.svg
  │  ├─ ...
  │  ├─ index.html
  │  ├─ manifest.json
  │  └─ robots.txt
  └─ src
     ├─ App.js
     ├─ App.test.js
     ├─ assets
     │  └─ lottie
     │     └─ loading.json
     ├─ common # 공통컴포넌트가 위치한 폴더
     │  └─ Space.jsx # 요소간의 간격을 표시해주는 공통 스타일 컴포넌트
     ├─ components
     │  └─ Main
     │     ├─ Header.jsx #헤더 컴포넌트
     │     ├─ Notice.jsx #공지 컴포넌트
     │     └─ TranslatedText.jsx #교정된 결과 텍스트 컴포넌트
     ├─ index.css
     ├─ index.js
     ├─ hooks
     │  └─ useSocketConnect.js #소켓 관련 코드
     ├─ pages
     │  └─ Main
     │     ├─ Main.jsx
     │     └─ useMainVM.js #메인페이지 관련 비즈니스 로직
     ├─ reportWebVitals.js
     ├─ setupTests.js
     └─ utils
        └─ convertTime.js
  ```
