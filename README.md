# rocketchat-react-sidebar

Requirements

```
You should implement the Rocket.Chat webclient sidebar using React.
All design comps, sidebar layouts and assets (icons and user avatar) are in
"design comps" and "assets".
The data used to render channels list is found in data.json file.

The sidebar can be separated in two parts: the header and the channels list.

The Header
On the header you should implement all buttons, but only the first (search),
third (channels list view mode) and fourth (channels list sort) buttons are
functional.

  Search
  The search field will filter the channels list showing only the channels that
  contains some of the characters written in the search input.

  View Mode
  The view mode will change the layout of the channels list. Currently you have
  three view modes (Extended, Medium and Condensed) that can be combined with
  the "Hide Avatar" option.

  Sort
  The sort button will change the order of the channels list. Alphabetical sort
  will sort channels by name and Activity sort will use the channels last
  message timestamp (unix format).

The Channels list
It is a list of channels containing channel name, channel avatar, last message
from channel (only on Extended view mode), unread messages counter, last
message friendly date and channels counter on top.
```

## Available Scripts

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

