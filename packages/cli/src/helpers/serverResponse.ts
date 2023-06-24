import logger from "./logger.js";

export const checkServerError = (response: any) => {
  if (response?.message === "Network Error") {
    logger.error(response?.message + "\n" + "Try again later.");
  }
  if (response?.code === "ECONNABORTED") {
    logger.error("Connection Error" + "\n" + "Try again later.");
  }
  if (
    response?.code === "--route/route-not-found" ||
    response?.code === "--api/server-error"
  ) {
    logger.error("Something Went Wrong" + ".." + "Try again later.");
  }
  if (response?.code === "--auth/account-notfound") {
    logger.error("Something Went Wrong" + ".." + "Try again later.");
  }
};

// check for invalid token
export const checkInvalidToken = (response: any): void => {
  if (response?.code === "--auth/invalid-token") {
    logger.error("Session Expired. Please log in again.");
  }
};
