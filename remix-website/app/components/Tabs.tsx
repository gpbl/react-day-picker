import { Children, isValidElement, useId } from 'react';

export interface TabsProps {
  children: Array<React.ReactElement<TabProps>>;
  id?: string;
}
/** Renders a tab list. */
export function Tabs(props: TabsProps) {
  // Generate a unique ID for the tabs without colons
  const reactId = useId().replace(/[:]/g, '');
  const id = props.id ?? `tabs-${reactId}`;

  // Build the tabs array
  const tabs: Array<{
    tabId: string;
    panelId: string;
    active: boolean;
    label: string;
    children: React.ReactNode;
  }> = Children.map(props.children, (child, index) => {
    if (!isValidElement(child)) return null;
    return {
      tabId: `${id}-tab-${index}`,
      panelId: `${id}-panel-${index}`,
      active: child.props.active ?? false,
      label: child.props.label,
      children: child.props.children
    };
  });

  // If no tab is active, activate the first one
  if (tabs.every((tab) => !tab.active)) {
    tabs[0].active = true;
  }

  return (
    <>
      <div className="flex">
        <div className="flex bg-gray-100 hover:bg-gray-200 rounded-lg transition p-1 dark:bg-gray-700 dark:hover:bg-gray-600">
          <div className="flex space-x-2" aria-label="Tabs" role="tablist">
            {tabs.map((tab) => {
              let className =
                'hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-2 px-3 inline-flex items-center gap-x-2 bg-transparent text-xs text-gray-500 hover:text-gray-700 font-small rounded-lg hover:hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-white';

              if (tab.active) {
                className += ' active';
              }
              return (
                <button
                  key={tab.tabId}
                  type="button"
                  className={className}
                  id={tab.tabId}
                  data-hs-tab={`#${tab.panelId}`}
                  aria-controls={tab.panelId}
                  role="tab"
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-3">
        {tabs.map((tab) => (
          <div
            key={tab.panelId}
            id={tab.panelId}
            className={tab.active ? '' : 'hidden'}
            role="tabpanel"
            aria-labelledby={tab.tabId}
          >
            {tab.children}
          </div>
        ))}
      </div>
    </>
  );
}

export interface TabProps {
  label: string;
  active?: boolean;
  children: React.ReactNode;
}
/** Renders a tab with an associated panel. Must be used inside a Tabs component. */
export function Tab(props: TabProps) {
  return props.children;
}
