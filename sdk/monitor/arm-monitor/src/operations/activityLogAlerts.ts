/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ActivityLogAlerts } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MonitorClient } from "../monitorClient";
import {
  ActivityLogAlertResource,
  ActivityLogAlertsListBySubscriptionIdNextOptionalParams,
  ActivityLogAlertsListBySubscriptionIdOptionalParams,
  ActivityLogAlertsListByResourceGroupNextOptionalParams,
  ActivityLogAlertsListByResourceGroupOptionalParams,
  ActivityLogAlertsCreateOrUpdateOptionalParams,
  ActivityLogAlertsCreateOrUpdateResponse,
  ActivityLogAlertsGetOptionalParams,
  ActivityLogAlertsGetResponse,
  ActivityLogAlertsDeleteOptionalParams,
  AlertRulePatchObject,
  ActivityLogAlertsUpdateOptionalParams,
  ActivityLogAlertsUpdateResponse,
  ActivityLogAlertsListBySubscriptionIdResponse,
  ActivityLogAlertsListByResourceGroupResponse,
  ActivityLogAlertsListBySubscriptionIdNextResponse,
  ActivityLogAlertsListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ActivityLogAlerts operations. */
export class ActivityLogAlertsImpl implements ActivityLogAlerts {
  private readonly client: MonitorClient;

  /**
   * Initialize a new instance of the class ActivityLogAlerts class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorClient) {
    this.client = client;
  }

  /**
   * Get a list of all Activity Log Alert rules in a subscription.
   * @param options The options parameters.
   */
  public listBySubscriptionId(
    options?: ActivityLogAlertsListBySubscriptionIdOptionalParams
  ): PagedAsyncIterableIterator<ActivityLogAlertResource> {
    const iter = this.listBySubscriptionIdPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionIdPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionIdPagingPage(
    options?: ActivityLogAlertsListBySubscriptionIdOptionalParams
  ): AsyncIterableIterator<ActivityLogAlertResource[]> {
    let result = await this._listBySubscriptionId(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionIdNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionIdPagingAll(
    options?: ActivityLogAlertsListBySubscriptionIdOptionalParams
  ): AsyncIterableIterator<ActivityLogAlertResource> {
    for await (const page of this.listBySubscriptionIdPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get a list of all Activity Log Alert rules in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ActivityLogAlertsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ActivityLogAlertResource> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: ActivityLogAlertsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ActivityLogAlertResource[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ActivityLogAlertsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ActivityLogAlertResource> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Create a new Activity Log Alert rule or update an existing one.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param activityLogAlertName The name of the Activity Log Alert rule.
   * @param activityLogAlertRule The Activity Log Alert rule to create or use for the update.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    activityLogAlertName: string,
    activityLogAlertRule: ActivityLogAlertResource,
    options?: ActivityLogAlertsCreateOrUpdateOptionalParams
  ): Promise<ActivityLogAlertsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        activityLogAlertName,
        activityLogAlertRule,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Get an Activity Log Alert rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param activityLogAlertName The name of the Activity Log Alert rule.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    activityLogAlertName: string,
    options?: ActivityLogAlertsGetOptionalParams
  ): Promise<ActivityLogAlertsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, activityLogAlertName, options },
      getOperationSpec
    );
  }

  /**
   * Delete an Activity Log Alert rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param activityLogAlertName The name of the Activity Log Alert rule.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    activityLogAlertName: string,
    options?: ActivityLogAlertsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, activityLogAlertName, options },
      deleteOperationSpec
    );
  }

  /**
   * Updates 'tags' and 'enabled' fields in an existing Alert rule. This method is used to update the
   * Alert rule tags, and to enable or disable the Alert rule. To update other fields use CreateOrUpdate
   * operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param activityLogAlertName The name of the Activity Log Alert rule.
   * @param activityLogAlertRulePatch Parameters supplied to the operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    activityLogAlertName: string,
    activityLogAlertRulePatch: AlertRulePatchObject,
    options?: ActivityLogAlertsUpdateOptionalParams
  ): Promise<ActivityLogAlertsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        activityLogAlertName,
        activityLogAlertRulePatch,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Get a list of all Activity Log Alert rules in a subscription.
   * @param options The options parameters.
   */
  private _listBySubscriptionId(
    options?: ActivityLogAlertsListBySubscriptionIdOptionalParams
  ): Promise<ActivityLogAlertsListBySubscriptionIdResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionIdOperationSpec
    );
  }

  /**
   * Get a list of all Activity Log Alert rules in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ActivityLogAlertsListByResourceGroupOptionalParams
  ): Promise<ActivityLogAlertsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * ListBySubscriptionIdNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscriptionId method.
   * @param options The options parameters.
   */
  private _listBySubscriptionIdNext(
    nextLink: string,
    options?: ActivityLogAlertsListBySubscriptionIdNextOptionalParams
  ): Promise<ActivityLogAlertsListBySubscriptionIdNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionIdNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ActivityLogAlertsListByResourceGroupNextOptionalParams
  ): Promise<ActivityLogAlertsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/activityLogAlerts/{activityLogAlertName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ActivityLogAlertResource
    },
    201: {
      bodyMapper: Mappers.ActivityLogAlertResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated
    }
  },
  requestBody: Parameters.activityLogAlertRule,
  queryParameters: [Parameters.apiVersion12],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.activityLogAlertName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/activityLogAlerts/{activityLogAlertName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ActivityLogAlertResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion12],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.activityLogAlertName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/activityLogAlerts/{activityLogAlertName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion12],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.activityLogAlertName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/activityLogAlerts/{activityLogAlertName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ActivityLogAlertResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated
    }
  },
  requestBody: Parameters.activityLogAlertRulePatch,
  queryParameters: [Parameters.apiVersion12],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.activityLogAlertName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listBySubscriptionIdOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/activityLogAlerts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AlertRuleList
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion12],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/activityLogAlerts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AlertRuleList
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion12],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionIdNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AlertRuleList
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion12],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AlertRuleList
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion12],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
