# wanted-pre-onBoarding 2주차 개인과제

- 특정 리포지토리(facebook/react)의 이슈 목록을 확인하는 페이지입니다.

## 🙂 시작 가이드
* 배포 주소

  🔗 http://wanted-pre-onboarding-12th-2-11.s3-website.ap-northeast-2.amazonaws.com/issues

* 프로젝트 실행 방법
  ```
   $ npm install
   $ npm start
  ```
## 🎥 화면 구성


|            /issues     |   
| :-------------------------: | 
| ![issueList](https://github.com/TaekJinJang/wanted-pre-onboarding-2week-personal-repo/assets/93184838/737f863e-3c42-46ad-809a-7f5c0530acae)|

### 📁 디렉토리 구조
```
📦src
 ┣ 📂apis
 ┣ 📂components
 ┃ ┣ 📂common
 ┣ 📂constants
 ┣ 📂containers
 ┣ 📂hooks
 ┣ 📂pages
 ┣ 📂recoil
 ┣ 📂styles
 ┣ 📂types
 ┣ 📂utils
 ```
## ✔️ 주요 기능

### `이슈 목록`
> - 오픈 상태의 이슈를 코멘트 순으로 정렬하여 제공합니다.
> - 각 이슈에서는 `이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수` 정보를 제공합니다.
> - 5번째 셀마다 광고가 삽입되며, 광고는 새페이지에서 확인할 수 있습니다.
> - 화면을 아래로 스크롤할 경우 30개의 이슈를 추가로 제공합니다.
> - 이슈를 클릭하면 이슈 상세페이지로 이동합니다.

### `이슈 상세`
> - 이슈와 함께 작성자의 프로필 이미지, 본문 정보를 제공합니다.
> - 본문에서는 마크다운 문법을 제공합니다.

### `공통 기능`
> - 페이지 전환 시에는 스켈레톤 UI 화면을 제공합니다.
> - 스크롤 이벤트로 추가 데이터 요청 시에는 스피너 UI를 제공합니다.
> - 에러가 발생한 경우 에러 페이지로 리다이렉트합니다.
>   - closed 이슈 번호로 접근한 경우에는 접근 불가 이슈임을 사용자에게 안내합니다.
>   - status 코드가 명시된 에러는 사용자에게 코드 정보를 제공합니다.
