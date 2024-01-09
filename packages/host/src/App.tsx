import {
  Button,
  Modals,
  MessageBoxTypes,
  ShellBar,
  ThemeProvider,
} from "@ui5/webcomponents-react";
import wcrPkg from "@ui5/webcomponents-react/package.json";
import React from "react";
const RemoteApp = React.lazy(() => import("remote/RemoteApp")) as any;
import { setCustomElementsScopingSuffix } from "@ui5/webcomponents-base/dist/CustomElementsScope.js";

setCustomElementsScopingSuffix("host");

function Host() {
  const showMessageBox = Modals.useShowMessageBox();
  return (
    <div style={{ border: "1px solid grey", margin: 16, padding: 16 }}>
      <div>Host App, working on the first click, then fail.</div>
      <Button
        onClick={() =>
          showMessageBox({
            type: MessageBoxTypes.Confirm,
            children: "Show MessageBox for host-app?",
          })
        }
      >
        Show Message From Host!
      </Button>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div>
        <ShellBar
          logo={
            <img
              src="https://sap.github.io/ui5-webcomponents/assets/images/sb-logo.png"
              alt="Logo"
            />
          }
          primaryTitle="UI5 Web Components for React Issue Template"
          secondaryTitle={`v${wcrPkg.version}`}
        />
        <Host />
        <RemoteApp />
      </div>
    </ThemeProvider>
  );
}
