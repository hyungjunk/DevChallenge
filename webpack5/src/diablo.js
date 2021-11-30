import { addDiabloImage } from "./components/diablo/add-diablo-image";
import _ from 'lodash';

export default function renderDiablo() {
    addDiabloImage();
    // adding _ intentionally to try code splitting
    console.log(_.upperFirst("diablo image rendered"));
}