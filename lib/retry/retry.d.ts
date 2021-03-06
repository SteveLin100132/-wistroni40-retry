/**
 * 專案名稱： @wistroni40/retry
 * 部門代號： ML8100
 * 檔案說明： 嘗試重拋機制
 * @CREATE Wed Jan 27 2021 下午1:59:42
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
import { Producer } from 'src/producer';
import { RetryOption } from './models';
import { RetryTemplate } from './retry.template';
/**
 * 嘗試重拋機制
 */
export declare class Retry extends RetryTemplate {
    protected producer: Producer;
    /**
     * @param producer 資料拋送者
     * @param options  重拋配置
     */
    constructor(producer: Producer, options?: RetryOption);
    /**
     * 嘗試重拋數據
     *
     * @method public
     * @param payload 要重拋的數據
     */
    retry<T>(payload: T): void;
}
