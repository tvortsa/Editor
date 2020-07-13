/**
 * Generated by the Babylon.JS Editor v${editor-version}
 */

import { Scene } from "@babylonjs/core";

// ${requires}

/**
 * Tells that this script has been generated by a graph.
 */
export const IsGraph: boolean = true;

/**
 * Defines the generated class of the graph.
 */
export default class GraphClass {
    // ${properties}

    /**
     * Constructor.
     * @param scene defines the scene where the graph is running.
     */
    public constructor(private _scene: Scene) {

    }

    /**
     * Called on the scene starts.
     */
    public onStart(): void {
        // ${onStart}
    }

    /**
     * Called each frame.
     */
    public onUpdate(): void {
        // ${onUpdate}
    }

    /**
     * Returns the reference to the current scene the graph is running.
     */
    public getScene(): Scene {
        return this._scene;
    }
}