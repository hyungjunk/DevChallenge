### Expanding card

- flex를 이용한 레이아웃

### Progress Step

- before, after 같은 CSS pseudo 연산자를 이용한 컨텐츠 manipulation
- CSS에서도 변수를 선언할 수 있다.
- DOM에 직접 조작을 가하지 않는다는 이점 (성능차이는 크게 없음)

### Rotating Navigation

- Transform Rotate

### Hidden Search

- Transform translate: 원래 엘리먼트가 있어야 하는 위치에서 이동

### Blurry Loading

- CSS attr의 값도 동적으로 계산할 수 있다. calc(100% + 50px). 띄어쓰기 조심

### Scroll Animation

- scroll event listener
- getBoundingClientRect : viewport에서 해당 엘리먼트의 절대위치

### form wave animation

- input의 수도연산자에 valid도 있다는 것
- cubic-bezier animation: 자연스러운 bouncing 효과 (https://matthewlein.com/tools/ceaser)

## sound_board
- [MDN HTML5 audio](https://developer.mozilla.org/ko/docs/Web/HTML/Element/audio)
- JS로도 play 가능 `document.querySelector(audio).play()`