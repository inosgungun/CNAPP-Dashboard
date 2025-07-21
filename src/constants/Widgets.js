// widgets.js

export const TABS = ["CSPM", "CWPP", "Image", "Ticket"];

export const WIDGETS = {
  CSPM: [
    { id: "cloud-accounts", name: "Cloud Accounts" },
    { id: "cloud-risk", name: "Cloud Account Risk Assessment" },
  ],
  CWPP: [
    { id: "specific-alerts", name: "Top 5 Namespace Specific Alerts" },
    { id: "workload-alerts", name: "Workload Alerts" },
  ],
  Image: [
    { id: "image-risk", name: "Image Risk Assessment" },
    { id: "image-security", name: "Image Security Issues" },
  ],
  Ticket: [{ id: "ticket-overview", name: "Ticket Overview" }],
};
