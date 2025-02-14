export const formJSON = {
  title: "Satisfaction Survey",
  description: "We want to know your opinion.",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "radiogroup",
          name: "satisfaction",
          title: "How would you rate the service?",
          choices: ["Excellent", "Good", "Average", "Poor"],
          isRequired: true
        },
        {
          type: "text",
          name: "improvement",
          title: "What could we improve?",
          isRequired: false
        },
        {
          type: "rating",
          name: "service_quality",
          title: "How would you rate the quality of the service?",
          minRateDescription: "Poor",
          maxRateDescription: "Excellent",
          rateValues: [1, 2, 3, 4, 5],
          isRequired: true
        }
      ]
    },
    {
      name: "page2",
      elements: [
        {
          type: "checkbox",
          name: "features_used",
          title: "Which features did you use from our service?",
          choices: ["Fast delivery", "Customer support", "Easy-to-use platform", "Low prices"],
          isRequired: true
        },
        {
          type: "dropdown",
          name: "recommendation",
          title: "Would you recommend our service to others?",
          choices: ["Yes", "No", "Maybe"],
          isRequired: true
        },
        {
          type: "comment",
          name: "additional_feedback",
          title: "Do you have any other comments or suggestions?",
          isRequired: false
        },
        {
          type: "matrix",
          name: "service_features_rating",
          title: "Please rate the following service features",
          columns: ["1", "2", "3", "4", "5"],
          rows: [
            { value: "delivery", text: "Delivery speed" },
            { value: "support", text: "Customer support" },
            { value: "platform", text: "Platform usability" },
            { value: "price", text: "Price value" }
          ],
          isRequired: true
        }
      ]
    }
  ]
};
