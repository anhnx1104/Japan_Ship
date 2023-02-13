import {
  API_ORDER_DETAIL,
  API_ORDER_DETAIL_UPDATE_ADDRESS,
} from 'constant/api-path';
import { CommonResponse } from 'types/common';
import { EditOrderDetailAddress, OrderDetail } from 'types/order';
import HttpClient from 'utils/HttpClient';
import { SearchOrder } from 'types/order';
import { API_ORDER_VIEW } from 'constant/api-path';

class ProfileOrder {
  public search(params: SearchOrder) {
    return HttpClient.post<typeof params, CommonResponse<any>>(
      API_ORDER_VIEW,
      params
    );
  }
  public getOrderDetail(billCode: string) {
    return HttpClient.get<null, CommonResponse<OrderDetail>>(
      `${API_ORDER_DETAIL}/${billCode}`
    );
  }

  public updateOrderAddress(data: EditOrderDetailAddress) {
    return HttpClient.put<EditOrderDetailAddress, CommonResponse<OrderDetail>>(
      `${API_ORDER_DETAIL_UPDATE_ADDRESS}`,
      data
    );
  }
}

export default new ProfileOrder();