# velaux

Welcome to the velaux plugin!

This plugin adds a page to allow you to quickly access VelaUX.

Edit `packages/app/src/components/Root/Root.tsx` to add the sidebar

```tsx
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

Edit `packages/app/src/App.tsx` to routers

```tsx
import { VelauxPage } from 'backstage-plugin-velaux';


const routes = (
  <FlatRoutes>
    {/* ... */}
    <Route path="/velaux" element={<VelauxPage />} />
    {/* ... */}
  </FlatRoutes>
);
```

Last, you need to make sure you can access the VelaUX webpage. For example, by forwarding the VelaUX addon:

```
vela port-forward -n vela-system addon-velaux 9082:80
```
