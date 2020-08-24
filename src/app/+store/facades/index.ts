import { FeatureAFacade } from "./feature-a.facade"; 
import { FeatureBFacade } from "./feature-b.facade";

export const services: any[] = [FeatureAFacade, FeatureBFacade];

export const listOfFacades = {
  facadeA: FeatureAFacade,
  facadeB: FeatureBFacade
};

export * from "./feature-a.facade";
export * from "./feature-b.facade";
