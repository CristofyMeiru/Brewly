import { loyaltyService } from "../services/loyalty.service";

export const getLoyaltyPointsQuery = () => ({
  queryKey: ["loyalty", "points"],
  queryFn: () => loyaltyService.getPoints(),
});
