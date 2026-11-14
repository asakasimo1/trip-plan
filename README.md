# 🧳 trip-plan — 가족 여행 플랜 모음

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

## 이력

- 이 저장소는 예전 `trip-sapporo` 저장소의 커밋 이력을 병합해 가지고 있다. 당시 최종 커밋은 태그 `trip-sapporo-final`.
  삿포로 파일은 `sapporo/`에 이미 최신본으로 들어 있다(원본 경로 `1_practice/trip_sapporo/`).
