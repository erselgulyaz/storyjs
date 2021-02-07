# storyjs

Storyjs is a javascript library similar to the story areas we often use in our social media applications. If you want to create and manage storyboard for your website, you only need to add the storyjs between the project files. Afterwards, you can arrange its appearance according to your wishes.

## Properties

- Pure javascript
- Ecmascript 6
- Editable properties

## Test Address

[projects.erselgulyaz.com/storyjs/](http://projects.erselgulyaz.com/storyjs/)

## Usage

#### Install with terminal

```html
npm install storyjs
```

#### Import your js file

```html
import storyjs from "storyjs";
```

#### Import scss or css file

```html
@import "storyjs/src/story-styles.scss"; 
// OR 
@import "storyjs/dist/storyjs-styles.css";
```

#### Init

```html
const items = [
  {
    id: 1,
    profilePic: "http://projects.erselgulyaz.com/storyjs/horse.png",
    modalPic: "http://projects.erselgulyaz.com/storyjs/horse.png",
    title: "Sample Item",
    time: 10,
  },
  {
    id: 2,
    profilePic: "http://projects.erselgulyaz.com/storyjs/panda.png",
    modalPic: "http://projects.erselgulyaz.com/storyjs/panda.png",
    title: "Sample Item",
    time: 3,
  },
  {
    id: 3,
    profilePic: "http://projects.erselgulyaz.com/storyjs/penguen.png",
    modalPic: "http://projects.erselgulyaz.com/storyjs/penguen.png",
    title: "Sample Item",
    time: 7,
  },
];
const sample = new storyjs({
  items,
  selector: "#storyjs-selector"
});
```

## Parameters

<table>
	<tr>
      <td>Name</td>
      <td>Type</td>
      <td>Default</td>
      <td>Description</td>
    </tr>
    <tr>
      <td>
      <strong>items</strong>
      </td>
      <td>
      Array
      </td>
      <td>
        null
      </td>
      <td>
      <p>Array should come as shown above. ID values must be in order. The inside of each Object must be prepared with the same variables.</p>
      </td>
    </tr>
    <tr>
      <td>
      <strong>selector</strong>
      </td>
      <td>
      String
      </td>
      <td>
        #storyjs-selector
      </td>
      <td>
      <p>The container to be selected for the creation of Storyjs must be written on the page.</p>
      </td>
    </tr>

</table>
