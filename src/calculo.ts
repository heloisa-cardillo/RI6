export default abstract class Calculo {
    public abstract calcular(...args: number[]): number | number[] | string;
}