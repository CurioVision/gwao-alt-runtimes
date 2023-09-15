/**
 * An object containing authorization information.
 */

export type AuthorizationEventObject = {
  /**
   * The end user OAuth access token, authorized with the requested scopes
   */
  userOAuthToken?: string

  /**
   * An end-user ID token, if appropriate ID scopes are requested
   */
  userIdToken?: string

  /**
   * An ID token for the Google Workspace Add-ons service account for this deployment
   */
  systemIdToken?: string
}
