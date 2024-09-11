/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { OAuthConnector } from "./oauth-connector.ts";

const form = document.getElementById('oauth-form') as HTMLFormElement;

form.addEventListener("submit", async (event) => {
    let connector = new OAuthConnector(
      (document.getElementById("auth-endpoint") as HTMLInputElement).value,
      (document.getElementById("access-endpoint") as HTMLInputElement).value
    );

    connector
      .getOAuthAccessCode(
        (document.getElementById("client-id") as HTMLInputElement).value,
        (document.getElementById("client-secret") as HTMLInputElement).value,
        [(document.getElementById("scope") as HTMLInputElement).value]
      )
      .then((code: string) => {
        (document.getElementById("access-code") as HTMLInputElement).value = code;
        (document.getElementById("auth-token") as HTMLInputElement).value =
          (connector.authentication_token || "");
        console.log("code returned: " + code);
      });
    event.preventDefault();
  });
