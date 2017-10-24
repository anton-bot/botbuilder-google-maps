/**
 * @fileOverview Send maps to user and receive user's location in Bot Framework
 * using Google Maps.
 * @author Anton Ivanov <anton@ivanov.hk>
 */

const builder = require('botbuilder');

/**
 * Default options for Google Maps, any of which can be overridden in the
 * constructor.
 */
const DEFAULT_OPTIONS = {

};

/**
 * Send maps to user and receive user's location in Bot Framework
 * using Google Maps.
 */
class BotBuilderGoogleMaps {
  /**
   * Creates a new instance of the Google Maps handler for Bot Framework.
   * @param {string} googleMapsApiKey - The Google Maps API key obtained from
   *  Google Developer Console.
   * @param {object} [options] - The optional settings for the Google Maps
   *  handler.
   */
  constructor(googleMapsApiKey, options) {
    this.key = googleMapsApiKey;
    this.options = Object.assign(DEFAULT_OPTIONS, options);
  }

  /**
   * Sends a message to the user asking them natively to select a location on
   * a map.
   * @param {object} session - The botbuilder session object.
   * @param {string} prompt - The text of the prompt before the location
   *  request.
   */
  sendFacebookLocationPrompt(session, prompt) {
    const message = new builder.Message(session).text(prompt).sourceEvent({
      facebook: {
        quick_replies: [
          {
            content_type: "location"
          },
        ],
      },
    });

    session.send(message);
  }
}

module.exports = BotBuilderGoogleMaps;