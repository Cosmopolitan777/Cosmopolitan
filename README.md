# Cosmopolitan
<!-- ## :dart: 우삼겹: 우리동네 맛집 삼겹줄 -->
<p align='center'>

</p>
<!-- 1d9GD-F2knr3Vmlr8i4U3MS1pUl6NN58C -->
<p align='center'>


<!-- https://github.com/Cosmopolitan777/Cosmopolitan/assets/127120819/ef5597c1-6383-4c63-bb26-f24e75d795e4 -->


https://github.com/Cosmopolitan777/Cosmopolitan/assets/127120819/595033d0-becd-4563-94b5-76929039107b

 
</p>

<!-- ## :mag_right: 기획 배경
-- 칵테일 레시피를 공유하는 서비스 -->
<!-- - 자치구별로 한눈에 맛집을 확인
- 맛집을 추천받고 또 추천도 할 수 있는 서비스 -->

## :star: 서비스 소개  
### 칵테일 레시피 공유 서비스
<!-- ### 생생한 후기를 확인할 수 있습니다.
> -  -->

## :open_file_folder: 주요 기능
- **메인 화면** - three.js 라이브러리 활용하여 3D 모델 구현
- **칵테일 리스트 페이지** - 검색 기능
- **칵테일  리스트 상세페이지** - 스와이퍼 라이브러리 사용
- **게시판 페이지** - 게시글 생성, 게시글 내용 조회 및 삭제
- **찜 목록** - React rating 모듈 사용 state로 관리 session 값 이용해서 계정 찜 목록 유지
- **별점기능** - React rating 모듈 사용 state로 관리 session 값 이용해서 계정 찜 목록 유지
- **칵테일 추천 기능** - nodeml 적용, 사용자 기반 추천 알고리즘
- **로그인, 회원가입** - CRUD 사용, bcrypt 모듈로 해싱 처리
- **카카오톡 로그인 기능** - Rest API 사용
- **회원정보수정 및 삭제 기능** - CRUD 사용
- **페이지 보안성 강화** - XSS, SQL injection  방지

<details>
<summary>카카오 로그인</summary>
<div markdown="1">

[screen-recording (11).webm](https://github.com/Cosmopolitan777/Cosmopolitan/assets/127120819/52cf0b01-c173-438e-bc7a-20c667146240)

</div>
</details>

<details>
<summary>칵테일 추천 기능</summary>
<div markdown="1">

![스크린샷 2023-05-15 13 57 39](https://github.com/Cosmopolitan777/Cosmopolitan/assets/127120819/e2d248e8-1c52-4227-90d5-bb06db12e773)


![스크린샷 2023-05-15 13 57 58](https://github.com/Cosmopolitan777/Cosmopolitan/assets/127120819/3f41496d-ebbc-4b80-8b29-209c669b43e6)



</div>
</details>


## :arrows_counterclockwise: 서비스 흐름

![스크린샷 2023-05-15 14 16 36](https://github.com/Cosmopolitan777/Cosmopolitan/assets/127120819/4f34dcdb-2645-4ef7-a7e4-5bdae1fa5e4b)

![스크린샷 2023-05-15 14 16 40](https://github.com/Cosmopolitan777/Cosmopolitan/assets/127120819/a17d5787-a2e6-4dd3-8f4f-3dd70cab15bb)

![스크린샷 2023-05-15 14 16 43](https://github.com/Cosmopolitan777/Cosmopolitan/assets/127120819/e0256d29-d535-428f-8c54-93c8c6a5120b)

![스크린샷 2023-05-15 14 16 46](https://github.com/Cosmopolitan777/Cosmopolitan/assets/127120819/067fae4f-07ca-4806-a45d-22a74134dbe7)


<!-- <img width="800" alt="image" src="https://user-images.githubusercontent.com/61008837/227681564-b11c528d-f9c6-4740-a8e5-d5d68718ee13.png">
<img width="800" alt="image" src="https://user-images.githubusercontent.com/61008837/227681579-0b4730a5-43a9-4dfb-babd-50edd64c65fa.png">
<img width="800" alt="image" src="https://user-images.githubusercontent.com/61008837/227681589-afb888c6-e02d-46ec-85e0-8495d14221e2.png"> -->






<!-- <p align='center' width="800">https://user-images.githubusercontent.com/61008837/236637691-0bea1299-eb87-4318-8810-1b39b996f2c3.mp4</p> -->

<br/>

## :white_check_mark:프로젝트 구동 방법 
```
git clone https://github.com/Cosmopolitan777/Cosmopolitan.git
node app.js
```
- 배포링크: http://3.106.52.247:3000/

## :speech_balloon: 보완점
- 페이지네이션 구현 미완
- three.js 모델 로딩 지연
<!-- - 전체 페이지를 초기에 **반응형**으로 적용하였으나 </br> **&rarr; 메인 화면 좌표가 맞지않는  문제가 발생되어 각 자치구 페이지에만 반응형을 추가했습니다.**
- 미로 찾기에서 **대각선으로 길찾기되는 문제**가 발생하여 </br> **&rarr; 좌표 넣는 지점을 수정해 해결하였습니다.**
- 리뷰작성시 **리뷰내용이 저장되지 않는 문제**가 발생하여 </br> **&rarr; 경로 수정 및 변수 지정을 통해 해결했습니다.**
- 리뷰작성시 **리뷰 혹은 별점이 추가되지 않는 경우** 리뷰가 저장되지 않고 </br> **&rarr; 경고창을 띄우도록 하여 평균평점에 오류가 생기지 않도록 하였습니다.**  -->


## :shipit: 팀원 소개


|                                                       정성윤(조장)                                                       |                                                                         최자영(팀원)                                                                         |                                                       김지효(팀원)                                                       |                                                       정유진(팀원)                                                       |                                                       홍의채(팀원)                                                       |
| :---------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: |
| <img src="https://drive.google.com/uc?id=1C_DYRFIctedL9eR1-QuLfxDLXYqIguIG" alt="img" height="150px" width="150px" /> | <img src="https://drive.google.com/uc?id=1PCJHyAyF1aOM_ia3ywzc1cIl-vBpFaMb" alt="img" height="150px" width="150px" /> | <img src="https://drive.google.com/uc?id=1HrK9JMOcgm9W2OFGtRuKZmNyZkYf1Ixf" alt="img" height="150px" width="150px" /> | <img src="https://drive.google.com/uc?id=1d9GD-F2knr3Vmlr8i4U3MS1pUl6NN58C" alt="img" height="150px" width="150px" /> | <img src="https://drive.google.com/uc?id=1C7WAZmZf1IMHMKsrTi_KIqvrz1QT1v4O" alt="img" height="150px" width="150px" /> |
|                                      [coing-ye](https://github.com/coing-ye)                                     |                                                           [jayoung977](https://github.com/jayoung977)                                                           |                                            [ji-dawn](https://github.com/ji-dawn)                                            |                                  [8566uyu](https://github.com/8566uyu)       |                                  [UichaeHong](https://github.com/UichaeHong)       

