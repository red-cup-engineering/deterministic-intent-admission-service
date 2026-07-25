export interface ConsiderationPolicy {
  type: "ConsiderationPolicy";
  acceptableAlternatives: unknown[];
  [key: string]: unknown;
}

export interface BoundedAgenticIntentRequest {
  taskType: string;
  objective: string;
  desiredUse: string;
  context: Record<string, unknown>;
  outputSchema: Record<string, unknown>;
  considerationPolicy: ConsiderationPolicy;
  maxTokens?: number;
}

export interface BoundedInferenceWorkLotIntent {
  type: "BoundedInferenceWorkLotIntent";
  taskType: string;
  objective: string;
  desiredUse: string;
  context: Record<string, unknown>;
  outputSchema: Record<string, unknown>;
  constraints: {
    considerationPolicy: ConsiderationPolicy;
    maxTokens: number;
    refinement: "downward-only";
    upwardEscalationAuthorized: false;
    customerAcceptanceRequired: true;
  };
}

export declare function admitBoundedAgenticIntent(input: BoundedAgenticIntentRequest): BoundedInferenceWorkLotIntent;
