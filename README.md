# 🧳 우리가족여행 (trip-plan) — 가족 여행 플랜 모음

여행별 일정표·지도를 한 저장소에서 관리합니다. 루트 `index.html`이 여행 목록(`trips.json`)을 읽어 보여 줍니다.

## 여행 목록

| 폴더 | 여행 | 기간 | 상태 |
|------|------|------|------|
| `fukuoka/` | 벳푸 온천 + 후쿠오카 5박6일 | 2026-11-29 ~ 12-04 | 1차안 |
| `high-one/` | 하이원리조트 2박3일 | 2026-07-29 ~ 07-31 | 완료 |
| `sapporo/` | 삿포로 4박5일 | 2026-04-24 ~ 04-28 | 완료 |

## 구조

```
trip-plan/
├── index.html        # 여행 목록 허브 (trips.json을 읽어 렌더링)
├── trips.json        # 여행 레지스트리 — 여행을 추가/수정할 때 여기만 고치면 허브에 반영
├── <여행 폴더>/
│   ├── <name>_family_trip.html   # 일정표
│   ├── map/map.html, locations.js # 지도 (Leaflet + OpenStreetMap, API 키 불필요)
│   └── README.md 등 기획 문서
```

## 새 여행 추가하는 법

1. 폴더 생성 (소문자-하이픈, 예: `osaka/`). 기존 폴더 이름은 공개 URL에 쓰이므로 바꾸지 않는다.
2. 일정표 HTML과 `map/`을 만든다. 삿포로(`sapporo/`)가 가장 완성된 견본.
3. `trips.json`의 `trips` 배열에 항목 추가 (`id`, `title`, `emoji`, `dest`, `start`/`end`, `badges`, `links`). 날짜가 지나면 허브에서 자동으로 "지난 여행"으로 이동한다.
4. 일정표 안의 지도 버튼 링크는 **절대 주소**로 쓴다: `https://asakasimo1.github.io/trip-plan/<폴더>/map/map.html`
   (상대경로는 Artifact/미리보기 환경에서 열리지 않아 바꾼 이력이 있음 — 커밋 `ef44bd8`)

## 공개 주소

- 허브: https://asakasimo1.github.io/trip-plan/
- 벳푸·후쿠오카: https://asakasimo1.github.io/trip-plan/fukuoka/fukuoka_family_trip.html
- 삿포로: https://asakasimo1.github.io/trip-plan/sapporo/sapporo_family_trip.html
- 하이원: https://asakasimo1.github.io/trip-plan/high-one/high_one_family_trip.html

## 📲 앱처럼 설치 (PWA)
GitHub Pages(HTTPS)에서 서비스되는 웹앱이라 스토어 없이 홈 화면에 설치된다. Vercel은 쓰지 않는다.
- 갤럭시: Chrome으로 허브를 열고 첫 화면의 **앱으로 설치** 버튼(없으면 메뉴 ⋮ → 앱 설치/홈 화면에 추가)
- 아이폰: **Safari**로 열고 공유(⬆︎) → **홈 화면에 추가**
- 앱 이름: **우리가족여행** · 아이콘: 후지산·붉은 해·세이가이하·벚꽃 일러스트(`icons/`, 코드로 그림)
- 구성: `manifest.webmanifest`(앱 이름·아이콘), `sw.js`(오프라인 캐시: 같은 사이트 파일은 네트워크 우선→실패 시 캐시), `icons/`
- 오프라인: 일정표·쇼핑목록·사진은 열림, 구글 지도·OSM 타일은 인터넷 필요. 설치 전/후에 온라인에서 각 페이지를 한 번씩 열어 두면 확실하다.
- 새 파일을 추가하면 `sw.js`의 `CORE` 목록에 넣고 `VERSION`을 바꾼다(안 넣어도 방문 시 자동 캐시됨).
- 기기 저장 값(콜밴 번호·쇼핑 체크)은 기기별/브라우저별이다. 아이폰은 설치한 앱이 Safari와 저장소가 따로라서 앱 안에서 다시 입력해야 한다.

## 이력

- 이 저장소는 예전 `trip-sapporo` 저장소의 커밋 이력을 병합해 가지고 있다. 당시 최종 커밋은 태그 `trip-sapporo-final`.
  삿포로 파일은 `sapporo/`에 이미 최신본으로 들어 있다(원본 경로 `1_practice/trip_sapporo/`).
