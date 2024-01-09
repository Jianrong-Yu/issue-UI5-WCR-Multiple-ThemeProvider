import {
  Button,
  Modals,
  MessageBoxTypes,
  ThemeProvider,
} from "@ui5/webcomponents-react";

import { setCustomElementsScopingSuffix } from "@ui5/webcomponents-base/dist/CustomElementsScope.js";

setCustomElementsScopingSuffix("remote");

function Page() {
  const showMessageBox = Modals.useShowMessageBox();
  return (
    <div style={{border: '1px solid grey', margin: 16, padding: 16}}>
      <div>Remote App, always working</div>
      <Button
        onClick={() =>
          showMessageBox({
            type: MessageBoxTypes.Confirm,
            children: "Show MessageBox for remote-app?",
          })
        }
      >
        Show Message From Remote!
      </Button>
    </div>
  );
}

export default function RemoteApp() {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  );
}
