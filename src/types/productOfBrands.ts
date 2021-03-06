export interface ConItem {
  id: number;
  name: string;
  originalPrice: number;
  minSellingPrice: number;
  ncSellingPrice: number;
  information?: any;
  tip?: any;
  warning?: any;
  discountRate: number;
  info?: any;
  isOnlyAccount: number;
  conCategory2Id: number;
  imageUrl: string;
  path?: string;
}

export interface BrandInfo {
  id: number;
  name: string;
  conCategory1Id: number;
  imageUrl: string;
}
