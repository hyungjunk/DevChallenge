import { addDiabloImage } from "./components/diablo/add-diablo-image";

export default function renderDiablo() {
    addDiabloImage();
    // adding _ intentionally to try code splitting
}

renderDiablo();