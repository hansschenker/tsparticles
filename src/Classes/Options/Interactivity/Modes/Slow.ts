import type { ISlow } from "../../../../Interfaces/Options/Interactivity/Modes/ISlow";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";

export class Slow implements ISlow {
    /**
     * @deprecated this property will be removed soon, please use the HoverMode.slow in the HoverEvent
     */
    get active(): boolean {
        return this._active;
    }

    /**
     * @deprecated this property will be removed soon, please use the HoverMode.slow in the HoverEvent
     */
    set active(value: boolean) {
        this._active = value;
    }

    private _active: boolean;

    public factor: number;
    public radius: number;

    constructor() {
        this._active = false;
        this.factor = 1;
        this.radius = 0;
    }

    public load(data?: RecursivePartial<ISlow>): void {
        if (data !== undefined) {
            if (data.active !== undefined) {
                this._active = data.active;
            }

            if (data.factor !== undefined) {
                this.factor = data.factor;
            }

            if (data.radius !== undefined) {
                this.radius = data.radius;
            }
        }
    }
}