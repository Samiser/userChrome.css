# Samiser's Custom Firefox

## How to install

you need pywal installed for this to work

1. Put the files in this folder in .mozilla/firefox/[active profile]/chrome/
2. In that chrome folder, create a symlink to your pywal css colours: ln -s ~/.cache/wal/colors.css colors.css
3. In a new tab, type or paste about:config in the address bar and press Enter/Return. Click the button accepting the risk.
4. In the search box above the list, type or paste userprof and pause while the list is filtered. If you do not see anything on the list, please ignore the rest of these instructions. You can close this tab now.
5. Double-click the toolkit.legacyUserProfileCustomizations.stylesheets preference to switch the value from false to true.

## How to use

- To get the menu bar just double click on a tab
- The colours will automatically update when you restart firefox after setting a new backgrond with pywal
