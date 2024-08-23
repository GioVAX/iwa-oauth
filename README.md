# OAuth flow for an IWA

A demo showing one way to execute an [OAuth](https://datatracker.ietf.org/doc/html/rfc6749)
flow from an [Isolated Web Apps](https://github.com/WICG/isolated-web-apps/)

## Requirements

- Chrome or ChromeOS v122 or greater

## Installation

The example application can be run locally either via Dev Mode Proxy or by
creating a signed bundle.
Full instructions for both approaches can be found in the [IWA Kitchen Sink](https://github.com/chromeos/iwa-sink) project.

You will need to access your Identity Provider (IDP) to register the application
 and retrieve your Client ID and Client Secret.

## Usage

After launching the app, fill the form fields with your IdP endpoints and the app registration information, then click the `OAuth flow` button.
The app will open a new browser tab to complete the authentication, and will
then populate the token fields with the values received from the IdP.

## Disclaimer

This is not an officially supported Google product, and the code in this repository
is provided as a head start for developers that intend to implement their own
approach to OAuth flows.
