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

## Random Picker
- 태그들 중 하나의 태그를 highlight 할 때 하나를 하이라이트하고 전체를 unhighlight하는 것으로 생각했는데 단순히 하나를 highlight하고 unhighlight하는 식으로 iterate하면 편하게 구현이 가능. (알고리즘을 이렇게..)

## Incrementing Counter
- data- 속성을 쓸 수 있다는 것은 늘 알지만 실제 활용은 덜 하게 되니 참고하면 좋다.
- updateCounter를 재귀처럼 핸들링 하는 방식

## Movie App

- 태그::attribute로 attribute의 style을 조정할 수 있다. 대표적인 것이 `.my-input::placeholder`가 된다.
- `letter-spacing` 꽤 힙해보임

### Theme Clock

- transform을 사용할 때 transform의 기준이 되는 중심점(꼭지점)은 center. 이를 변경하고 싶다면 transform-origin 을 조정.