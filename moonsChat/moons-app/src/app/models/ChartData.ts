export class ChartData {
    public key: string;
    public value: number;
    public color: string;

    /**
     *Creates an instance of ChartData.
     * @param {string} key
     * @param {number} value
     * @param {string} color Exadecimal value
     * @memberof ChartData
     */
    public constructor(key: string, value: number, color:string){
        this.key = key;
        this.value = value;
        this.color = color;
    }
}
