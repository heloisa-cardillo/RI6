import Calculo from "./calculo";

export default class Bhaskara extends Calculo {
    public calcular(a: number, b: number, c: number): number[] | string {
        const delta = b * b - 4 * a * c;

        if (delta < 0) {
            return "A equação não possui raízes reais.";
        }

        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);

        if (delta === 0) {
            return [x1];
        } else {
            return [x1, x2];
        }
    }
}