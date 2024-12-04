import { Result } from "@/model";
import request from "@/utils/request";
import { AxiosPromise } from "axios";
import { BlogInfo } from "./types";

/**
 * 获取博客后台信息
 * @returns 博客后台信息
 */
export function getBlogInfo(): AxiosPromise<Result<BlogInfo>> {
  return request({
    url: "/admin",
    method: "get",
  });
}

/**
 * 上传访客信息
 */
export function report(): AxiosPromise<Result<null>> {
  return request({
    url: "/report",
    method: "post",
  });
}
