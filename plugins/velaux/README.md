# velaux

Welcome to the velaux plugin!

This plugin adds a sidebar page to allow you to quickly access VelaUX.

Edit `packages/app/src/components/Root/Root.tsx` to add the sidebar

```tsx
// packages/app/src/components/Root/Root.tsx
import { VelaLogo } from 'backstage-plugin-velaux';

export const Root = ({ children }: PropsWithChildren<{}>) => (
  <SidebarPage>
        {/* ... */}
        <SidebarDivider />
        <SidebarScrollWrapper>
          {/* BEGIN */}
          <SidebarItem icon={VelaLogo} to="velaux" text="VelaUX" />
          {/* END */}
        </SidebarScrollWrapper>
      {/* ... */}
  </SidebarPage>
);
```

Edit `packages/app/src/App.tsx` to add routers

```tsx
// packages/app/src/App.tsx
import { VelauxPage } from 'backstage-plugin-velaux';

const routes = (
  <FlatRoutes>
    {/* ... */}
    <Route path="/velaux" element={<VelauxPage />} />
    {/* ... */}
  </FlatRoutes>
);
```

Lastly, you need to make sure you can access the VelaUX webpage. For example, by forwarding the VelaUX addon during development:

```
vela port-forward -n vela-system addon-velaux 9082:80
```
