
export type Action<ActionType: string, ActionPayload = void> = {|
    type: ActionType,
    +payload: ActionPayload,
|};
