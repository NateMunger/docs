import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

import AccessorType from "./AccessorType";

const SendListStep: ApiParam = {
  type: "object",
  displayName: "SendListStep",
  fields: [
    {
      type: "string",
      name: "action",
      required: true,
      example: "send-list",
      enum: ["send-list"],
    },
    {
      type: "oneOf",
      name: "list",
      options: [
        {
          type: "string",
          required: true,
          displayName: "string",
          description: "The list name.",
        },
        AccessorType,
      ],
    },
    {
      type: "oneOf",
      name: "brand",
      options: [
        {
          type: "string",
          displayName: "string",
          description:
            "A unique identifier that represents the brand that should be used for rendering the notification.",
        },
        AccessorType,
      ],
    },
    {
      type: "oneOf",
      name: "data",
      options: [
        {
          type: "string",
          displayName: "string",
          description:
            "An object that includes any data you want to pass to a message template. The data will populate the corresponding template variables.",
        },
        AccessorType,
      ],
    },
    {
      type: "oneOf",
      name: "override",
      options: [
        {
          type: "string",
          displayName: "string",
          description:
            "An object that is merged into the request sent by Courier to the provider to override properties or to gain access to features in the provider API that are not natively supported by Courier.",
        },
        AccessorType,
      ],
    },
    {
      type: "oneOf",
      name: "template",
      options: [
        {
          type: "string",
          required: true,
          description:
            'A unique identifier that can be mapped to an individual Notification. This could be the "Notification ID” on Notification detail pages (see the [Notifications page](https://app.courier.com/designer/notifications) in the Courier app) or a custom string mapped to the event in [settings](https://app.courier.com/settings/events).',
        },
        AccessorType,
      ],
    },
    {
      type: "oneOf",
      name: "idempotency_expiry",
      options: [
        {
          type: "string",
          displayName: "string",
          description:
            "A unix epoch timestamp (seconds) or an ISO_8601 date string that describes how long the idempotency_key is valid.",
        },
        {
          type: "number",
          displayName: "number",
        },
        AccessorType,
      ],
    },
    {
      type: "oneOf",
      name: "idempotency_key",
      options: [
        {
          type: "string",
          displayName: "string",
          description:
            "A unique value generated by the client which the server uses to recognize subsequent retries of the same request.",
        },
        AccessorType,
      ],
    },
    {
      type: "string",
      name: "if",
      description:
        "A boolean expression whose value is used to determine the execution of the step. Can optionally consume step reference data.",
    },
    {
      type: "string",
      name: "ref",
      description: "A pointer to step and its data.",
    },
  ],
};

export default SendListStep;
