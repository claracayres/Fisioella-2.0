export const trackAdsConversion = (transactionId = "") => {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-540983375/6EXiCIn2tt4bEM-A-4EC",
        transaction_id: transactionId,
      });
    } else {
      // No-op in dev without gtag loaded
      // console.debug("gtag not available; skipping conversion event");
    }
  } catch {
    // Fail silently to avoid breaking UX
  }
};
