const initialData = {
  "CSPM": [
    {
      id: "cloud-accounts",
      name: "Cloud Accounts",
      content: "3 cloud accounts connected (AWS, Azure, GCP)",
      metrics: [
        { label: "AWS", value: "1 account", status: "healthy" },
        { label: "Azure", value: "1 account", status: "warning" },
        { label: "GCP", value: "1 account", status: "critical" }
      ]
    },
    {
      id: "cloud-risk",
      name: "Cloud Risk Assessment",
      content: "Overall risk score: 72/100",
      metrics: [
        { label: "Critical", value: "8 issues" },
        { label: "High", value: "14 issues" },
        { label: "Medium", value: "23 issues" }
      ]
    }
  ],
  "CWPP": [
    {
      id: "specific-alerts",
      name: "Top 5 Namespace Alerts",
      content: "Most frequent alerts by namespace",
      metrics: [
        { label: "kube-system", value: "12 alerts" },
        { label: "default", value: "8 alerts" },
        { label: "production", value: "5 alerts" }
      ]
    },
    {
      id: "workload-alerts",
      name: "Workload Alerts",
      content: "32 active workload alerts",
      metrics: [
        { label: "Critical", value: "5 pods" },
        { label: "High", value: "12 pods" },
        { label: "Medium", value: "15 pods" }
      ]
    }
  ],
  "Image": [
    {
      id: "image-risk",
      name: "Image Risk Assessment",
      content: "142 container images scanned",
      metrics: [
        { label: "High Risk", value: "18 images" },
        { label: "Vulnerable", value: "47 images" },
        { label: "Compliant", value: "77 images" }
      ]
    },
    {
      id: "image-security",
      name: "Image Security Issues",
      content: "Top CVEs across all images",
      metrics: [
        { label: "CVE-2023-1234", value: "Found in 32 images" },
        { label: "CVE-2023-5678", value: "Found in 28 images" }
      ]
    }
  ],
  "Ticket": [
    {
      id: "ticket-overview",
      name: "Ticket Overview",
      content: "Security tickets status",
      metrics: [
        { label: "Open", value: "14 tickets" },
        { label: "In Progress", value: "7 tickets" },
        { label: "Resolved", value: "23 tickets" }
      ]
    }
  ]
};

export default initialData;