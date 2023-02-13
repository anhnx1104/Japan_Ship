export interface EditOrderDetailAddress {
  billCode: string;
  addressId: number;
}

export interface OrderProduct {
  orderDetailId: string;
  productId: string;
  url: string;
  productName: string;
  productUrl: string;
  vnPrice: number;
  jpPrice: number;
}

export interface OrderDetail {
  billCode: string;
  deliveryStatus: number;
  purchaseDate: string | null;
  jpExportDate: string | null;
  vnExportDate: string | null;
  shippingDate: string | null;
  completeDate: string | null;
  shippingCode: string;
  customerName: string | null;
  customerPhone: string | null;
  customerAddress: string;
  products: OrderProduct[];
  paymentFee: number;
  serviceFee: number;
  surcharge: number;
  jpShippingFee: number;
  vnShippingFee: number;
  totalPrice: number;
  addressId: number;
  shippingCodeType: number;
  shippingCodeImageUrl: string | null;
  shippingCodeNote: string | null;
}
export interface SearchOrder {
  deliveryStatus: number | null;
  purchaseDateFrom: Date | null;
  purchaseDateTo: Date | null;
  searchText: string | null;
  pageNumber: number;
  pageSize: number;
}

export interface OrderItem {
  id?: number;
  imageUrls: string;
  productUrl: string;
  sellerName: string;
  vnTotalAmount: number;
  totalPrice: number;
  purchaseDate: Date | string;
  deliveryStatus: number;
}
