# News API 를 활용한 기사 검색 서비스

### 구현 기능

- <b>유저 로그인 기능</b>

  - 유저 로그인 정보는 localStorage에 저장

- <b>뉴스 헤더라인 무한 스크롤 기능</b>

  - country 와 topic을 기반으로 뉴스 헤더라인을 가져오는 기능
  - InterSectionObserver를 활용하여 무한 스크롤 기능 구현

- <b>뉴스 검색 기능 (작업중)</b>

### 실행 방법

1. env파일을 통해 API Key를 저장했기 때문에 News API Key가 있어야 합니다.
2. .env 파일에서 <strong>REACT_APP_API_KEY: API KEY</strong>를 설정합니다.
3. npm run start를 작성하여 실행합니다.
