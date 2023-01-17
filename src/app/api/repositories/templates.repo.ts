import { AxiosInstance, AxiosResponse } from "axios";
import http from "../http";

class TemplateApiRepository {
  constructor(private httpReq: AxiosInstance) {}

  /**
   * create new template
   * @param payload - new template payload
   * @returns
   */
  createTemplate(
    payload: any
  ): Promise<AxiosResponse<AppResponse<any>>> {
    return this.httpReq.post("/templates", payload);
  }

}
const templateApiRepository = new TemplateApiRepository(http);
export default templateApiRepository;
