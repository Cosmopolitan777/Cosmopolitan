# Cosmopolitan
## :dart: 우삼겹: 우리동네 맛집 삼겹줄
<p align='center'>
<img width="600" alt="스크린샷 2023-03-25 10 02 55" src="https://user-images.githubusercontent.com/61008837/227673600-70a5ac8b-8d7d-4507-b36a-108fe140d386.png">


</p>

<p align='center'>
    <img src="https://img.shields.io/badge/EJS-962300?style=flat-square&logo=ejs&logoColor=white"/>
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>
 
</p>

## :mag_right: 기획 배경
- 자치구별로 한눈에 맛집을 확인
- 맛집을 추천받고 또 추천도 할 수 있는 서비스

## :star: 서비스 소개  
### 자치구 별 진짜 맛집을 소개합니다.
> - 지역구 별 및 한·중·양식별 맛집 확인
### 사용자가 맛집을 추천할 수 있습니다.
> - 고객 센터를 이용한 맛집 추천가능
### 생생한 후기를 확인할 수 있습니다.
> - 별점평가 가능
> - 평균평점을 확인가능
> - 리뷰작성 가능

## :open_file_folder: 주요 기능
- **메인 화면** - 지역구 polygon 좌표 설정
- **서비스 소개** - 동영상 자동 재생 
- **FAQ** - 아코디언 메뉴 jQuery구현
- **고객센터** - 테이블 게시판 및 페이지네이션 구현
- **맛집 확인 기능** - 스와이퍼 라이브러리 사용
- **맛집 상세페이지** - 이미지 애니메이션 사용
- **리뷰, 별점, 공감 기능** - json 리뷰 저장, 별점 평균 표시 구현
- **미로찾기 기능** - 랜덤 생성 및 BFS알고리즘 구현

## :arrows_counterclockwise: 서비스 흐름
<img width="800" alt="image" src="https://user-images.githubusercontent.com/61008837/227681564-b11c528d-f9c6-4740-a8e5-d5d68718ee13.png">
<img width="800" alt="image" src="https://user-images.githubusercontent.com/61008837/227681579-0b4730a5-43a9-4dfb-babd-50edd64c65fa.png">
<img width="800" alt="image" src="https://user-images.githubusercontent.com/61008837/227681589-afb888c6-e02d-46ec-85e0-8495d14221e2.png">

## :arrows_counterclockwise: 시현 영상


<p align='center' width="800">https://user-images.githubusercontent.com/61008837/236637691-0bea1299-eb87-4318-8810-1b39b996f2c3.mp4</p>

<br/>

## :white_check_mark:프로젝트 구동 방법 
```
git clone https://github.com/jayoung977/usamgyeob.git
node app.js
```
- ncp 배포링크: http://27.96.134.230:8000/

## :speech_balloon: 기술 및 논의 정리
- 스와이퍼 기능에서 슬라이드 수에 따른 **사진 늘림현상**이 발생 </br>**&rarr; 스와이퍼 기본 속성(slidesPerView 2배이상)을 확인하여 문제를 해결했습니다.**
- 전체 페이지를 초기에 **반응형**으로 적용하였으나 </br> **&rarr; 메인 화면 좌표가 맞지않는  문제가 발생되어 각 자치구 페이지에만 반응형을 추가했습니다.**
- 미로 찾기에서 **대각선으로 길찾기되는 문제**가 발생하여 </br> **&rarr; 좌표 넣는 지점을 수정해 해결하였습니다.**
- 리뷰작성시 **리뷰내용이 저장되지 않는 문제**가 발생하여 </br> **&rarr; 경로 수정 및 변수 지정을 통해 해결했습니다.**
- 리뷰작성시 **리뷰 혹은 별점이 추가되지 않는 경우** 리뷰가 저장되지 않고 </br> **&rarr; 경고창을 띄우도록 하여 평균평점에 오류가 생기지 않도록 하였습니다.** 


## :shipit: 팀원 소개


|                                                       최자영(팀원)                                                       |                                                                         정성윤(조장)                                                                         |                                                       김지효(팀원)                                                       |                                                       정유진(팀원)                                                       |                                                       홍의채(팀원)                                                       |
| :---------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: |
| <img src="https://drive.google.com/uc?id=1Ao2wxVDuAqWOM8dxjPGzVL_HJ27_oIhm" alt="img" height="150px" width="150px" /> | <img src="https://avatars.githubusercontent.com/u/127190426?v=4" alt="img" height="150px" width="150px" /> | <img src="http://drive.google.com/uc?export=view&id=1J4E0u3y9uFBzb8ttt8WvVYTImascdJcv" alt="img" height="150px" width="150px" /> | <img src="https://avatars.githubusercontent.com/u/68095455?v=4" alt="img" height="150px" width="150px" /> | <img src="https://avatars.githubusercontent.com/u/68095455?v=4" alt="img" height="150px" width="150px" /> |
|                                      [jayoung977](https://github.com/jayoung977)                                     |                                                           [baggy102](https://github.com/baggy102)                                                           |                                            [KIMSEUNGYOON](https://github.com/KIMSEUNGYOON)                                            |                                  [kiyomin0615](https://github.com/kiyomin0615)       |                                  [kiyomin0615](https://github.com/kiyomin0615)       

